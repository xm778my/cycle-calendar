export function getCycleNumber(date: Date): string {
  const year = date.getFullYear();
  const yearStart = new Date(year, 0, 1);
  const yearStartDay = yearStart.getDay();

  const timeDiff = date.getTime() - yearStart.getTime();
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  let weekNumber: number;

  if (dayDiff < (7 - yearStartDay)) {
    weekNumber = 1;
  } else {
    const remainingDays = dayDiff - (7 - yearStartDay);
    weekNumber = 2 + Math.floor(remainingDays / 7);
  }

  const yearSuffix = year.toString().slice(-2);
  return `${yearSuffix}${weekNumber.toString().padStart(2, '0')}`;
}

export function getCycleDateRange(cycleNumber: string): { start: Date; end: Date } | null {
  if (!/^\d{4}$/.test(cycleNumber)) {
    return null;
  }

  const yearSuffix = cycleNumber.slice(0, 2);
  const weekNum = parseInt(cycleNumber.slice(2, 4), 10);
  const year = 2000 + parseInt(yearSuffix, 10);

  if (year < 2026 || year > 2030) {
    return null;
  }

  const yearStart = new Date(year, 0, 1);
  const yearStartDay = yearStart.getDay();

  let startDate: Date;

  if (weekNum === 1) {
    startDate = new Date(yearStart);
  } else {
    const firstSundayOffset = (7 - yearStartDay) % 7;
    const weekOffset = firstSundayOffset + (weekNum - 2) * 7;
    startDate = new Date(year, 0, 1 + weekOffset);
  }

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  return { start: startDate, end: endDate };
}

export function getWeekDates(sundayDate: Date): Date[] {
  const dates: Date[] = [];
  const sunday = new Date(sundayDate);
  sunday.setHours(0, 0, 0, 0);
  for (let i = 0; i < 7; i++) {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    dates.push(d);
  }
  return dates;
}

export function isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export function isSameWeek(d1: Date, d2: Date): boolean {
  const cycle1 = getCycleNumber(d1);
  const cycle2 = getCycleNumber(d2);
  return cycle1 === cycle2;
}

export function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function parseDate(dateStr: string): Date | null {
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10) - 1;
  const day = parseInt(match[3], 10);
  const date = new Date(year, month, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

export interface SearchResult {
  type: 'cycle' | 'date' | 'error';
  date?: Date;
  cycleNumber?: string;
  range?: { start: Date; end: Date };
  errorMessage?: string;
}

export function parseSearchInput(input: string): SearchResult {
  const trimmed = input.trim();

  if (/^\d{4}$/.test(trimmed)) {
    const range = getCycleDateRange(trimmed);
    if (!range) {
      return { type: 'error', errorMessage: '周期号超出支持范围（2026-2030年）' };
    }
    return { type: 'cycle', cycleNumber: trimmed, range };
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    const date = parseDate(trimmed);
    if (!date) {
      return { type: 'error', errorMessage: '请输入正确格式：周期号（2605）或日期（2026-06-09）' };
    }
    if (date.getFullYear() < 2026 || date.getFullYear() > 2030) {
      return { type: 'error', errorMessage: '日期超出支持范围（2026-2030年）' };
    }
    return { type: 'date', date };
  }

  return {
    type: 'error',
    errorMessage: '请输入正确格式：周期号（2605）或日期（2026-06-09）',
  };
}
