import { useEffect } from 'react';
import { useCalendarStore } from '@/store/useCalendarStore';

export function useKeyboardShortcuts() {
  const {
    goToPrevMonth,
    goToNextMonth,
    goToPrevYear,
    goToNextYear,
    goToToday,
    toggleDarkMode,
  } = useCalendarStore();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if (isInput && e.key !== 'Escape') return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevMonth();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNextMonth();
          break;
        case 'ArrowUp':
          e.preventDefault();
          goToPrevYear();
          break;
        case 'ArrowDown':
          e.preventDefault();
          goToNextYear();
          break;
        case 't':
        case 'T':
          e.preventDefault();
          goToToday();
          break;
        case 'd':
        case 'D':
          e.preventDefault();
          toggleDarkMode();
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevMonth, goToNextMonth, goToPrevYear, goToNextYear, goToToday, toggleDarkMode]);
}
