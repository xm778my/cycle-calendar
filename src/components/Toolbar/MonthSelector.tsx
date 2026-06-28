import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCalendarStore } from '@/store/useCalendarStore';

const months = [
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月',
];

export function MonthSelector() {
  const { currentMonth, setMonth, goToPrevMonth, goToNextMonth } = useCalendarStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center gap-1" ref={dropdownRef}>
      <button
        onClick={goToPrevMonth}
        className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
        aria-label="上一月"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 text-lg font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-100 min-w-[80px] text-center"
      >
        {months[currentMonth]}
      </button>
      <button
        onClick={goToNextMonth}
        className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
        aria-label="下一月"
      >
        <ChevronRight size={20} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50 grid grid-cols-3 gap-1 p-2 min-w-[240px]">
          {months.map((m, idx) => (
            <button
              key={m}
              onClick={() => {
                setMonth(idx);
                setIsOpen(false);
              }}
              className={`px-3 py-2 rounded-md text-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors ${
                idx === currentMonth
                  ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
