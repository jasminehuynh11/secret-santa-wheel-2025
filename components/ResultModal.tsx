'use client';

import { useEffect } from 'react';
import { Person } from '@/data/people';
import PersonInfo from './PersonInfo';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: Person | null;
  spinnerName: string;
  partyDate: string;
}

export default function ResultModal({ 
  isOpen, 
  onClose, 
  recipient, 
  spinnerName,
  partyDate 
}: ResultModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !recipient) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Celebration Header */}
        <div className="text-center mb-6">
          <div className="text-6xl mb-4 animate-bounce-slow">
            🎉🎁🎄
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl mb-2">
            You're Secret Santa for...
          </h2>
          <p className="text-lg text-white/90">
            Keep this a secret until the party! 🤫
          </p>
        </div>

        {/* Person Info Card */}
        <div className="mb-6">
          <PersonInfo person={recipient} />
        </div>

        {/* Instructions Box */}
        <div className="bg-gradient-to-r from-christmas-red/20 to-christmas-green/20 
                      backdrop-blur-md rounded-2xl p-6 border-2 border-christmas-gold/50 
                      shadow-xl mb-6">
          <div className="text-white space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤫</span>
              <p className="text-base md:text-lg font-semibold">
                Keep it secret! Don't reveal your assignment until gift exchange on party day.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎁</span>
              <p className="text-base md:text-lg">
                <span className="font-semibold">Gift Budget:</span> $30
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📅</span>
              <p className="text-base md:text-lg">
                <span className="font-semibold">Party:</span> {partyDate}
              </p>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full px-6 py-4 bg-christmas-gold text-gray-900 font-bold text-lg 
                   rounded-full shadow-xl hover:bg-yellow-500 active:scale-95 
                   transition-all duration-200 border-2 border-white/50"
        >
          Got it! I'll keep it secret 🎄
        </button>
      </div>
    </div>
  );
}

