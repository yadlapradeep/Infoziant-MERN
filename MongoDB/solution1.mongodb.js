//use collegeDB

db.createCollection("students")

// Insert one student
db.students.insertOne({
  studentId: 101,
  name: "Arun",
  age: 20,
  gender: "Male",
  department: "CSE",
  year: 2,
  email: "arun@gmail.com"
})

// Insert multiple students
db.students.insertMany([
  {
    studentId: 102, name: "Priya", age: 21, gender: "Female",
    department: "ECE", year: 3, email: "priya@gmail.com"
  },
  {
    studentId: 103, name: "Rahul", age: 19, gender: "Male",
    department: "CSE", year: 1, email: "rahul@gmail.com"
  },
  {
    studentId: 104, name: "Anitha", age: 22, gender: "Female",
    department: "IT", year: 4, email: "anitha@gmail.com"
  },
  {
    studentId: 105, name: "Kiran", age: 20, gender: "Male",
    department: "EEE", year: 2, email: "kiran@gmail.com"
  },
  {
    studentId: 106, name: "Divya", age: 21, gender: "Female",
    department: "CSE", year: 3, email: "divya@gmail.com"
  },
  {
    studentId: 107, name: "Vijay", age: 23, gender: "Male",
    department: "MECH", year: 4, email: "vijay@gmail.com"
  },
  {
    studentId: 108, name: "Sneha", age: 20, gender: "Female",
    department: "IT", year: 2, email: "sneha@gmail.com"
  },
  {
    studentId: 109, name: "Manoj", age: 22, gender: "Male",
    department: "ECE", year: 4, email: "manoj@gmail.com"
  },
  {
    studentId: 110, name: "Lakshmi", age: 19, gender: "Female",
    department: "CSE", year: 1, email: "lakshmi@gmail.com"
  }
])

// Display all students
db.students.find()

// Find student using Student ID
db.students.find({ studentId: 105 })

// Display only name, department and email
db.students.find(
  {},
  { _id: 0, name: 1, department: 1, email: 1 }
)