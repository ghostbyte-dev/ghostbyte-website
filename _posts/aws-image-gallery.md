---
title: "NextJS image gallery using AWS S3"
excerpt: "A straight forward tutorial on how to build a blazing fast image gallery using NextJS and AWS S3"
coverImage: "/assets/blog/aws-image-gallery/cover.webp"
date: "2025-09-09"
author:
  name: Emanuel Hiebeler
  picture: "/assets/blog/authors/emanuel.webp"
ogImage:
  url: "/assets/blog/aws-image-gallery/cover.webp"
---

# How to make a big image gallery fast
Big image galleries can be a nightmare to make, they use huge amounts of storage and load slowly. So the challenge was to find a relatively cheap way to store this large amounts of images somewhere, but of course the gallery should still have a very fast load time.

With these prerequesites we decided to give AWS a try. With AWS we would have the possibility for a big storage (S3) for our images, for serverless functions (lambda) to create our thumbnails on the image oupload and for a CDN (CloudFront) to have the images cached.

![AWS Architecture](/assets/blog/awsGallery/architecture.webp)

## AWS

> Be careful to use the same AWS region in all the next steps.

### Simple Storage Service (S3)

For the image storage we are using a general purpose S3 bucket, where we can create a folder for each image gallery.

1. To create the bucket we will open the [AWS S3 console](https://console.aws.amazon.com/s3).
2. Check that General purpose bucket is selected and add a bucket name.
3. The other option can be left as is.

### Permission policy

For our Lambda function to be able to access the images on the S3 bucket, we need to create a permission policy for it.

1. Open the [AWS Policies page](https://console.aws.amazon.com/iam/home#/policies) and click **create policy**.
2. Under *policy editor* select **json** and paste the following code:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "logs:PutLogEvents",
                "logs:CreateLogGroup",
                "logs:CreateLogStream"
            ],
            "Resource": "arn:aws:logs:*:*:*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::*/*"
        }
    ]
}
```
3. Select **next**.
4. Enter a name for our policy.
5. Select **Create policy**.

This allows our Lambda function to get objects from S3 and add new ones there too. It also allows the Lambda function to write to CloudWatch Logs to be able to better debug the function.

### Execution role

Since we now have a permission policy, we create a role for our function with the permission set we just created.

1. Open the [Role page](https://console.aws.amazon.com/iam/home#/roles) and click **create role**.
2. For trusted entity type select **AWS service** and for use case select **Lambda**.
3. For the Permission policy, search the permission you created in the previous step and select it.
4. Add a **name** for the Role.
5. Create the Role.

### AWS Lambda

Now that everything is set up, we can get started with the lambda function. This function is called when new images are uploaded to the S3 bucket and generates thumbnails for the uploaded images.

1. First open the [Function page](https://console.aws.amazon.com/lambda/home#/functions) and select **create**.
2. Select **Author from scratch**.
3. Enter a **name** for our function.
4. Choose the runtime **Node.js 22.x**.
5. Select the Architecture **x86.64**.
6. Under change default execution role:
	- Select **use an existing role**.
	- For the existing role search for the previously create **execution role**.
7. Select **Create function**.

Now that the lambda function is created, we will implement our function locally and then upload it. So since we will use node for our function, lets initialize node.

```bash
npm init -y
```

To process our images and reupload them to the S3 storage, we need to install 2 packages. The image processing package **sharp** and **s3-client** to reupload it to S3.

```bash
npm install sharp
npm install @aws-sdk/client-s3
```

For our function we will create a **index.mjs** file. We use **.mjs** since we use ES modules. That's all the prerequisites we need, so lets go through the code step by step.

First we will use the handler function, which gets called everytime lambda is invoked. 

```javascript
export const handler = async (event) => {
	await Promise.all(
		event.Records.map(async (record) => {
			const bucket = record.s3.bucket.name;
			const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

			const response = await client.send(
				new GetObjectCommand({ Bucket: bucket, Key: key })
			);
		});
	)
}
```

Here we first map through all our records on this event, since we can also upload multiple images to S3 at once. With this record we then get the bucket name and the key of the image and then get the object, which will return a stream of our image.

To be able to process the image further, we first have to convert the image stream to a buffer.

```javascript
const streamToBuffer = async (stream) => {
	return new Promise((resolve, reject) => {
		const chunks = [];
		stream.on("data", (chunk) => chunks.push(chunk));
		stream.on("end", () => resolve(Buffer.concat(chunks)));
		stream.on("error", reject);
	});
};
```

Now that we have the image as a buffer, we can use the image processing library *sharp* to compress our image for a thumbnail.

```javascript
const thumbnailBuffer = await sharp(inputBuffer)
	.resize({ width: 500})
	.avif()
	.toBuffer();
