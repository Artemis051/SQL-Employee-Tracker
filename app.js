const inquirer = require('inquirer');
const Queries = require('./queries');

function startApp() {
  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    })
    .then((answers) => {
      switch (answers.action) {
        case 'View all departments':
          Queries.viewAllDepartments().then((result) => {
            console.table(result[0]);
            startApp(); 
          });
          break;

          case 'View all roles':
            Queries.viewAllRoles().then((result) => {
              console.table(result[0]);
              startApp(); 
            })
            .catch((error) => {
              console.error('Error viewing all roles:', error.message);
              startApp(); 
            });
            break;

            case 'View all employees':
                Queries.viewAllEmployees().then((result) => {
                  console.table(result[0]);
                  startApp(); 
                })
                .catch((error) => {
                  console.error('Error viewing all employees:', error.message);
                  startApp(); 
                });
                break;

        case 'Add a department':
          inquirer
            .prompt({
              type: 'input',
              name: 'departmentName',
              message: 'Enter the name of the department:'
            })
            .then((departmentAnswer) => {
              Queries.addDepartment(departmentAnswer.departmentName).then(() => {
                console.log('Department added successfully!');
                startApp();
              });
            });
          break;

        
          case 'Add a role':
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'title',
                  message: 'Enter the title for the new role:'
                },
                {
                  type: 'input',
                  name: 'salary',
                  message: 'Enter the salary for the new role:'
                },
                {
                  type: 'input',
                  name: 'departmentId',
                  message: 'Enter the department ID for the new role:'
                }
              ])
              .then((roleAnswers) => {
                Queries.addRole(roleAnswers.title, roleAnswers.salary, roleAnswers.departmentId)
                  .then(() => {
                    console.log('Role added successfully!');
                    startApp(); 
                  })
                  .catch((error) => {
                    console.error('Error adding role:', error.message);
                    startApp(); 
                  });
              });
            break;

            case 'Add an employee':
                inquirer
                  .prompt([
                    {
                      type: 'input',
                      name: 'firstName',
                      message: 'Enter the first name for the new employee:'
                    },
                    {
                      type: 'input',
                      name: 'lastName',
                      message: 'Enter the last name for the new employee:'
                    },
                    {
                      type: 'input',
                      name: 'roleId',
                      message: 'Enter the role ID for the new employee:'
                    },
                    {
                      type: 'input',
                      name: 'managerId',
                      message: 'Enter the manager ID for the new employee (if applicable):'
                    }
                  ])
                  .then((employeeAnswers) => {
                    Queries.addEmployee(employeeAnswers.firstName, employeeAnswers.lastName, employeeAnswers.roleId, employeeAnswers.managerId)
                      .then(() => {
                        console.log('Employee added successfully!');
                        startApp(); 
                      })
                      .catch((error) => {
                        console.error('Error adding employee:', error.message);
                        startApp(); 
                      });
                  });
                break;
              
              case 'Update an employee role':
                inquirer
                  .prompt([
                    {
                      type: 'input',
                      name: 'employeeId',
                      message: 'Enter the ID of the employee to update:'
                    },
                    {
                      type: 'input',
                      name: 'newRoleId',
                      message: 'Enter the new role ID for the employee:'
                    }
                  ])
                  .then((updateAnswers) => {
                    Queries.updateEmployeeRole(updateAnswers.employeeId, updateAnswers.newRoleId)
                      .then(() => {
                        console.log('Employee role updated successfully!');
                        startApp(); 
                      })
                      .catch((error) => {
                        console.error('Error updating employee role:', error.message);
                        startApp(); 
                      });
                  });
                break;

        case 'Exit':
          console.log('Exiting the application.');
          process.exit(); 
          break;

        default:
          console.log('Invalid choice. Please try again.');
          startApp(); 
          break;
      }
    });
}
startApp();
