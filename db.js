const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
})

client.connect(function (err) {
  if (err) throw err
  console.log('Connected!')

  //   var sqlQuery = `CREATE TABLE Managers(
  //       m_id INT NOT NULL,
  //       m_name VARCHAR(255) NOT NULL,
  //       m_age INT NOT NULL,
  //       PRIMARY KEY(m_id)
  //       );

  //       CREATE TABLE Employees(
  //       emp_id INT NOT NULL,
  //       emp_name VARCHAR(255) NOT NULL,
  //       emp_age INT NOT NULL,
  //       PRIMARY KEY (emp_id)
  //      );

  //      CREATE TABLE manager_employee (
  //         manager_id INT NOT NULL,
  //         employee_id INT NOT NULL,
  //         PRIMARY KEY (manager_id, employee_id),
  //         FOREIGN KEY(manager_id) REFERENCES Managers (m_id),
  //         FOREIGN KEY(employee_id) REFERENCES employees (emp_id)
  //      );
  //  `
  //   client.query(sqlQuery)
  //   console.log('created!')
})

module.exports = { client }
