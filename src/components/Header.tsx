import React from 'react';
import { FileText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <img src="Logo.png" height="40" width="40">
          <FileText size={32} className="text-white" />        
          <h1 className="text-3xl font-bold">GitHub README Generator</h1>
        </div>
        <p className="text-center mt-4 text-purple-100 max-w-2xl mx-auto">
          Generate professional README.md files for your GitHub repositories using AI.
          Simply enter your repository URL and let our tool analyze and create comprehensive documentation.
        </p>
      </div>
    </header>
  );
}
