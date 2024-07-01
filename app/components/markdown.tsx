
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // or any other highlight.js theme

interface MarkdownRendererProps {
    markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
    return (
        <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
        />
    );
};


export const DisplayMarkdown: React.FC = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        // Assuming your markdown file is in the public folder
        // fetch('/path/to/your-file.md')
        fetch('/markdown/arrays.md')
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <div className="flex flex-row bg-gray-300 rounded p-5">
            <div className="flex flex-col">
                <MarkdownRenderer markdown={markdown} />
            </div>
        </div>
    );
};
