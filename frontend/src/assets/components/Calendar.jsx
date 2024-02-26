import { DayPicker } from "react-day-picker"

export default function Calendar({ date, onSelect, footer }) {
  return (
    <DayPicker
      mode='single'
      selected={date}
      onSelect={onSelect}
      footer={footer}
    />
  )
}
