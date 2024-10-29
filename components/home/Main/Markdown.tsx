import "katex/dist/katex.min.css";
import { FC, memo } from "react";
import ReactMarkdown, { Options } from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const Markdown: FC<Options> = ({ children, className, ...props }) => {
	return (
		<ReactMarkdown
			rehypePlugins={[rehypeKatex]}
			remarkPlugins={[remarkGfm, remarkMath]}
			className={`markdown-body !bg-transparent ${className}`}
			{...props}
		>
			{children}
		</ReactMarkdown>
	);
};

export default memo(Markdown);
