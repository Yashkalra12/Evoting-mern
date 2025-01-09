import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserSignUp = () => {

    const host = "http://localhost:5010"
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({ name: '', id: '', password: '', cpassword: '' })
    const [dob, setDOB] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, id, password, cpassword } = credentials
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, id, dob, password, cpassword })
        });
        const json = await response.json()
        if (json.success) {
            sessionStorage.setItem('token eVoting Signup', json.authToken)
            navigate('/login')
        } else {
            alert('Invalid credentials')
            alert(json.error)
            console.error();
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleDate = (e) => {
        const selectedDate = new Date(e.target.value);
        const today = new Date();
        let age = today.getFullYear() - selectedDate.getFullYear();
        const monthDiff = today.getMonth() - selectedDate.getMonth();
        const dayDiff = today.getDate() - selectedDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        if (age < 18) {
            window.alert('You must be at least 18 years old.')
        }

        setDOB(e.target.value);
    };

    return (
        <>
            <div className='container my-5'>
                <center>
                    <h3>User Registration</h3><br />
                    <div className="card mx-5" style={{ width: '40rem' }}>
                        <div className="card-body mx-5">
                            <div className='auth-form-container my-3'></div>
                            <div className="container my-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 row">
                                        <label htmlFor="name" className="form-label col-sm-4">Name</label>
                                        <input type="text" className="form-control col-sm-10 w-50" autoComplete='off' value={credentials.name} onChange={onChange} id="name" name='name' />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="id" className="form-label col-sm-4">Id</label>
                                        <input type="id" className="form-control col-sm-10 w-50" maxLength={10} autoComplete='off' value={credentials.id} onChange={onChange} id="id" name='id' />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="dob" className="form-label col-sm-4">Date of Birth</label>
                                        <input type="date" className="form-control col-sm-10 w-50" autoComplete='off' value={dob} onChange={handleDate} id="dob" name='dob' />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="password" className="form-label col-sm-4">Password</label>
                                        <input type="password" className="form-control col-sm-10 w-50" autoComplete='off' value={credentials.password} onChange={onChange} id="password" name='password' />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="cpassword" className="form-label col-sm-4">Confirm Password</label>
                                        <input type="password" className="form-control col-sm-10 w-50" autoComplete='off' value={credentials.cpassword} onChange={onChange} id="cpassword" name='cpassword' />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </form>
                                <div className="btn" onClick={() => navigate('/login')}>Already have an account? Login Here.</div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </>
    )
}

export default UserSignUp
