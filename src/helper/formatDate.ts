import dayjs from 'dayjs'
import 'dayjs/locale/th'

export function formatThaiDate(val: string): string {
  return dayjs(val).locale('th').add(543, 'year').format('DD MMMM YYYY')
}

export function MapTime(val: string): string {
  return val.split(':').slice(0, 2).join(':')
}

export function getDays(): string {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const dayName = days[dayjs().day()]
  return dayName
}

export function concatTimeToNumber(str: string): number {
  return Number(str.split(':').join(''))
}

export function listDate(): {
  day: string
  date: string
  active: boolean
  fullDate: string
}[] {
  const days = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']
  const dayFormat: {
    day: string
    date: string
    active: boolean
    fullDate: string
  }[] = days.map((items, index) => {
    return {
      day: items,
      date: dayjs().day(index).format('DD'),
      active:
        dateNow() === Number(dayjs().day(index).format('DD')) ? true : false,
      fullDate: dayjs().day(index).format('YYYY-MM-DD')
    }
  })
  return dayFormat
}

export function dateNow() {
  return dayjs().date()
}
