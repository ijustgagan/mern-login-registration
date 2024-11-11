
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();  

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.listen(3001, () => {
    console.log("Server is running");
});

// Login 
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // Check role and send appropriate response
                    switch (user.role) {
                        case "Admin":
                            res.json({ success: true, role: "Admin" });
                            break;
                        case "Manager":
                            res.json({ success: true, role: "Manager" });
                            break;
                        case "Staff":
                            res.json({ success: true, role: "Staff" });
                            break;
                        case "Employee":
                            res.json({ success: true, role: "Employee" });
                            break;
                        default:
                            res.json({ success: false, message: "Invalid role" });
                    }
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record exists");
            }
        })
        .catch(err => {
            console.error("Error in /login endpoint:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

// Registration 
app.post("/register", (req, res) => {
    const { name, email, password, role } = req.body;
    EmployeeModel.create({ name, email, password, role })
        .then(employees => res.json(employees))
        .catch(err => {
            console.error("Error in /register endpoint:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});
