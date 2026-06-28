import { useRef } from 'react';
import { Toolbar } from '@/components/Toolbar/Toolbar';
import { CalendarGrid } from '@/components/Calendar/CalendarGrid';
import { LegendBar } from '@/components/Legend/LegendBar';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

export default function Home() {
  const calendarRef = useRef<HTMLDivElement>(null);

  useKeyboardShortcuts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-6 px-3 sm:px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
            周期日历
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            按特殊周期规则管理您的时间
          </p>
        </div>

        <Toolbar calendarRef={calendarRef} />

        <div ref={calendarRef} className="overflow-x-auto">
          <div className="min-w-[700px]">
            <CalendarGrid />
          </div>
        </div>

        <LegendBar />

        <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-2 sm:mt-4 hidden sm:block">
          快捷键：← → 切换月份 | ↑ ↓ 切换年份 | T 今日 | D 深色模式 | / 搜索
        </div>
      </div>
    </div>
  );
}
