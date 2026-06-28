export interface HolidayInfo {
  date: string;
  name: string;
  isHoliday?: boolean;
  isWorkDay?: boolean;
}

const holidays2026: HolidayInfo[] = [
  { date: '2026-01-01', name: '元旦', isHoliday: true },
  { date: '2026-01-02', name: '元旦', isHoliday: true },
  { date: '2026-01-03', name: '元旦', isHoliday: true },
  { date: '2026-02-16', name: '春节', isHoliday: true },
  { date: '2026-02-17', name: '春节', isHoliday: true },
  { date: '2026-02-18', name: '春节', isHoliday: true },
  { date: '2026-02-19', name: '春节', isHoliday: true },
  { date: '2026-02-20', name: '春节', isHoliday: true },
  { date: '2026-02-21', name: '春节', isHoliday: true },
  { date: '2026-02-22', name: '春节', isHoliday: true },
  { date: '2026-02-14', name: '春节调休', isWorkDay: true },
  { date: '2026-02-28', name: '春节调休', isWorkDay: true },
  { date: '2026-04-04', name: '清明节', isHoliday: true },
  { date: '2026-04-05', name: '清明节', isHoliday: true },
  { date: '2026-04-06', name: '清明节', isHoliday: true },
  { date: '2026-05-01', name: '劳动节', isHoliday: true },
  { date: '2026-05-02', name: '劳动节', isHoliday: true },
  { date: '2026-05-03', name: '劳动节', isHoliday: true },
  { date: '2026-05-04', name: '劳动节', isHoliday: true },
  { date: '2026-05-05', name: '劳动节', isHoliday: true },
  { date: '2026-04-26', name: '劳动节调休', isWorkDay: true },
  { date: '2026-05-09', name: '劳动节调休', isWorkDay: true },
  { date: '2026-06-19', name: '端午节', isHoliday: true },
  { date: '2026-06-20', name: '端午节', isHoliday: true },
  { date: '2026-06-21', name: '端午节', isHoliday: true },
  { date: '2026-10-01', name: '国庆节', isHoliday: true },
  { date: '2026-10-02', name: '国庆节', isHoliday: true },
  { date: '2026-10-03', name: '国庆节', isHoliday: true },
  { date: '2026-10-04', name: '国庆节', isHoliday: true },
  { date: '2026-10-05', name: '国庆节', isHoliday: true },
  { date: '2026-10-06', name: '国庆节', isHoliday: true },
  { date: '2026-10-07', name: '国庆节', isHoliday: true },
  { date: '2026-09-27', name: '国庆调休', isWorkDay: true },
  { date: '2026-10-10', name: '国庆调休', isWorkDay: true },
];

const holidays2027: HolidayInfo[] = [
  { date: '2027-01-01', name: '元旦', isHoliday: true },
  { date: '2027-01-02', name: '元旦', isHoliday: true },
  { date: '2027-01-03', name: '元旦', isHoliday: true },
  { date: '2027-02-06', name: '春节', isHoliday: true },
  { date: '2027-02-07', name: '春节', isHoliday: true },
  { date: '2027-02-08', name: '春节', isHoliday: true },
  { date: '2027-02-09', name: '春节', isHoliday: true },
  { date: '2027-02-10', name: '春节', isHoliday: true },
  { date: '2027-02-11', name: '春节', isHoliday: true },
  { date: '2027-02-12', name: '春节', isHoliday: true },
  { date: '2027-04-03', name: '清明节', isHoliday: true },
  { date: '2027-04-04', name: '清明节', isHoliday: true },
  { date: '2027-04-05', name: '清明节', isHoliday: true },
  { date: '2027-05-01', name: '劳动节', isHoliday: true },
  { date: '2027-05-02', name: '劳动节', isHoliday: true },
  { date: '2027-05-03', name: '劳动节', isHoliday: true },
  { date: '2027-05-04', name: '劳动节', isHoliday: true },
  { date: '2027-05-05', name: '劳动节', isHoliday: true },
  { date: '2027-06-09', name: '端午节', isHoliday: true },
  { date: '2027-06-10', name: '端午节', isHoliday: true },
  { date: '2027-06-11', name: '端午节', isHoliday: true },
  { date: '2027-10-01', name: '国庆节', isHoliday: true },
  { date: '2027-10-02', name: '国庆节', isHoliday: true },
  { date: '2027-10-03', name: '国庆节', isHoliday: true },
  { date: '2027-10-04', name: '国庆节', isHoliday: true },
  { date: '2027-10-05', name: '国庆节', isHoliday: true },
  { date: '2027-10-06', name: '国庆节', isHoliday: true },
  { date: '2027-10-07', name: '国庆节', isHoliday: true },
];

const holidays2028: HolidayInfo[] = [
  { date: '2028-01-01', name: '元旦', isHoliday: true },
  { date: '2028-01-02', name: '元旦', isHoliday: true },
  { date: '2028-01-03', name: '元旦', isHoliday: true },
  { date: '2028-01-26', name: '春节', isHoliday: true },
  { date: '2028-01-27', name: '春节', isHoliday: true },
  { date: '2028-01-28', name: '春节', isHoliday: true },
  { date: '2028-01-29', name: '春节', isHoliday: true },
  { date: '2028-01-30', name: '春节', isHoliday: true },
  { date: '2028-01-31', name: '春节', isHoliday: true },
  { date: '2028-02-01', name: '春节', isHoliday: true },
  { date: '2028-04-04', name: '清明节', isHoliday: true },
  { date: '2028-04-05', name: '清明节', isHoliday: true },
  { date: '2028-04-06', name: '清明节', isHoliday: true },
  { date: '2028-05-01', name: '劳动节', isHoliday: true },
  { date: '2028-05-02', name: '劳动节', isHoliday: true },
  { date: '2028-05-03', name: '劳动节', isHoliday: true },
  { date: '2028-05-28', name: '端午节', isHoliday: true },
  { date: '2028-05-29', name: '端午节', isHoliday: true },
  { date: '2028-05-30', name: '端午节', isHoliday: true },
  { date: '2028-10-01', name: '国庆节', isHoliday: true },
  { date: '2028-10-02', name: '国庆节', isHoliday: true },
  { date: '2028-10-03', name: '国庆节', isHoliday: true },
  { date: '2028-10-04', name: '国庆节', isHoliday: true },
  { date: '2028-10-05', name: '国庆节', isHoliday: true },
  { date: '2028-10-06', name: '国庆节', isHoliday: true },
  { date: '2028-10-07', name: '国庆节', isHoliday: true },
];

