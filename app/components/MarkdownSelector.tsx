
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // or any other highlight.js theme

import TabSelector from './TabSelector';

type MarkdownRendererProps = {
    markdown: string;
}

type MarkdownDoc = {
    title: string;
    path: string;
}

const MarkdownDocs: MarkdownDoc[] = [
    { title: 'Arrays', path: '/markdown/arrays.md' },
    { title: 'HTML Tags', path: '/markdown/html-tags.md' },
    { title: 'Operators', path: '/markdown/operators.md' },
    { title: 'Terminal', path: '/markdown/terminal.md' },
    { title: 'Typescript', path: '/markdown/ts-patterns.md' },

];
// CHANGE THIS - flagged by Ellipsis
//
// Using children prop directly is deprecated in ReactMarkdown. Use the component's children directly instead:
//

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
    const [selectedTab, setSelectedTab] = useState(MarkdownDocs[0].path);

    useEffect(() => {
        fetch(selectedTab)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    }, [selectedTab]);

    const handleTabSelect = (path: string) => {
        setSelectedTab(path);
    };

    return (
        <div className="flex flex-col bg-gray-300 rounded p-5">
            <TabSelector tabs={MarkdownDocs} onSelect={handleTabSelect} selectedTab={selectedTab} />
            <div className="flex flex-col">
                <MarkdownRenderer markdown={markdown} />
            </div>
        </div>
    );
};
