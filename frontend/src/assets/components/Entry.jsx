import { getName } from "country-list"
import { format } from "date-fns"

export default function Entry(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h3>{format(props.timestamp, "dd-MM-yyyy")}</h3>
      <h3>{props.Name}</h3>
      <h3>{props.score}</h3>
      <h3>{getName(props.country)}</h3>
      <h3>{}</h3>
    </div>
  )
}
