const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',      
  user: 'root',   
  password: '1234',
  database: 'employee_tracker',  
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();

// mysql> SHOW DATABASES;
// +--------------------+
// | Database           |
// +--------------------+
// | books_db           |
// | demo_db            |
// | employee_tracker   |
// | grocery_db         |
// | information_schema |
// | mysql              |
// | performance_schema |
// | sys                |
// +--------------------+
// 8 rows in set (0.02 sec)

// mysql> USE employee_tracker
// Reading table information for completion of table and column names
// You can turn off this feature to get a quicker startup with -A

// Database changed
// mysql> USE employee_tracker;
// Database changed
// mysql> SHOW TABLES;
// +----------------------------+
// | Tables_in_employee_tracker |
// +----------------------------+
// | department                 |
// | employee                   |
// | role                       |
// +----------------------------+
// 3 rows in set (0.00 sec)

// mysql> 