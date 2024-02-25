export default function Entry(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>{props.uid}</h3>
      <h3>{props.Name}</h3>
      <h3>{props.score}</h3>
      <h3>{props.country}</h3>
    </div>
  )
}