```

With our compressed image, all that is now left to do is to upload the thumbnail to the S3 bucket again.

```javascript
client.send(
	new PutObjectCommand({
		Bucket: bucket,
		Key: thumbKey,
		Body: thumbnailBuffer,
		ContentType: "image/avif",
	})
)
```

Now as we have all the parts in place here is the whole code for our lambda function where we are creating a thumbnail and a medium sized image for each uploaded image.

```javascript
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { Readable } from "stream";

const client = new S3Client();

const streamToBuffer = async (stream) => {
	return new Promise((resolve, reject) => {
		const chunks = [];
		stream.on("data", (chunk) => chunks.push(chunk));
		stream.on("end", () => resolve(Buffer.concat(chunks)));
		stream.on("error", reject);
	});
};

export const handler = async (event, context) => {
	try {
		await Promise.all(
			event.Records.map(async (record) => {
				const bucket = record.s3.bucket.name;
				const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

				if (key.includes("/thumbs/") || key.includes("medium")) {
					return;
				}

				const response = await client.send(
					new GetObjectCommand({ Bucket: bucket, Key: key })
				);

				const inputBuffer = await streamToBuffer(response.Body);
				const thumbnailBuffer = await sharp(inputBuffer)
					.resize({ width: 500})
					.avif()
					.toBuffer();

				const mediumBuffer = await sharp(inputBuffer)
					.resize({ width: 1300 })
					.avif()
					.toBuffer();

				const lastSlash = key.lastIndexOf("/");

				const folderPath = lastSlash !== -1 ? key.slice(0, lastSlash) : "";

				const filenameWithoutExt = key.slice(lastSlash + 1).replace(/\.[^/.]+$/, ""); // remove any extension

				const thumbKey = `${folderPath}/thumbs/${filenameWithoutExt}.avif`;

				const mediumKey = `${folderPath}/medium/${filenameWithoutExt}.avif`;

				await Promise.all([
					client.send(
						new PutObjectCommand({
							Bucket: bucket,
							Key: thumbKey,
							Body: thumbnailBuffer,
							ContentType: "image/avif",
						})
					),
					client.send(
						new PutObjectCommand({
							Bucket: bucket,
							Key: mediumKey,
							Body: mediumBuffer,
							ContentType: "image/avif",
						})
					)
				]);
			})
		);
		return { statusCode: 200, body: "All thumbnails created" };
		} catch (err) {
			console.error("An error occurred", err);
			throw err;
		}
	};
```

Now that our function is finished locally, we have to upload it to lambda. To upload it to AWS, we have to compress it to a zip file with the content of our folder at the root. To do this we can run this command inside our project folder.

```bash
zip -r lambda-function.zip .
```

Now in AWS go back to the Lambda function and in the tab **Code**, select **Upload from**, select **.zip file** and upload it. With that the Lambda function is finished.

### S3 trigger

Now that we have our Lambda function working, we have to make sure that the function gets called everytime we upload an image to our S3 bucket. For this we are adding a trigger to our function.

1. In our **Function overview** select **Add trigger**.
2. Under source select **S3**.
3. Select our bucket.
4. Under event type select **All object create events**.
5. Select the checkbox to accnowledge Recursive invocation.
6. Choose **Add**.

With this set up, we can now try to upload an image to our S3 bucket and check if it automatically generated the compressed images.

> upload image to s3 to test it!!!!!!!!!!!! 

## Frontend

In the frontend we used NextJS, but any other framework will do the job just as fine. Since the images don't change to often in our galleries, in order to improve performance, we decided to fetch all image URLs from S3 and store them in a json list on build. This keeps the number of fetches to AWS low (cheaper and better performance).

To implement this we have to create a script which will run on build and saves all the image keys in a json file.

But for this to work, we need to create a user that has the permission to fetch data from our S3 bucket.

1. To create this user we will firstly navigate to the [Identity and Access Management](https://console.aws.amazon.com/iam/home#/users).
2. Click **Create user**.
3. Enter a name for our user.
4. Select **next**.
5. For permission options select **Attach policies directly**.
6. Attach the policy **AmazonS3ReadOnlyAccess**.
7. Select **next**.
8. Select **Create user**.

Now we have created a user with which we can read data from our S3 bucket on our client. But for this to work we need to create a access key for this user.

1. Click on the newly created user.
2. Select **Security credentials**.
3. Click **Create access key**.
4. Select **Application running outside AWS**.
5. Select **Next**.
6. Optionally add a description and click **Create access key**.

Now that we have our access key, we have to create a .env file and add our **Access key** and our **Secret access key**. We can also add our **S3 bucket name** to the env file and our **AWS region** where we created our bucket.

```env
AWS_ACCESS_KEY_ID=ABCDEFGHIJKLMNOPQRSTUVWXYZ
AWS_SECRET_ACCESS_KEY=*********************************
AWS_REGION=eu-central-1
AWS_BUCKET_NAME=bucket_name
```

Now that we have all prerequisites set up we can get started with our code to fetch all image keys from AWS. For this I again explain the code in small parts.

First we will have to get all the folders in our S3 bucket.

```typescript
const command = new ListObjectsV2Command({
	Bucket: process.env.AWS_BUCKET_NAME!,
	Delimiter: "/", // returns "folders" in CommonPrefixes
});

