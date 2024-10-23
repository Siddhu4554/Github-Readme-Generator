import React, { useState } from 'react';
import { Header } from './components/Header';
import { RepoForm } from './components/RepoForm';
import { Options } from './components/Options';
import { ReadmePreview } from './components/ReadmePreview';
import { getRepoData, generateReadme } from './utils/github';
import { ReadmeOptions, ReadmeSection } from './types';

const defaultSections: ReadmeSection[] = [
  { id: 'overview', title: 'Overview', enabled: true },
  { id: 'features', title: 'Features', enabled: true },
  { id: 'installation', title: 'Installation', enabled: true },
  { id: 'usage', title: 'Usage', enabled: true },
  { id: 'api', title: 'API Documentation', enabled: false },
  { id: 'contributing', title: 'Contributing', enabled: true },
  { id: 'license', title: 'License', enabled: true },
  { id: 'contact', title: 'Contact', enabled: true },
];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [markdown, setMarkdown] = useState('');
  const [options, setOptions] = useState<ReadmeOptions>({
    includeBadges: true,
    includeTableOfContents: true,
    sections: defaultSections,
  });

  const handleSubmit = async (repoUrl: string) => {
    try {
      setIsLoading(true);
      const repoData = await getRepoData(repoUrl);
      const readme = generateReadme(repoData);
      setMarkdown(readme);
    } catch (error) {
      console.error('Error generating README:', error);
      alert('Error generating README. Please check the repository URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <RepoForm onSubmit={handleSubmit} isLoading={isLoading} />
        <Options options={options} onChange={setOptions} />
        <ReadmePreview markdown={markdown} />
      </main>
      
      <footer className="mt-12 py-6 bg-gray-100">
        <p className="text-center text-gray-600">
          Made with ❤️ for the open source community
        </p>
      </footer>
    </div>
  );
}

export default App;