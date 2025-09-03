import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import html from "remark-html";
import remarkRehype from "remark-rehype";

export default async function markdownToHtml(markdown: string) {
	const result = await remark()
		.use(remarkRehype)
		.use(rehypeHighlight) // highlight code blocks
		.use(rehypeStringify)
		.process(markdown);

	return result.toString();
}
