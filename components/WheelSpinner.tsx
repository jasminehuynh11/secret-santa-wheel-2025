'use client';

import { useState, useEffect } from 'react';
import { people } from '@/data/people';

interface WheelSpinnerProps {
  isSpinning: boolean;
}

export default function WheelSpinner({ isSpinning }: WheelSpinnerProps) {
  const [rotation, setRotation] = useState(0);

  const segments = people;
  const segmentAngle = 360 / segments.length;
  
  // Colors for each segment
  const segmentColors = [
    '#DC2626', // red
    '#16A34A', // green
    '#EAB308', // gold
    '#3B82F6', // blue
    '#8B5CF6', // purple
    '#EC4899', // pink
  ];

  useEffect(() => {
    if (isSpinning) {
      // Random rotation between 3-5 full rotations for dramatic effect
      const baseRotations = 1080 + Math.random() * 720; // 3-5 rotations
      setRotation(prev => prev + baseRotations);
    }
  }, [isSpinning]);

  return (
    <div className="relative w-80 h-80 mx-auto my-8">
      {/* Wheel Container */}
      <div className="relative w-full h-full">
        {/* Spinning Wheel */}
        <div
          className={`absolute inset-0 rounded-full border-8 border-christmas-gold shadow-2xl ${
            isSpinning ? 'transition-transform duration-[3000ms] ease-out' : ''
          }`}
          style={{
            transform: `rotate(${rotation}deg)`,
            background: `conic-gradient(
              ${segments.map((_, i) => {
                const color = segmentColors[i % segmentColors.length];
                const startAngle = i * segmentAngle;
                const endAngle = (i + 1) * segmentAngle;
                // Create hard stops by repeating the color at both angles
                return `${color} ${startAngle}deg ${endAngle}deg`;
              }).join(', ')}
            )`,
          }}
        >
          {/* Segment dividers */}
          {segments.map((person, index) => {
            const angle = index * segmentAngle;
            return (
              <div
                key={person.id}
                className="absolute inset-0"
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  className="absolute left-1/2 top-0 w-1 h-1/2 bg-white/70"
                  style={{
                    transform: 'translateX(-50%)',
                  }}
                />
              </div>
            );
          })}
          
          {/* Center circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-christmas-gold 
                          shadow-xl flex items-center justify-center">
              <span className="text-4xl">🎁</span>
            </div>
          </div>
        </div>

        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10 pointer-events-none">
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-christmas-gold drop-shadow-lg" />
        </div>
      </div>

      {/* Person names around wheel (static, doesn't rotate) */}
      <div className="absolute inset-0 pointer-events-none">
        {segments.map((person, index) => {
          const angle = (index * segmentAngle + segmentAngle / 2) * (Math.PI / 180);
          const radius = 140;
          const x = Math.cos(angle - Math.PI / 2) * radius;
          const y = Math.sin(angle - Math.PI / 2) * radius;
          
          return (
            <div
              key={person.id}
              className="absolute text-white font-bold text-sm drop-shadow-lg whitespace-nowrap"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {person.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

