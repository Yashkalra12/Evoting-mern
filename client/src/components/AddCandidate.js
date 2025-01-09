import React, { useContext, useEffect, useState } from 'react';
import candidateContext from '../context/candidates/candidateContext';
import { useNavigate } from 'react-router-dom';

const AddCandidate = () => {
    const host = "https://evoting-mern-backend.vercel.app";
    const context = useContext(candidateContext);
    const { addCandidate } = context;
    const navigate = useNavigate();

    const [candidate, setCandidate] = useState({ name: '', partyname: '', url: '' });
    const [winner, setWinner] = useState('');

    // Handle form submission
    const handleClick = (e) => {
        e.preventDefault();
        addCandidate(candidate.name, candidate.partyname, candidate.url);
        setCandidate({ name: '', partyname: '', url: '' });
    };

    // Handle input changes
    const onChange = (e) => {
        setCandidate({ ...candidate, [e.target.name]: e.target.value });
    };

    // Fetch the candidate with the most votes
    const handleWinner = async () => {
        try {
            const response = await fetch(`${host}/api/candidate/maxVotesCandidate`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": sessionStorage.getItem('admin token eVoting')
                }
            });
            const json = await response.json();
            if (json.maxVotesCandidate) {
                setWinner(json.maxVotesCandidate.partyname || "No Party Name");
            } else {
                setWinner("No Winner");
            }
        } catch (error) {
            console.error("Error fetching winner:", error);
            setWinner("Error");
        }
    };

    // Redirect to login if no admin token
    useEffect(() => {
        if (!sessionStorage.getItem('admin token eVoting')) {
            navigate('/adminlogin');
        }
    }, [navigate]);

    return (
        <div className="container my-3">
            <h2>Add Candidate</h2>
            <form className='mb-3'>
                {/* Name input */}
                <div className="mb-3 row">
                    <label htmlFor="name" className="form-label col-sm-2">Name</label>
                    <input
                        type="text"
                        autoComplete='off'
                        className="form-control col-sm-10 w-25"
                        id="name"
                        name='name'
                        value={candidate.name}
                        onChange={onChange}
                    />
                </div>

                {/* Party Name input */}
                <div className="mb-3 row">
                    <label htmlFor="partyname" className="form-label col-sm-2">Party Name</label>
                    <input
                        type="text"
                        autoComplete='off'
                        className="form-control col-sm-10 w-25"
                        id="partyname"
                        name='partyname'
                        value={candidate.partyname}
                        onChange={onChange}
                    />
                </div>

                {/* Image URL input */}
                <div className="mb-3 row">
                    <label htmlFor="url" className="form-label col-sm-2">Image URL</label>
                    <input
                        type="text"
                        autoComplete='off'
                        className="form-control col-sm-10 w-25"
                        id="url"
                        name='url'
                        value={candidate.url}
                        onChange={onChange}
                    />
                </div>

                {/* Add Button */}
                <button
                    disabled={candidate.name.length < 5 || candidate.partyname.length < 5}
                    type="button"
                    className="btn btn-success"
                    onClick={handleClick}
                >
                    Add
                </button>
            </form>

            {/* Display Winner */}
            <div className="flex">
                <input
                    type="text"
                    disabled
                    className="form-control col-sm-10 w-25 mb-2"
                    value={winner}
                />
                <button className="btn btn-primary" onClick={handleWinner}>
                    Winner
                </button>
            </div>
        </div>
    );
}

export default AddCandidate;
