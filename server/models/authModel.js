const db = require("../config/dbConnection.js");

// SQL query to create the table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS Register (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(200) NOT NULL,
    lastname VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    gender ENUM('male','female','others') NOT NULL,
    contactnumber VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    role ENUM('user','admin','vendor')  NOT NULL DEFAULT 'user'
  )
`;

// EXECUTE THE QUERY TO CREATE TABLE
db.query(createTableQuery, (err, results) => {
  if (err) {
    console.error("Error creating the table:", err.message);
  }
  //   else {
  //     console.log('Table "Register" created successfully');
  //   }
});
