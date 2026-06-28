import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useCalendarStore } from '@/store/useCalendarStore';
import { parseSearchInput } from '@/utils/cycle';

export function SearchBox() {
  const { searchByCycle, searchByDate, setSearchError, searchError } = useCalendarStore();
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleSlashKey(e: KeyboardEvent) {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener('keydown', handleSlashKey);
    return () => window.removeEventListener('keydown', handleSlashKey);
  }, []);

  const handleSearch = () => {
    const result = parseSearchInput(value);
    if (result.type === 'error') {
      setSearchError(result.errorMessage || '输入格式错误');
      return;
    }

    setSearchError(null);

    if (result.type === 'date' && result.date) {
      searchByDate(result.date);
    } else if (result.type === 'cycle' && result.cycleNumber) {
      searchByCycle(result.cycleNumber);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
    if (e.key === 'Escape') {
      setValue('');
      setSearchError(null);
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${
          isFocused
            ? 'border-blue-500 ring-2 ring-blue-100 dark:ring-blue-900'
            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
        } bg-white dark:bg-gray-800`}
      >
        <Search size={16} className="text-gray-400 flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="周期号(2605)或日期(2026-06-09)"
          className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 w-56"
        />
        {value && (
          <button
            onClick={() => {
              setValue('');
              setSearchError(null);
            }}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 flex-shrink-0"
          >
            <X size={14} />
          </button>
        )}
      </div>
      {searchError && (
        <div className="absolute top-full left-0 mt-1 px-3 py-1.5 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md text-xs text-red-600 dark:text-red-400 z-50 whitespace-nowrap">
          {searchError}
        </div>
      )}
    </div>
  );
}
