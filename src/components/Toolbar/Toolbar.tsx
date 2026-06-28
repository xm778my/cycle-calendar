import { YearSelector } from './YearSelector';
import { MonthSelector } from './MonthSelector';
import { TodayButton } from './TodayButton';
import { SearchBox } from './SearchBox';
import { ExportButton } from './ExportButton';
import { DarkModeToggle } from './DarkModeToggle';

interface ToolbarProps {
  calendarRef: React.RefObject<HTMLElement | null>;
}

export function Toolbar({ calendarRef }: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <YearSelector />
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 hidden sm:block" />
        <MonthSelector />
        <TodayButton />
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <SearchBox />
        <ExportButton calendarRef={calendarRef} />
        <DarkModeToggle />
      </div>
    </div>
  );
}
