import type { CalendarDate } from '@/utils/calendar';
import { getCycleDateRange } from '@/utils/cycle';
import { getLunarMonthStr } from '@/utils/lunar';
import { useCalendarStore } from '@/store/useCalendarStore';

interface DateCellProps {
  dateInfo: CalendarDate;
  isSelected: boolean;
  isHighlighted: boolean;
}

export function DateCell({ dateInfo, isSelected, isHighlighted }: DateCellProps) {
  const { setSelectedDate, setHighlightedCycle } = useCalendarStore();

  const {
    day,
    isCurrentMonth,
    isToday,
    lunarDate,
    solarTerm,
    holidayName,
    solarFestival,
    isHoliday,
    isWorkDay,
    weekDay,
    cycleNumber,
  } = dateInfo;

  const cycleRange = getCycleDateRange(cycleNumber);

  const displayText = holidayName || solarTerm || solarFestival || lunarDate;
  const isFestival = !!holidayName || !!solarTerm || !!solarFestival;
  const isWeekend = weekDay === 0 || weekDay === 6;

  const handleClick = () => {
    if (isCurrentMonth) {
      setSelectedDate(dateInfo.date);
      setHighlightedCycle(null);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative min-h-[90px] p-2 cursor-pointer transition-all duration-200
        border border-gray-100 dark:border-gray-700
        ${isCurrentMonth ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/50'}
        ${isToday ? 'ring-2 ring-blue-500 ring-inset z-10' : ''}
        ${isSelected ? 'bg-blue-50 dark:bg-blue-900/30' : ''}
        ${isHighlighted ? 'bg-amber-50 dark:bg-amber-900/20' : ''}
        hover:bg-blue-50 dark:hover:bg-blue-900/20
        group
      `}
    >
      <div className="flex items-start justify-between">
        <span
          className={`
            text-lg font-semibold
            ${!isCurrentMonth ? 'text-gray-300 dark:text-gray-600' : ''}
            ${isCurrentMonth && isWeekend ? 'text-red-500 dark:text-red-400' : ''}
            ${isCurrentMonth && !isWeekend ? 'text-gray-800 dark:text-gray-100' : ''}
          `}
        >
          {day}
        </span>

        {isWorkDay && (
          <span className="text-xs px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded font-medium">
            班
          </span>
        )}
        {isHoliday && (
          <span className="text-xs px-1.5 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded font-medium">
            休
          </span>
        )}
      </div>

      <div className="mt-1">
        <span
          className={`
            text-xs
            ${isCurrentMonth && isFestival ? 'text-red-500 dark:text-red-400' : ''}
            ${isCurrentMonth && !isFestival ? 'text-gray-500 dark:text-gray-400' : ''}
            ${!isCurrentMonth ? 'text-gray-300 dark:text-gray-600' : ''}
          `}
        >
          {displayText}
        </span>
      </div>

      <div className="absolute bottom-1 left-2 right-2 h-px bg-transparent group-hover:bg-blue-200 dark:group-hover:bg-blue-700 transition-colors" />

      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] pointer-events-none">
        <div className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {dateInfo.date.getFullYear()}年{dateInfo.date.getMonth() + 1}月{day}日
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
          <div>农历：{getLunarMonthStr(dateInfo.date)}</div>
          {solarTerm && <div>节气：{solarTerm}</div>}
          {holidayName && <div>节假日：{holidayName}</div>}
          {cycleRange && (
            <div>
              周期{dateInfo.cycleNumber}：
              {cycleRange.start.getMonth() + 1}月{cycleRange.start.getDate()}日 -{' '}
              {cycleRange.end.getMonth() + 1}月{cycleRange.end.getDate()}日
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
