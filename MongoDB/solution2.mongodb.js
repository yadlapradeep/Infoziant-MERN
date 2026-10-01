//use companyDB

db.employees.insertMany([
  { employeeId: 101, name: "Arun", age: 25, department: "IT", role: "Developer", salary: 60000, experience: 3, location: "Chennai" },
  { employeeId: 102, name: "Priya", age: 29, department: "HR", role: "Manager", salary: 75000, experience: 6, location: "Bangalore" },
  { employeeId: 103, name: "Rahul", age: 32, department: "IT", role: "Developer", salary: 90000, experience: 8, location: "Chennai" },
  { employeeId: 104, name: "Anitha", age: 27, department: "Finance", role: "Accountant", salary: 55000, experience: 4, location: "Coimbatore" },
  { employeeId: 105, name: "Kiran", age: 35, department: "IT", role: "Manager", salary: 100000, experience: 10, location: "Chennai" },
  { employeeId: 106, name: "Divya", age: 24, department: "HR", role: "Tester", salary: 45000, experience: 2, location: "Madurai" },
  { employeeId: 107, name: "Vijay", age: 28, department: "IT", role: "Tester", salary: 65000, experience: 5, location: "Chennai" },
  { employeeId: 108, name: "Sneha", age: 31, department: "Sales", role: "Executive", salary: 50000, experience: 7, location: "Trichy" },
  { employeeId: 109, name: "Manoj", age: 26, department: "Finance", role: "Analyst", salary: 70000, experience: 4, location: "Chennai" },
  { employeeId: 110, name: "Lakshmi", age: 38, department: "IT", role: "Architect", salary: 120000, experience: 12, location: "Bangalore" }
])

// 1. All employees
db.employees.find()

// 2. IT employees
db.employees.find({ department: "IT" })

// 3. Salary > ₹50,000
db.employees.find({ salary: { $gt: 50000 } })

// 4. Age < 30
db.employees.find({ age: { $lt: 30 } })

// 5. Experience > 5
db.employees.find({ experience: { $gt: 5 } })

// 6. Employees in Chennai
db.employees.find({ location: "Chennai" })

// 7. Salary between ₹40,000 and ₹80,000
db.employees.find({
  salary: { $gte: 40000, $lte: 80000 }
})

// 8. Only name, role and salary
db.employees.find(
  {},
  { _id: 0, name: 1, role: 1, salary: 1 }
)