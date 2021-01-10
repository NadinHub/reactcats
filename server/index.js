const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1941510",
  database: "reactcatdb",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const cat_name = req.body.catname;
  const parent_cattery_name = req.body.parentcattery;
  const cat_sex = req.body.sex;
  const cat_birth_date = req.body.birthDate;
  console.log(`cat_name is ${cat_name}, parent_cattery_name is ${parent_cattery_name}, cat_sex is ${cat_sex}}, 
  birth date is ${cat_birth_date}`);
  const sqlInsert =
    "INSERT INTO Cat (cat_name, parent_cattery_name, cat_sex, cat_birth_date) VALUES (?,?,?,?);";
  db.query(
    sqlInsert,
    [cat_name, parent_cattery_name, cat_sex, cat_birth_date],
    (err, result) => {
      if (err) console.log(err);
      else console.log(result);
    }
  );
});

// app.get("/", (req, res) => {

//   const sqlInsert =
//     "INSERT INTO Cats (catName, parentCatteryNamet cat_sex) VALUES ('Arny', 'Lambent Eyes','male');";
//   db.query(sqlInsert, (err, result) => {
//     if (err) console.log(err);
//     else res.send("hello 1");

//   });
// });

app.listen(3001, () => {
  console.log("running on port 3001");
});
