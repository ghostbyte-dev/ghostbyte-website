---
title: "Hello World"
excerpt: "Our very first blog post - a simple hello to the world."
coverImage: "/assets/blog/hello-world/cover.webp"
date: "2025-08-28"
author:
  name: Daniel Hiebeler
  picture: "/assets/blog/authors/daniel.webp"
ogImage:
  url: "/assets/blog/hello-world/cover.webp"
---

# How to make a big image gallery fast
Big image galleries can be a nightmare to make, they use huge amounts of storage and load slowly. So the challenge was to find a relatively cheap way to store this big amounts of images somewhere, but of course the gallery should still have a very fast load time.

With these prerequesites we decided to give AWS a try. With AWS we would have the possibility for a big storage (S3) for our images, for serverless functions (lambda) to create our thumbnails on the image oupload and for a CDN (CloudFront) to have the images cached.

## AWS S3
For the image storage we will use a simple AWS S3 storage, where we will create an folder for each image gallery.
## AWS Lambda
To create the thumbnails for the images on upload to S3, we will use the server functions Lambda, which will be called everytime a image is uploaded to our bucket. There we will firstly need a function to read our newly uploaded file from our S3 storage.

```javascript
export const handler = async (event, context) => {
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
Now that we have the image as a buffer, we can use the image processing library sharp to compress our image for a thumbnail.
```javascript
const thumbnailBuffer = await sharp(inputBuffer)
	.resize({ width: 500})
	.avif()
	.toBuffer();
```
With our compressed image, all that is now left to do is to upload the thumbnail to our S3 bucket again.
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
Now as we have all the parts in place here is the hole code for our lambda function where we will create a thumbnail and a medium sized image for each image.
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

Now with this lambda function created we will have to create a trigger, so the function is called everytime a object is created on our S3 bucket. With this trigger in place we are now able to upload our big images to our bucket and let the lambda function automatically create the thumbnails for it. So now we can take a look at how to implement our galleries in our frontend with nextjs.

## Frontend
