import React from 'react';
import { ReadmeOptions, ReadmeSection } from '../types';

interface OptionsProps {
  options: ReadmeOptions;
  onChange: (options: ReadmeOptions) => void;
}

export function Options({ options, onChange }: OptionsProps) {
  const handleSectionToggle = (sectionId: string) => {
    const updatedSections = options.sections.map(section =>
      section.id === sectionId ? { ...section, enabled: !section.enabled } : section
    );
    onChange({ ...options, sections: updatedSections });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Customize README</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={options.includeBadges}
              onChange={() => onChange({ ...options, includeBadges: !options.includeBadges })}
              className="rounded text-purple-600 focus:ring-purple-500"
            />
            <span>Include Badges</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={options.includeTableOfContents}
              onChange={() => onChange({ ...options, includeTableOfContents: !options.includeTableOfContents })}
              className="rounded text-purple-600 focus:ring-purple-500"
            />
            <span>Table of Contents</span>
          </label>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-medium mb-2">Sections</h4>
          <div className="grid grid-cols-2 gap-2">
            {options.sections.map(section => (
              <label key={section.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={section.enabled}
                  onChange={() => handleSectionToggle(section.id)}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <span>{section.title}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}