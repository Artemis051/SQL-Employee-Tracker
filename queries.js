const db = require('./db');

class Queries {
  static viewAllDepartments() {
    return db.query('SELECT * FROM department');
  }

  static viewAllRoles() {
    return db.query('SELECT * FROM role');
  }

  static viewAllEmployees() {
    return db.query('SELECT * FROM employee');
  }

  static addDepartment(departmentName) {
    return db.query('INSERT INTO department (name) VALUES (?)', [departmentName]);
  }
  static addRole(title, salary, departmentId) {
    return db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
  }

  static addEmployee(firstName, lastName, roleId, managerId) {
    return db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
  }

  static updateEmployeeRole(employeeId, roleId) {
    return db.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
  }
}

module.exports = Queries;
