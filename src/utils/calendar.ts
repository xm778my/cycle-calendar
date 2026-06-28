import { getCycleNumber, isSameDay } from './cycle';
import { getLunarDateStr, getSolarTerm } from './lunar';
import { getHolidayInfo, getSolarFestival } from './holidays';

export interface CalendarDate {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSunday: boolean;
  cycleNumber: string;
  lunarDate: string;
  solarTerm: string | null;
  holidayName: string | null;
  solarFestival: string | null;
  isHoliday: boolean;
  isWorkDay: boolean;
  weekDay: number;
}

export function generateCalendarDays(year: number, month: number): CalendarDate[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const firstDayOfWeek = firstDay.getDay();

  const startDate = new Date(firstDay);
  startDate.setDate(firstDay.getDate() - firstDayOfWeek);

  const days: CalendarDate[] = [];

  for (let i = 0; i < 42; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    currentDate.setHours(0, 0, 0, 0);

    const holidayInfo = getHolidayInfo(currentDate);
    const solarTerm = getSolarTerm(currentDate);
    const solarFestival = getSolarFestival(currentDate);

    days.push({
      date: currentDate,
      day: currentDate.getDate(),
      isCurrentMonth: currentDate.getMonth() === month,
      isToday: isSameDay(currentDate, today),
      isSunday: currentDate.getDay() === 0,
      cycleNumber: getCycleNumber(currentDate),
      lunarDate: getLunarDateStr(currentDate),
      solarTerm,
      holidayName: holidayInfo?.name || null,
      solarFestival,
      isHoliday: holidayInfo?.isHoliday || false,
      isWorkDay: holidayInfo?.isWorkDay || false,
      weekDay: currentDate.getDay(),
    });
  }

  return days;
}

export function getWeeks(days: CalendarDate[]): CalendarDate[][] {
  const weeks: CalendarDate[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}
