import { Calendar as CalendarIcon } from 'lucide-react';
import { useCalendarStore } from '@/store/useCalendarStore';

export function TodayButton() {
  const { goToToday } = useCalendarStore();

  return (
    <button
      onClick={goToToday}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors shadow-sm hover:shadow"
    >
      <CalendarIcon size={16} />
      今日
    </button>
  );
}
