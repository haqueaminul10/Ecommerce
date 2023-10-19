const db =require("../config/dbConnection.js");

// SQL query to create the table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(200) NOT NULL,
    
    email VARCHAR(200) NOT NULL UNIQUE,
    contactnumber VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    role ENUM('admin')  NOT NULL DEFAULT 'admin'
  )
`;

// Execute the query to create the table
db.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating the table:', err.message);
    } 
     else {
       console.log('Table "admin" created successfully');
    }
  });