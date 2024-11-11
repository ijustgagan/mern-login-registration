
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result);
                if (result.data.success) {
                    
                    switch (result.data.role) {
                        case "Admin":
                            navigate("/admin");
                            break;
                        case "Manager":
                            navigate("/manager");
                            break;
                        case "Staff":
                            navigate("/staff");
                            break;
                        case "Employee":
                            navigate("/employee");
                            break;
                        default:
                            alert("Invalid role");
                    }
                } else {
                    alert("Password is incorrect");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-5 bg-success w-100">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card ">
                        <div className="card-header bg-primary text-light ">Login</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        autoComplete="off"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        autoComplete="off"
                                        name="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <p className="mb-0">Don't have an account? <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
