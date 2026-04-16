import { useCallback } from 'react';

const useSound = (url) => {
  const play = useCallback(() => {
    try {
      const audio = new Audio(url);
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Audio playback failed', e));
    } catch (e) {
      console.error(e);
    }
  }, [url]);

  return play;
};

export default useSound;
