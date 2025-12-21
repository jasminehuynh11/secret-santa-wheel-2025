'use client';

import { Person } from '@/data/people';

interface PersonInfoProps {
  person: Person;
  className?: string;
}

export default function PersonInfo({ person, className = '' }: PersonInfoProps) {
  const displayName = person.aliases.length > 0
    ? `${person.name} ${person.aliases.map(a => `aka ${a}`).join(' ')}`
    : person.name;

  return (
    <div className={`bg-white/95 rounded-2xl shadow-2xl p-8 max-w-md mx-auto ${className}`}>
      <div className="text-center">
        {/* Avatar */}
        <div className="text-8xl mb-4 animate-bounce-slow">
          {person.avatar}
        </div>
        
        {/* Name */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {displayName}
        </h2>
        
        {/* Star Sign */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-christmas-gold/20 text-christmas-red 
                          rounded-full font-semibold text-lg border-2 border-christmas-gold">
            {person.starSign} {person.gender === 'female' ? '♀' : '♂'}
          </span>
        </div>
        
        {/* Hint */}
        <div className="bg-christmas-green/10 rounded-lg p-4 border-2 border-christmas-green/30">
          <p className="text-gray-800 text-lg font-medium">
            <span className="font-bold text-christmas-red">Hint:</span> {person.hint}
          </p>
        </div>
      </div>
    </div>
  );
}

