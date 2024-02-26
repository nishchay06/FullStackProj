import Select from "react-select"

const options = [
  { value: "IN", label: "India" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "CN", label: "China" },
  { value: "JP", label: "Japan" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "BR", label: "Brazil" },
  { value: "IT", label: "Italy" },
  { value: "CA", label: "Canada" },
  { value: "KR", label: "South Korea" },
  { value: "RU", label: "Russia" },
  { value: "AU", label: "Australia" },
  { value: "ES", label: "Spain" },
  { value: "MX", label: "Mexico" },
  { value: "ID", label: "Indonesia" },
  { value: "NL", label: "Netherlands" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "TR", label: "Turkey" },
  { value: "CH", label: "Switzerland" },
  { value: "SE", label: "Sweden" },
  { value: "NG", label: "Nigeria" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "PL", label: "Poland" },
  { value: "BE", label: "Belgium" },
  { value: "TH", label: "Thailand" },
  { value: "CL", label: "Chile" },
  { value: "AT", label: "Austria" },
  { value: "IR", label: "Iran" },
  { value: "ZA", label: "South Africa" },
  { value: "DK", label: "Denmark" },
  { value: "SG", label: "Singapore" },
  { value: "EG", label: "Egypt" },
  { value: "MY", label: "Malaysia" },
  { value: "PH", label: "Philippines" },
  { value: "FI", label: "Finland" },
]

export default function GetCountry({ onSelect }) {
  return <Select value={"IN"} options={options} onChange={(e) => onSelect(e.value)} />
}
