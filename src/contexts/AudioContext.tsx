
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Howl } from 'howler';

interface NowPlayingInfo {
  id: string;
  title: string;
  category: string;
  voice: string;
  duration: number;
  timestamp: string;
}

interface AudioContextType {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  nowPlaying: NowPlayingInfo | null;
  play: () => void;
  pause: () => void;
  skip: () => void;
  setVolume: (volume: number) => void;
  loadStream: (url: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  const [nowPlaying, setNowPlaying] = useState<NowPlayingInfo | null>({
    id: 'demo-1',
    title: 'Welcome to Virtual AI Radio',
    category: 'Welcome',
    voice: 'AI Emma',
    duration: 180,
    timestamp: new Date().toLocaleTimeString()
  });

  const soundRef = useRef<Howl | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateCurrentTime = () => {
    if (soundRef.current && soundRef.current.playing()) {
      setCurrentTime(soundRef.current.seek() as number || 0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(updateCurrentTime, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const play = () => {
    if (soundRef.current) {
      soundRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (soundRef.current) {
      soundRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skip = () => {
    // Simulate skipping to next content
    const nextContent: NowPlayingInfo = {
      id: 'demo-' + Math.random(),
      title: 'AI-Generated Content',
      category: 'News',
      voice: 'AI Dave',
      duration: 120,
      timestamp: new Date().toLocaleTimeString()
    };
    setNowPlaying(nextContent);
    setCurrentTime(0);
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
    if (soundRef.current) {
      soundRef.current.volume(vol);
    }
  };

  const loadStream = (url: string) => {
    if (soundRef.current) {
      soundRef.current.unload();
    }

    soundRef.current = new Howl({
      src: [url],
      html5: true,
      volume: volume,
      onload: () => {
        setDuration(soundRef.current?.duration() || 0);
      },
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onend: () => {
        setIsPlaying(false);
        skip(); // Auto-skip to next content
      }
    });
  };

  return (
    <AudioContext.Provider value={{
      isPlaying,
      currentTime,
      duration,
      volume,
      nowPlaying,
      play,
      pause,
      skip,
      setVolume,
      loadStream
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
