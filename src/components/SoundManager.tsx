import React, { createContext, useContext, useRef, useEffect } from 'react';
import { SOUNDS } from '../constants';

interface SoundContextType {
  playBell: () => void;
  playPop: () => void;
  playFrying: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bellRef = useRef<HTMLAudioElement | null>(null);
  const popRef = useRef<HTMLAudioElement | null>(null);
  const fryingRef = useRef<HTMLAudioElement | null>(null);
  const kitchenRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    bellRef.current = new Audio(SOUNDS.bell);
    popRef.current = new Audio(SOUNDS.pop);
    fryingRef.current = new Audio(SOUNDS.frying);
    kitchenRef.current = new Audio(SOUNDS.kitchen);

    if (kitchenRef.current) {
      kitchenRef.current.loop = true;
      kitchenRef.current.volume = 0.1;
    }

    // Attempt to play kitchen background on first user interaction
    const handleFirstInteraction = () => {
      kitchenRef.current?.play().catch(() => {});
      window.removeEventListener('click', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const playBell = () => {
    if (bellRef.current) {
      bellRef.current.currentTime = 0;
      bellRef.current.play().catch(() => {});
    }
  };

  const playPop = () => {
    if (popRef.current) {
      popRef.current.currentTime = 0;
      popRef.current.play().catch(() => {});
    }
  };

  const playFrying = () => {
    if (fryingRef.current) {
      fryingRef.current.currentTime = 0;
      fryingRef.current.play().catch(() => {});
    }
  };

  return (
    <SoundContext.Provider value={{ playBell, playPop, playFrying }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