const holidays2029: HolidayInfo[] = [
  { date: '2029-01-01', name: '元旦', isHoliday: true },
  { date: '2029-01-02', name: '元旦', isHoliday: true },
  { date: '2029-01-03', name: '元旦', isHoliday: true },
  { date: '2029-02-13', name: '春节', isHoliday: true },
  { date: '2029-02-14', name: '春节', isHoliday: true },
  { date: '2029-02-15', name: '春节', isHoliday: true },
  { date: '2029-02-16', name: '春节', isHoliday: true },
  { date: '2029-02-17', name: '春节', isHoliday: true },
  { date: '2029-02-18', name: '春节', isHoliday: true },
  { date: '2029-02-19', name: '春节', isHoliday: true },
  { date: '2029-04-04', name: '清明节', isHoliday: true },
  { date: '2029-04-05', name: '清明节', isHoliday: true },
  { date: '2029-04-06', name: '清明节', isHoliday: true },
  { date: '2029-05-01', name: '劳动节', isHoliday: true },
  { date: '2029-05-02', name: '劳动节', isHoliday: true },
  { date: '2029-05-03', name: '劳动节', isHoliday: true },
  { date: '2029-06-16', name: '端午节', isHoliday: true },
  { date: '2029-06-17', name: '端午节', isHoliday: true },
  { date: '2029-06-18', name: '端午节', isHoliday: true },
  { date: '2029-10-01', name: '国庆节', isHoliday: true },
  { date: '2029-10-02', name: '国庆节', isHoliday: true },
  { date: '2029-10-03', name: '国庆节', isHoliday: true },
  { date: '2029-10-04', name: '国庆节', isHoliday: true },
  { date: '2029-10-05', name: '国庆节', isHoliday: true },
  { date: '2029-10-06', name: '国庆节', isHoliday: true },
  { date: '2029-10-07', name: '国庆节', isHoliday: true },
];

const holidays2030: HolidayInfo[] = [
  { date: '2030-01-01', name: '元旦', isHoliday: true },
  { date: '2030-01-02', name: '元旦', isHoliday: true },
  { date: '2030-01-03', name: '元旦', isHoliday: true },
  { date: '2030-02-03', name: '春节', isHoliday: true },
  { date: '2030-02-04', name: '春节', isHoliday: true },
  { date: '2030-02-05', name: '春节', isHoliday: true },
  { date: '2030-02-06', name: '春节', isHoliday: true },
  { date: '2030-02-07', name: '春节', isHoliday: true },
  { date: '2030-02-08', name: '春节', isHoliday: true },
  { date: '2030-02-09', name: '春节', isHoliday: true },
  { date: '2030-04-04', name: '清明节', isHoliday: true },
  { date: '2030-04-05', name: '清明节', isHoliday: true },
  { date: '2030-04-06', name: '清明节', isHoliday: true },
  { date: '2030-05-01', name: '劳动节', isHoliday: true },
  { date: '2030-05-02', name: '劳动节', isHoliday: true },
  { date: '2030-05-03', name: '劳动节', isHoliday: true },
  { date: '2030-06-05', name: '端午节', isHoliday: true },
  { date: '2030-06-06', name: '端午节', isHoliday: true },
  { date: '2030-06-07', name: '端午节', isHoliday: true },
  { date: '2030-10-01', name: '国庆节', isHoliday: true },
  { date: '2030-10-02', name: '国庆节', isHoliday: true },
  { date: '2030-10-03', name: '国庆节', isHoliday: true },
  { date: '2030-10-04', name: '国庆节', isHoliday: true },
  { date: '2030-10-05', name: '国庆节', isHoliday: true },
  { date: '2030-10-06', name: '国庆节', isHoliday: true },
  { date: '2030-10-07', name: '国庆节', isHoliday: true },
];

const allHolidays: Record<string, HolidayInfo> = {};

[...holidays2026, ...holidays2027, ...holidays2028, ...holidays2029, ...holidays2030].forEach(
  (h) => {
    allHolidays[h.date] = h;
  }
);

export function getHolidayInfo(date: Date): HolidayInfo | null {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  const key = `${y}-${m}-${d}`;
  return allHolidays[key] || null;
}

const solarFestivals: Record<string, string> = {
  '01-01': '元旦',
  '02-14': '情人节',
  '03-08': '妇女节',
  '03-12': '植树节',
  '04-01': '愚人节',
  '05-01': '劳动节',
  '05-04': '青年节',
  '06-01': '儿童节',
  '07-01': '建党节',
  '08-01': '建军节',
  '09-10': '教师节',
  '10-01': '国庆节',
  '12-24': '平安夜',
  '12-25': '圣诞节',
};

export function getSolarFestival(date: Date): string | null {
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  const key = `${m}-${d}`;
  return solarFestivals[key] || null;
}
