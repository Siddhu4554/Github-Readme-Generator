import React from 'react';
import { FileText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <img src="Logo.png" height="40" width="40">
          <FileText size={32} className="text-white" /> 
            <a href="https://www.producthunt.com/posts/github-readme-generator-free?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-github&#0045;readme&#0045;generator&#0045;free" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=529725&theme=light" alt="Github&#0032;Readme&#0032;Generator&#0032;Free - AI&#0045;powered&#0032;README&#0032;files&#0032;for&#0032;any&#0032;GitHub&#0032;repo&#0032;in&#0032;seconds&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
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
