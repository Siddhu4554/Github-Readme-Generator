import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Download, Copy } from 'lucide-react';

interface ReadmePreviewProps {
  markdown: string;
}

export function ReadmePreview({ markdown }: ReadmePreviewProps) {
  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
  };

  if (!markdown) return null;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="border-b border-gray-200 p-4 bg-gray-50 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-700">README Preview</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition duration-200"
          >
            <Copy size={16} className="mr-1" />
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center px-3 py-1.5 text-sm bg-purple-600 text-white hover:bg-purple-700 rounded-md transition duration-200"
          >
            <Download size={16} className="mr-1" />
            Download
          </button>
        </div>
      </div>
      <div className="p-6 prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}