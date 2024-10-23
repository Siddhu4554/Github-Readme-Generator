export interface RepoData {
  name: string;
  description: string;
  homepage: string;
  language: string;
  topics: string[];
  license?: {
    name: string;
  };
  default_branch: string;
}

export interface ReadmeSection {
  id: string;
  title: string;
  enabled: boolean;
}

export interface ReadmeOptions {
  includeBadges: boolean;
  includeTableOfContents: boolean;
  sections: ReadmeSection[];
}