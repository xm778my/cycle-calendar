import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCalendarStore } from '@/store/useCalendarStore';

const years = [2026, 2027, 2028, 2029, 2030];

export function YearSelector() {
  const { currentYear, setYear, goToPrevYear, goToNextYear } = useCalendarStore();
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
        onClick={goToPrevYear}
        className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
        aria-label="上一年"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 text-lg font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-100 min-w-[80px] text-center"
      >
        {currentYear}年
      </button>
      <button
        onClick={goToNextYear}
        className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
        aria-label="下一年"
      >
        <ChevronRight size={20} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50 min-w-[100px]">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => {
                setYear(y);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors ${
                y === currentYear
                  ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {y}年
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
