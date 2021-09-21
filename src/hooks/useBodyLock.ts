import { useCallback } from 'react';

let windowOffset = 0;

export function useBodyLock() {
  const lock = useCallback(() => {
    windowOffset = window.scrollY;
    document.body.setAttribute(
      'style',
      `position: fixed; top: -${windowOffset}px; left: 0; right: 0`
    );
  }, []);

  const unlock = useCallback(() => {
    document.body.setAttribute('style', '');
    window.scrollTo(0, windowOffset);
  }, []);

  return [lock, unlock];
}
