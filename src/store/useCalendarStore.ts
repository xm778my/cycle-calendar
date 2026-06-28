import { create } from 'zustand';
import { getCycleDateRange } from '@/utils/cycle';

interface CalendarState {
  currentYear: number;
  currentMonth: number;
  selectedDate: Date | null;
  highlightedCycle: string | null;
  darkMode: boolean;
  searchError: string | null;

  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
  goToPrevYear: () => void;
  goToNextYear: () => void;
  goToToday: () => void;
  goToDate: (date: Date) => void;
  setHighlightedCycle: (cycle: string | null) => void;
  setSelectedDate: (date: Date | null) => void;
  toggleDarkMode: () => void;
  setDarkMode: (dark: boolean) => void;
  setSearchError: (error: string | null) => void;
  searchByCycle: (cycleNumber: string) => boolean;
  searchByDate: (date: Date) => boolean;
}

const today = new Date();
const initialYear = today.getFullYear() >= 2026 && today.getFullYear() <= 2030
  ? today.getFullYear()
  : 2026;
const initialMonth = today.getFullYear() >= 2026 && today.getFullYear() <= 2030
  ? today.getMonth()
  : 0;

const getStoredDarkMode = (): boolean => {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem('cycle-calendar-dark-mode');
  if (stored !== null) {
    return stored === 'true';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const useCalendarStore = create<CalendarState>((set, get) => ({
  currentYear: initialYear,
  currentMonth: initialMonth,
  selectedDate: null,
  highlightedCycle: null,
  darkMode: getStoredDarkMode(),
  searchError: null,

  setYear: (year) => {
    const clampedYear = Math.max(2026, Math.min(2030, year));
    set({ currentYear: clampedYear, selectedDate: null, highlightedCycle: null });
  },

  setMonth: (month) => {
    let newMonth = month;
    let newYear = get().currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    if (newYear < 2026 || newYear > 2030) return;
    set({ currentYear: newYear, currentMonth: newMonth, selectedDate: null, highlightedCycle: null });
  },

  goToPrevMonth: () => {
    const { currentMonth, currentYear } = get();
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    if (newYear < 2026) return;
    set({ currentYear: newYear, currentMonth: newMonth, selectedDate: null, highlightedCycle: null });
  },

  goToNextMonth: () => {
    const { currentMonth, currentYear } = get();
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    if (newYear > 2030) return;
    set({ currentYear: newYear, currentMonth: newMonth, selectedDate: null, highlightedCycle: null });
  },

  goToPrevYear: () => {
    const { currentYear } = get();
    if (currentYear <= 2026) return;
    set({ currentYear: currentYear - 1, selectedDate: null, highlightedCycle: null });
  },

  goToNextYear: () => {
    const { currentYear } = get();
    if (currentYear >= 2030) return;
    set({ currentYear: currentYear + 1, selectedDate: null, highlightedCycle: null });
  },

  goToToday: () => {
    const t = new Date();
    const year = t.getFullYear();
    const month = t.getMonth();
    if (year >= 2026 && year <= 2030) {
      set({ currentYear: year, currentMonth: month, selectedDate: t, highlightedCycle: null, searchError: null });
    }
  },

  goToDate: (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    if (year >= 2026 && year <= 2030) {
      set({ currentYear: year, currentMonth: month, selectedDate: date, highlightedCycle: null, searchError: null });
    }
  },

  setHighlightedCycle: (cycle) => {
    set({ highlightedCycle: cycle, selectedDate: null });
  },

  setSelectedDate: (date) => {
    set({ selectedDate: date, highlightedCycle: null });
  },

  toggleDarkMode: () => {
    const newDark = !get().darkMode;
    if (typeof window !== 'undefined') {
      localStorage.setItem('cycle-calendar-dark-mode', String(newDark));
    }
    set({ darkMode: newDark });
  },

  setDarkMode: (dark) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cycle-calendar-dark-mode', String(dark));
    }
    set({ darkMode: dark });
  },

  setSearchError: (error) => {
    set({ searchError: error });
  },

  searchByCycle: (cycleNumber) => {
    const range = getCycleDateRange(cycleNumber);
    if (!range) return false;
    const targetDate = range.start;
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    if (year < 2026 || year > 2030) return false;
    set({
      currentYear: year,
      currentMonth: month,
      selectedDate: null,
      highlightedCycle: cycleNumber,
      searchError: null,
    });
    return true;
  },

  searchByDate: (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    if (year < 2026 || year > 2030) return false;
    set({
      currentYear: year,
      currentMonth: month,
      selectedDate: date,
      highlightedCycle: null,
      searchError: null,
    });
    return true;
  },
}));
