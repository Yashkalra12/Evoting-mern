import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const host = "http://localhost:5010";
    const [credentials, setCredentials] = useState({ id: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/admin-login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: credentials.id, password: credentials.password })
        });
        const json = await response.json();
        if (json.success) {
            sessionStorage.setItem('admin token eVoting', json.authToken);
            navigate('/addcandidate');
        } else {
            alert('Invalid credentials');
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-5">
            <center>
                <h3 className="mb-4">Admin Login</h3>
                <div className="card shadow-lg mx-auto" style={{ width: '30rem' }}>
                    <div className="card-body p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">Admin ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="id"
                                    name="id"
                                    value={credentials.id}
                                    onChange={onChange}
                                    maxLength={10}
                                    autoComplete="off"
                                    placeholder="Enter Admin ID"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={onChange}
                                    autoComplete="off"
                                    placeholder="Enter Password"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                        <div className="text-center mt-3">
                            <button className="btn btn-link" onClick={() => navigate('/signup')}>
                                Don't have an account? Register Here.
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default AdminLogin;
