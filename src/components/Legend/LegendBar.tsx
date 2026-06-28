export function LegendBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="px-2 py-0.5 text-xs font-semibold bg-blue-500 text-white rounded-full">
            2605
          </span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">周期号</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-xs px-1.5 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded font-medium">
            休
          </span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">休假</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-xs px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded font-medium">
            班
          </span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">调休补班</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-xs text-red-500 dark:text-red-400 font-medium">元旦</span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">节假日/节气</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-5 h-5 border-2 border-blue-500 rounded" />
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">今日</span>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 italic w-full sm:w-auto text-center sm:text-right">
        by 小马
      </div>
    </div>
  );
}
