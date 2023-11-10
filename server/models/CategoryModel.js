const db =require("../config/dbConnection.js");

//TABLE QUERY
const tableQuery =`
CREATE TABLE IF NOT EXISTS categories(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    slug VARCHAR(255) NOT NULL
)`;

//EXECUTE THE QUERY TO CREATE TABLE
db.query(tableQuery, (err, results) => {
    if (err) {
      console.error('Error creating the table:', err.message);
    } 
    //  else {
    //    console.log('Table "categories" created successfully');
    //  }
  });

