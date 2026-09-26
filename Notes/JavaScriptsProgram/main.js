import {Employee } from "./employee.js";


import {EmployeeRating } from "./calculator.js";


let Emp = new Employee("Vishnu", 30000);


console.log("Employee Name:", Emp.name);


console.log("Employee Salary:",Emp.salary);


console.log("Performance Rating:", EmployeeRating(Emp.salary));
 


