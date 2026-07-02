import { useEffect } from 'react';

type ModifierKey = 'meta' | 'ctrl' | 'alt' | 'shift' | 'metaOrCtrl';

export function useKeyPress(
  targetKey: string,
  callback: () => void,
  modifier?: ModifierKey
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isKeyMatch = event.key.toLowerCase() === targetKey.toLowerCase();
      
      let modifierMatch = true;
      if (modifier === 'meta') {
        modifierMatch = event.metaKey;
      } else if (modifier === 'ctrl') {
        modifierMatch = event.ctrlKey;
      } else if (modifier === 'alt') {
        modifierMatch = event.altKey;
      } else if (modifier === 'shift') {
        modifierMatch = event.shiftKey;
      } else if (modifier === 'metaOrCtrl') {
        modifierMatch = event.metaKey || event.ctrlKey;
      }

      if (isKeyMatch && modifierMatch) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [targetKey, callback, modifier]);
}
