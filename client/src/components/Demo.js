import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Demo = () => {
    const navigate = useNavigate();

    const handleStartVoting = () => {
        if (sessionStorage.getItem('token eVoting Login')) {
            navigate('/cast-vote');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="container">
            <h1 className="text-center my-5">Welcome to the eVoting System Demo</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Experience Seamless Voting</h5>
                            <p className="card-text">
                                This demo showcases the ease of online voting with our secure, user-friendly interface. 
                                Click below to explore the system and cast your vote.
                            </p>
                            <button 
                                className="btn btn-primary" 
                                onClick={handleStartVoting}
                            >
                                Start Voting
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="text-center">
                <Link to="/learn-more" className="btn btn-link">
                    Learn More about eVoting
                </Link>
            </div>
        </div>
    );
};

export default Demo;
