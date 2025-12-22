'use client';

import { useState } from 'react';
import PersonSelector from '@/components/PersonSelector';
import WheelSpinner from '@/components/WheelSpinner';
import ResultModal from '@/components/ResultModal';
import { people, Person } from '@/data/people';

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [resultRecipient, setResultRecipient] = useState<Person | null>(null);

  const partyDate = "05:00 PM Sunday 28/12/2025 at N305/2 Lardelli Drive, Ryde, NSW";
  const giftBudget = '$30';

  const handleSpin = async () => {
    if (!selectedPerson) {
      setError('Please select your name first');
      return;
    }

    setError('');
    setIsSpinning(true);
    setShowModal(false);
    setResultRecipient(null);

    try {
      const response = await fetch('/api/spin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ spinnerName: selectedPerson }),
      });

      const data = await response.json();

      // Check if already assigned (API now returns recipient data directly)
      if (data.alreadyAssigned && data.recipient) {
        // Already spun - show their assignment in modal immediately
        const recipient: Person = {
          id: data.recipient.id,
          name: data.recipient.name,
          aliases: data.recipient.aliases,
          gender: data.recipient.gender,
          starSign: data.recipient.starSign,
          hint: data.recipient.hint,
          avatar: data.recipient.avatar,
        };
        setResultRecipient(recipient);
        setIsSpinning(false);
        setShowModal(true);
        return;
      }

      if (!response.ok) {
        setError(data.error || 'Failed to spin the wheel');
        setIsSpinning(false);
        return;
      }

      // Spin completed successfully
      // Wait for wheel animation to finish, then show modal
      setTimeout(() => {
        if (data.recipient) {
          const recipient: Person = {
            id: data.recipient.id,
            name: data.recipient.name,
            aliases: data.recipient.aliases,
            gender: data.recipient.gender,
            starSign: data.recipient.starSign,
            hint: data.recipient.hint,
            avatar: data.recipient.avatar,
          };
          setResultRecipient(recipient);
          setIsSpinning(false);
          setShowModal(true);
        }
      }, 3500);
    } catch (err) {
      setError('An error occurred. Please try again.');
      setIsSpinning(false);
      console.error('Spin error:', err);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-2xl">
              <span className="text-christmas-red">🎄</span>{' '}
              Secret Santa Wheel 2025{' '}
              <span className="text-christmas-green">🎅</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 drop-shadow-lg">
              Happy New Year 2026! 🎉
            </h2>
            {/* Quote Section */}
            <div className="mb-6 md:mb-8 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-christmas-cream italic 
                          bg-white/15 backdrop-blur-sm rounded-2xl px-6 md:px-8 py-4 md:py-5 
                          border-2 border-white/30 shadow-lg">
                &quot;Let&apos;s gather for a cozy and warm dinner night filled with laughter and good food.&quot;
              </p>
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-medium bg-white/20 backdrop-blur-sm 
                          rounded-full px-4 md:px-6 py-2 md:py-3 inline-block border-2 border-white/30 
                          shadow-lg mb-3">
              🎊 Party Time: {partyDate} 🎊
            </div>
            <div className="text-base md:text-lg font-medium text-christmas-cream mb-4">
              Please come at 4:00pm for cooking and preparation
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-white/25 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 md:mb-10 
                        border-2 border-white/40 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
              How It Works
            </h3>
            <div className="space-y-3 md:space-y-4 text-left">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0">🎡</span>
                <p className="text-base md:text-lg">
                  <span className="font-semibold">Spin the wheel</span> to find out who you&apos;re getting a gift for!
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0">🤫</span>
                <p className="text-base md:text-lg">
                  <span className="font-semibold">Keep it secret!</span> Please keep it secret and reveal it on the party day only when we do gift exchange.
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0">💝</span>
                <p className="text-base md:text-lg">
                  <span className="font-semibold">Gift Budget:</span> {giftBudget}
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0">💡</span>
                <p className="text-base md:text-lg">
                  <span className="font-semibold">Hints:</span> The hint of each person&apos;s preference is below. Use these to guide your gift selection!
                </p>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="bg-christmas-cream/20 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 md:mb-10 
                        border-2 border-christmas-gold/50 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-christmas-cream">
              📝 Notes
            </h3>
            <div className="bg-white/30 rounded-xl p-4 md:p-6 border-2 border-white/40">
              <p className="text-base md:text-lg text-left leading-relaxed">
                Please select your name from the dropdown. The result of your first spin is final and will be saved. Spinning again will not change your assigned Secret Santa.
              </p>
            </div>
          </div>

          {/* Person Selector Section */}
          <div className="mb-8 md:mb-10 flex justify-center">
            <PersonSelector
              selectedPerson={selectedPerson}
              onSelect={setSelectedPerson}
              disabled={isSpinning}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 md:mb-8 bg-red-500/90 text-white px-6 py-3 rounded-lg 
                          border-2 border-red-700 max-w-md mx-auto text-center">
              {error}
            </div>
          )}

          {/* Wheel Spinner Section */}
          <div className="mb-8 md:mb-10 flex justify-center">
            <WheelSpinner isSpinning={isSpinning} />
          </div>

          {/* Spin Button */}
          <div className="mb-12 md:mb-16 flex justify-center">
            <button
              onClick={handleSpin}
              disabled={!selectedPerson || isSpinning}
              className="px-8 md:px-10 py-4 md:py-5 bg-christmas-gold text-gray-900 font-bold 
                       text-lg md:text-xl lg:text-2xl rounded-full shadow-2xl 
                       hover:bg-yellow-500 active:scale-95 
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
                       transition-all duration-200 border-4 border-white/50
                       hover:shadow-christmas-gold/50 hover:shadow-2xl"
            >
              {isSpinning ? '🎁 Spinning...' : '🎄 Spin the Wheel! 🎄'}
            </button>
          </div>

          {/* Everyone's Info Section */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 
                        border-2 border-white/30 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
              Everyone&apos;s Preferences & Hints
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {people.map((person) => {
                const displayName = person.aliases.length > 0
                  ? `${person.name} (${person.aliases.map(a => `aka ${a}`).join(', ')})`
                  : person.name;
                return (
                  <div
                    key={person.id}
                    className="bg-white/25 backdrop-blur-md rounded-xl p-5 md:p-6 
                             border-2 border-white/40 hover:bg-white/35 
                             hover:border-christmas-gold/50 transition-all duration-200 
                             shadow-lg hover:shadow-xl"
                  >
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl mb-3 md:mb-4">{person.avatar}</div>
                      <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-3">{displayName}</h4>
                      <div className="mb-3 md:mb-4">
                        <span className="inline-block px-3 md:px-4 py-1 md:py-2 
                                       bg-christmas-gold/30 text-white rounded-full 
                                       font-semibold text-sm md:text-base border border-christmas-gold/50">
                          {person.starSign} {person.gender === 'female' ? '♀' : '♂'}
                        </span>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3 md:p-4 border border-white/30">
                        <p className="text-sm md:text-base leading-relaxed">
                          <span className="font-semibold">Hint:</span> {person.hint}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 md:py-8 text-center relative z-10">
        <div className="text-base md:text-lg font-medium text-christmas-cream/90">
          @madebyJasmine12-2025
        </div>
      </footer>

      {/* Result Modal */}
      <ResultModal
        isOpen={showModal}
        onClose={handleCloseModal}
        recipient={resultRecipient}
        spinnerName={selectedPerson}
        partyDate={partyDate}
      />
    </>
  );
}