const response = await s3.send(command);

const folders = response.CommonPrefixes?.map((p) => p.Prefix?.replace(/\/$/, "")!) ?? [];
```

Now that we have all the folders, which will be our galleries, we have to get the image urls for our galleries.

```typescript
const command = new ListObjectsV2Command({
	Bucket: process.env.AWS_BUCKET_NAME!,
	Prefix: `${folder}/`,
});

const response = await s3.send(command);
```

With this command we are getting all the file names of a folder.

In the next step we create an image object for each image. This object will include the URL to the original image, the URL to the medium sized image and to the thumbnail.

```typescript
response.Contents?.filter(
	(item) =>
		item.Key &&
		!item.Key.endsWith("/") &&
		!item.Key.includes("/thumbs/") &&
		!item.Key.includes("/medium"),
).map((item, index) => {
	const fullKey = item.Key!;
	const filename = fullKey.split("/").pop();
	const thumbKey = `${folder}/thumbs/${filename?.replace(/\.[^/.]+$/, ".avif")}`;
	const mediumKey = `${folder}/medium/${filename?.replace(/\.[^/.]+$/, ".avif")}`;
	return {
		url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fullKey}`,
		thumbUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${thumbKey}`,
		mediumUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${mediumKey}`,
		key: filename!,
		id: index,
	};
}) ?? []
```

Now that we have our image objects all that is left is to save them in to a JSON file.

```typescript
const outputPath = path.join(process.cwd(), "public", "galleries.json");
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
```

This are all the parts needed to create our build method to save our galleries in to a JSON file. Here is the whole code.

```typescript
import { S3, ListObjectsV2Command } from "@aws-sdk/client-s3";
import "dotenv/config";
import path from "path";
import fs from "fs";

const s3 = new S3({
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
	},
	region: process.env.AWS_REGION,
});

interface AwsImage {
	thumbUrl: string;
	mediumUrl: string;
	url: string;
	key: string;
	id: number;
}

async function listImages(folder: string): Promise<AwsImage[]> {
	const command = new ListObjectsV2Command({
		Bucket: process.env.AWS_BUCKET_NAME!,
		Prefix: `${folder}/`,
	});

	const response = await s3.send(command);

	return (
		response.Contents?.filter(
			(item) =>
				item.Key &&
				!item.Key.endsWith("/") &&
				!item.Key.includes("/thumbs/") &&
				!item.Key.includes("/medium"),
		).map((item, index) => {
			const fullKey = item.Key!;
			const filename = fullKey.split("/").pop();
			const thumbKey = `${folder}/thumbs/${filename?.replace(/\.[^/.]+$/, ".avif")}`;
			const mediumKey = `${folder}/medium/${filename?.replace(/\.[^/.]+$/, ".avif")}`;
			return {
				url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fullKey}`,
				thumbUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${thumbKey}`,
				mediumUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${mediumKey}`,
				key: filename!,
				id: index,
			};
		}) ?? []
	);
}

async function listFolders(): Promise<string[]> {
	const command = new ListObjectsV2Command({
		Bucket: process.env.AWS_BUCKET_NAME!,
		Delimiter: "/", // returns "folders" in CommonPrefixes
	});

	const response = await s3.send(command);
	return (
		response.CommonPrefixes?.map((p) => p.Prefix?.replace(/\/$/, "")!) ?? []
	);
}

async function main() {
	const folders = await listFolders();
	const result: Record<string, AwsImage[]> = {};

	for (const folder of folders) {
		result[folder] = await listImages(folder);
	}

	const outputPath = path.join(process.cwd(), "public", "galleries.json");
	fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
}

main().catch(console.error);
```

Now we have to run this script on build, so we have to add a the following scripts to our package.json file.

```json
"scripts": {
	"build": "npm run generate && next build",
	"generate": "node --loader ts-node/esm lib/generateGalleryJson.ts"
},
```

So now with this all in place everytime we build our project the JSON file will be created new.