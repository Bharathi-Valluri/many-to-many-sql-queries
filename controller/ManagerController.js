const format = require('pg-format')
const { client } = require('../db')

const InsertingData = async (req, res) => {
  try {
    const resp = await client.query(
      `INSERT INTO Managers(m_id,m_name, m_age) VALUES(${req.body.m_id[0]},'${req.body.m_name[0]}',${req.body.m_age[0]}),(${req.body.m_id[1]},'${req.body.m_name[1]}',${req.body.m_age[1]}),(${req.body.m_id[2]},'${req.body.m_name[2]}',${req.body.m_age[2]}),(${req.body.m_id[3]},'${req.body.m_name[3]}',${req.body.m_age[3]});
	
        INSERT INTO Employees(emp_id,emp_name, emp_age) VALUES (${req.body.emp_id[0]},'${req.body.emp_name[0]}',${req.body.emp_age[0]}),(${req.body.emp_id[1]},'${req.body.emp_name[1]}',${req.body.emp_age[1]}),(${req.body.emp_id[2]},'${req.body.emp_name[2]}',${req.body.emp_age[2]}),(${req.body.emp_id[3]},'${req.body.emp_name[3]}',${req.body.emp_age[3]});

        INSERT INTO manager_employee(manager_id, employee_id) VALUES (${req.body.manager_id[0]},${req.body.employee_id[0]}),(${req.body.manager_id[1]},${req.body.employee_id[1]}),(${req.body.manager_id[2]},${req.body.employee_id[2]}),(${req.body.manager_id[3]},${req.body.employee_id[3]}),(${req.body.manager_id[4]},${req.body.employee_id[4]}),(${req.body.manager_id[5]},${req.body.employee_id[5]}),(${req.body.manager_id[6]},${req.body.employee_id[6]})`
    )
    console.log(`Added an employee details with the name ${req.body.name}`)
    res.status(200).json({
      response: resp,
      message: 'Data inserted into db successfully!....'
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      response: null,
      message: 'Failed!.....'
    })
  }
}
const fetchAllRecords = async (req, res) => {
  try {
    const resp = await client.query(
      `select m_id,m_name,m_age,count(employees.emp_id) from managers 
      LEFT JOIN manager_employee 
      ON manager_employee.manager_id=managers.m_id
      LEFT JOIN employees ON 
      employees.emp_id=manager_employee.employee_id and employees.emp_age>=${req.body.emp_age}
      group by managers.m_id
      having count(employees.emp_id)=0`
    )
    res.status(200).json({
      response: resp,
      message: 'Data inserted into db successfully!....'
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      response: null,
      message: 'Failed to fetch the records!...'
    })
  }
}
module.exports = {
  InsertingData,
  fetchAllRecords
}
