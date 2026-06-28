import { useState, useRef, useEffect } from 'react';
import { Download, Image, FileText } from 'lucide-react';
import { exportAsPNG, exportAsPDF } from '@/utils/export';
import { useCalendarStore } from '@/store/useCalendarStore';

interface ExportButtonProps {
  calendarRef: React.RefObject<HTMLElement | null>;
}

export function ExportButton({ calendarRef }: ExportButtonProps) {
  const { currentYear, currentMonth } = useCalendarStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
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

  const handleExport = async (type: 'png' | 'pdf') => {
    if (!calendarRef.current || isExporting) return;

    setIsExporting(true);
    setIsOpen(false);

    try {
      const filename = `周期日历_${currentYear}年${currentMonth + 1}月`;
      if (type === 'png') {
        await exportAsPNG(calendarRef.current, filename);
      } else {
        await exportAsPDF(calendarRef.current, filename);
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : '导出失败，请重试');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isExporting}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium transition-colors"
      >
        <Download size={16} />
        导出
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50 min-w-[140px]">
          <button
            onClick={() => handleExport('png')}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200 flex items-center gap-2 text-sm"
          >
            <Image size={16} className="text-blue-500" />
            PNG 图片
          </button>
          <button
            onClick={() => handleExport('pdf')}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200 flex items-center gap-2 text-sm"
          >
            <FileText size={16} className="text-red-500" />
            PDF 文件
          </button>
        </div>
      )}
    </div>
  );
}
