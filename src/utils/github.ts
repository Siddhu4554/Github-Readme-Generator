import { Octokit } from 'octokit';
import { RepoData } from '../types';

export async function getRepoData(repoUrl: string): Promise<RepoData> {
  const octokit = new Octokit();
  
  // Extract owner and repo from URL
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) throw new Error('Invalid GitHub repository URL');
  
  const [, owner, repo] = match;
  
  const response = await octokit.rest.repos.get({
    owner,
    repo,
  });

  return response.data as RepoData;
}

export function generateReadme(repoData: RepoData): string {
  const {
    name,
    description,
    homepage,
    language,
    topics,
    license,
  } = repoData;

  return `# ${name}

${description || 'No description provided.'}

${topics.length > 0 ? `## Technologies

${topics.map(topic => `- ${topic}`).join('\n')}` : ''}

## Installation

\`\`\`bash
git clone https://github.com/owner/${name}.git
cd ${name}
npm install  # or yarn install
\`\`\`

## Usage

Add your usage instructions here.

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

${license ? `## License

This project is licensed under the ${license.name} License - see the [LICENSE](LICENSE) file for details.` : ''}

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter)

Project Link: [https://github.com/owner/${name}](https://github.com/owner/${name})
`;
}