'use client';

import { people } from '@/data/people';

interface PersonSelectorProps {
  selectedPerson: string;
  onSelect: (personName: string) => void;
  disabled?: boolean;
}

export default function PersonSelector({ selectedPerson, onSelect, disabled }: PersonSelectorProps) {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="person-select" className="block text-lg font-semibold mb-2 text-white drop-shadow-lg">
        Select your name:
      </label>
      <select
        id="person-select"
        value={selectedPerson}
        onChange={(e) => onSelect(e.target.value)}
        disabled={disabled}
        className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 font-medium text-lg 
                   border-2 border-christmas-gold shadow-lg 
                   focus:outline-none focus:ring-2 focus:ring-christmas-gold focus:ring-offset-2
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200"
      >
        <option value="">-- Choose your name --</option>
        {people.map((person) => {
          const displayName = person.aliases.length > 0
            ? `${person.name} (${person.aliases.join(', ')})`
            : person.name;
          return (
            <option key={person.id} value={person.name}>
              {displayName}
            </option>
          );
        })}
      </select>
    </div>
  );
}

