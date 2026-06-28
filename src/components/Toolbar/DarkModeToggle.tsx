import { Sun, Moon } from 'lucide-react';
import { useCalendarStore } from '@/store/useCalendarStore';

export function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useCalendarStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
      aria-label={darkMode ? '切换到浅色模式' : '切换到深色模式'}
      title={darkMode ? '浅色模式' : '深色模式'}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
