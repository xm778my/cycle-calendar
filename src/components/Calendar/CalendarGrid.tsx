import { useMemo, forwardRef, useState, useEffect } from 'react';
import { useCalendarStore } from '@/store/useCalendarStore';
import { generateCalendarDays, getWeeks } from '@/utils/calendar';
import { isSameDay } from '@/utils/cycle';
import { DateCell } from './DateCell';

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

export const CalendarGrid = forwardRef<HTMLDivElement>(function CalendarGrid(_props, ref) {
  const {
    currentYear,
    currentMonth,
    selectedDate,
    highlightedCycle,
    setHighlightedCycle,
    setSelectedDate,
  } = useCalendarStore();

  const [isAnimating, setIsAnimating] = useState(false);
  const [displayYear, setDisplayYear] = useState(currentYear);
  const [displayMonth, setDisplayMonth] = useState(currentMonth);

  useEffect(() => {
    if (currentYear !== displayYear || currentMonth !== displayMonth) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayYear(currentYear);
        setDisplayMonth(currentMonth);
        setIsAnimating(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentYear, currentMonth, displayYear, displayMonth]);

  const days = useMemo(
    () => generateCalendarDays(displayYear, displayMonth),
    [displayYear, displayMonth]
  );

  const weeks = useMemo(() => getWeeks(days), [days]);

  const handleCycleClick = (cycleNum: string, isCurrentMonth: boolean) => {
    if (isCurrentMonth) {
      setHighlightedCycle(highlightedCycle === cycleNum ? null : cycleNum);
      setSelectedDate(null);
    }
  };

  return (
    <div
      ref={ref}
      className={`
        bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700
        overflow-hidden transition-all duration-300
        ${isAnimating ? 'opacity-50 scale-[0.99]' : 'opacity-100 scale-100'}
      `}
    >
      <div
        className="grid"
        style={{ gridTemplateColumns: '72px repeat(7, 1fr)' }}
      >
        <div className="bg-gray-50 dark:bg-gray-700/50 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
          周期号
        </div>
        {weekDays.map((day, idx) => (
          <div
            key={day}
            className={`
              bg-gray-50 dark:bg-gray-700/50 py-3 text-center text-sm font-semibold border-b border-gray-100 dark:border-gray-700
              ${idx === 0 || idx === 6 ? 'text-red-500 dark:text-red-400' : 'text-gray-600 dark:text-gray-300'}
            `}
          >
            周{day}
          </div>
        ))}

        {weeks.map((week, weekIdx) => {
          const sundayDate = week[0];
          const cycleNum = sundayDate.cycleNumber;
          const isHighlightedWeek = highlightedCycle === cycleNum;

          return (
            <div key={weekIdx} className="contents">
              <div
                onClick={() => handleCycleClick(cycleNum, sundayDate.isCurrentMonth)}
                className={`
                  flex items-center justify-center border-b border-r border-gray-100 dark:border-gray-700
                  ${sundayDate.isCurrentMonth ? 'bg-white dark:bg-gray-800 cursor-pointer hover:bg-amber-50 dark:hover:bg-amber-900/20' : 'bg-gray-50 dark:bg-gray-900/50'}
                  ${isHighlightedWeek ? 'bg-amber-50 dark:bg-amber-900/20' : ''}
                  transition-colors
                `}
              >
                {sundayDate.isCurrentMonth && (
                  <span
                    className={`
                      px-2 py-1 text-xs font-semibold rounded-full shadow-sm transition-all
                      ${isHighlightedWeek
                        ? 'bg-amber-500 text-white scale-110'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                      }
                    `}
                  >
                    {cycleNum}
                  </span>
                )}
              </div>

              {week.map((dateInfo, dayIdx) => {
                const isSelected = selectedDate
                  ? isSameDay(dateInfo.date, selectedDate)
                  : false;

                return (
                  <DateCell
                    key={dayIdx}
                    dateInfo={dateInfo}
                    isSelected={isSelected}
                    isHighlighted={isHighlightedWeek && dateInfo.isCurrentMonth}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
});
