const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1941510",
  database: "REACTCATDataBase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const catName = req.body.catname;
  const parentCatteryName = req.body.parentcattery;
  const catSex = req.body.sex;
  console.log(`cat name is ${catName}, parentCatteryName is ${parentCatteryName}, catSex is ${catSex}`);
  const sqlInsert =
    "INSERT INTO Cats (catName, parentCatteryName, catSex) VALUES (?,?,?);";
  db.query(sqlInsert, [catName, parentCatteryName, catSex], (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
});

// app.get("/", (req, res) => {

//   const sqlInsert =
//     "INSERT INTO Cats (catName, parentCatteryName, catSex) VALUES ('Arny', 'Lambent Eyes','male');";
//   db.query(sqlInsert, (err, result) => {
//     if (err) console.log(err);
//     else res.send("hello 1");

//   });
// });

app.listen(3001, () => {
  console.log("running on port 3001");
});
