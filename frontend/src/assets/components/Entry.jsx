import {getName} from 'country-list'
export default function Entry(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h3>{props.uid}</h3>
      <h3>{props.Name}</h3>
      <h3>{props.score}</h3>
      <h3>{getName(props.country)}</h3>
      <h3>{}</h3>
    </div>
  )
}
