'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import PersonInfo from '@/components/PersonInfo';
import { Person } from '@/data/people';

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const spinnerId = params.name as string;
  const [recipient, setRecipient] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const response = await fetch(`/api/assignment/${spinnerId}`);
        const data = await response.json();

        if (!response.ok) {
          setError(data.error || 'Failed to load assignment');
          setLoading(false);
          return;
        }

        // Convert API response to Person object
        const recipientPerson: Person = {
          id: data.recipient.id,
          name: data.recipient.name,
          aliases: data.recipient.aliases,
          gender: data.recipient.gender,
          starSign: data.recipient.starSign,
          hint: data.recipient.hint,
          avatar: data.recipient.avatar,
        };

        setRecipient(recipientPerson);
        setLoading(false);
      } catch (err) {
        setError('An error occurred. Please try again.');
        setLoading(false);
        console.error('Assignment fetch error:', err);
      }
    };

    if (spinnerId) {
      fetchAssignment();
    }
  }, [spinnerId]);

  const partyDate = '05:00pm Sunday 28/12/2025';

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin">🎄</div>
          <p className="text-2xl font-semibold">Loading your result...</p>
        </div>
      </main>
    );
  }

  if (error || !recipient) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="text-center bg-white/20 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 max-w-md">
          <div className="text-6xl mb-4">😞</div>
          <p className="text-2xl font-semibold mb-4">{error || 'Something went wrong'}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-christmas-gold text-gray-900 font-bold rounded-full 
                     hover:bg-yellow-500 transition-all duration-200"
          >
            Go Back Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10">
      <div className="max-w-4xl w-full text-center">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
            🎁 Your Secret Santa Assignment 🎁
          </h1>
          <div className="text-lg md:text-xl font-medium bg-white/20 backdrop-blur-sm 
                        rounded-full px-6 py-2 inline-block border-2 border-white/30 mb-4">
            🎊 Party Time: {partyDate} 🎊
          </div>
        </div>

        {/* Celebration Message */}
        <div className="mb-8 bg-christmas-gold/20 backdrop-blur-md rounded-2xl p-6 
                      border-2 border-christmas-gold/50 max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            🎉 You&apos;re preparing a gift for... 🎉
          </p>
        </div>

        {/* Recipient Info */}
        <div className="mb-8 celebration">
          <PersonInfo person={recipient} />
        </div>

        {/* Instructions */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 
                      shadow-xl max-w-2xl mx-auto mb-6">
          <p className="text-lg md:text-xl font-semibold mb-2">
            Remember to keep this a secret! 🤫
          </p>
          <p className="text-base md:text-lg opacity-90">
            Get a gift for your assigned person and bring it to the party on {partyDate}
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full 
                   border-2 border-white/30 hover:bg-white/30 transition-all duration-200"
        >
          ← Back to Home
        </button>
      </div>
    </main>
  );
}

