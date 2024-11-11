import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Register";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import StaffDashboard from "./StaffDashboard";
import EmployeeDashboard from "./EmployeeDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./Register";
import Home from "./Home";

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/manager" element={<ManagerDashboard />} />
                <Route path="/staff" element={<StaffDashboard />} />
                <Route path="/employee" element={<EmployeeDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
