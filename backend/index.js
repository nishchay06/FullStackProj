const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
require('dotenv').config();
const app = express()

app.use(cors())
app.use(express.json())

// There is a MYSQL table with following schema:
// UID (String)
// Name (String)
// Score (Integer)
// Country (ISO 2 letter country code)
// TimeStamp (timestamp)

// Create a MYSQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

db.connect()


// Display current week leaderboard (Top 200)
app.get("/leaderboard", (req, res) => {
  db.query("select * from data order by score desc limit 200", (err, data) => {
    if (err) res.status(500).json({ error: err })
    return res.status(200).json(data)
  })
})
// Display last week leaderboard given a country by the user (Top 200)
app.get("/leaderboard/:country", (req, res) => {
  const country = req.params.country
  db.query(
    "select * from data where country = ? order by score desc limit 200",
    country,
    (err, data) => {
      if (err) res.status(500).json({ error: err })
      return res.status(200).json(data)
    }
  )
})

// Fetch user rank, given the userId.
app.get("/user/:userId", (req, res) => {
  db.query(
    "select count(*) as `rank` from data where score > (select score from data where UID = ?)",
    req.params.userId,
    (err, data) => {
      if (err) res.status(500).json({ error: err })
      data[0].rank += 1
      return res.status(200).json(data)
    }
  )
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})