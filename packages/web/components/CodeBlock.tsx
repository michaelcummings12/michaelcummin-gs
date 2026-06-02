"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Check from "./Icons/Check";
import Copy from "./Icons/Copy";

const LANGUAGE_LABELS: Record<string, string> = {
	js: "JavaScript",
	jsx: "JSX",
	ts: "TypeScript",
	tsx: "TSX",
	html: "HTML",
	css: "CSS",
	json: "JSON",
	py: "Python",
	python: "Python",
	bash: "Bash",
	sh: "Shell",
	shell: "Shell",
	swift: "Swift",
	sql: "SQL",
	yaml: "YAML",
	yml: "YAML",
	md: "Markdown",
	markdown: "Markdown",
	go: "Go",
	rust: "Rust",
	java: "Java",
	kotlin: "Kotlin",
	ruby: "Ruby",
	php: "PHP",
	c: "C",
	cpp: "C++",
	csharp: "C#",
	graphql: "GraphQL",
	dockerfile: "Dockerfile",
	xml: "XML",
	toml: "TOML"
};

function getLanguageLabel(language: string): string {
	return LANGUAGE_LABELS[language] || language.charAt(0).toUpperCase() + language.slice(1);
}

interface CodeBlockProps {
	language: string;
	children: string;
}

export function CodeBlock({ language, children }: CodeBlockProps) {
	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		await navigator.clipboard.writeText(children);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};
	return (
		<div className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg">
			{/* Title bar — mimics VS Code tab bar */}
			<div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-800/80 px-4 py-2">
				<div className="flex items-center gap-2">
					{/* Traffic-light dots */}
					<span className="inline-block h-3 w-3 rounded-full bg-red-500" />
					<span className="inline-block h-3 w-3 rounded-full bg-yellow-500" />
					<span className="inline-block h-3 w-3 rounded-full bg-green-500" />
					<span className="ml-2 text-xs font-medium text-zinc-500 select-none">{getLanguageLabel(language)}</span>
				</div>
				<button
					onClick={handleCopy}
					className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs text-zinc-500 transition-all duration-200 hover:bg-zinc-700 hover:text-zinc-300"
					aria-label="Copy code">
					{copied ? (
						<>
							<Check className="h-3 fill-green-500" />
							<span>Copied!</span>
						</>
					) : (
						<>
							<Copy className="h-3 fill-zinc-500" />
							<span>Copy</span>
						</>
					)}
				</button>
			</div>
			{/* Code area */}
			<SyntaxHighlighter
				language={language}
				style={vscDarkPlus}
				showLineNumbers
				lineNumberStyle={{
					color: "rgb(113 113 122)", // zinc-500
					fontSize: "0.8em",
					paddingRight: "1em",
					minWidth: "2.5em",
					textAlign: "right",
					userSelect: "none"
				}}
				customStyle={{
					margin: 0,
					padding: "1.25rem 1rem",
					background: "rgb(24 24 27)", // zinc-900
					fontSize: "0.9rem",
					lineHeight: "1.6",
					borderRadius: 0
				}}
				codeTagProps={{
					style: {
						fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Menlo', 'Monaco', 'Consolas', monospace"
					}
				}}>
				{children}
			</SyntaxHighlighter>
		</div>
	);
}
