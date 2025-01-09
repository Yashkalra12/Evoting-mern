import React, { useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const VoteCard = (props) => {

    const { candidate } = props
    const host = "http://localhost:5010" 
    const navigate = useNavigate()

    const [token, setToken] = useState('');

    const [isButtonDisabled, setIsButtonDisabled] = useState();

    const parseToken = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            // Extract the boolean value from the token (assuming it's stored under 'isEnabled' key)
            const isEnabled = decodedToken.user.upVote;
            setIsButtonDisabled(isEnabled);
        } catch (error) {
            console.error('Something went wrong:', error);
        }

    };

    useEffect(() => {
        const fetchToken = () => {
            const storedToken = sessionStorage.getItem('token eVoting Login');
            if (storedToken) {
                setToken(storedToken);
            }
        };

        fetchToken();
    }, []);

    // Call parseToken whenever the token changes
    useEffect(() => {
        if (token) {
            parseToken(token);
        }
    }, [token]);

    const vote = async (id, name) => {
        try {
            if (window.confirm(`Do you want the vote to ${name}?`)) {
                await fetch(`${host}/api/candidate/vote/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": sessionStorage.getItem('token eVoting Login')
                    }
                }).then(sessionStorage.removeItem('token eVoting Login'))
                .then(alert('Your Vote has Successfully Added!'))
                .then(navigate('/thanks-for-voting'));
            }
        } catch (error) {
            window.alert(error)
        }
    }

    return (
        <>
            <div className='col-md-3'>
                <div className="card my-3">
                    <div className="card-body">
                        <img className="card-img-top" style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', marginBottom: '8px' }} src={candidate.url} alt={candidate.name} />
                        <h5 className="card-title">{candidate.partyname}</h5>
                        <p className="card-text">{candidate.name}</p>
                        {isButtonDisabled ?
                            <button disabled={isButtonDisabled} className="btn btn-primary" onClick={() => vote(candidate._id, candidate.name)}>Already Voted</button>
                            :
                            <button disabled={isButtonDisabled} className="btn btn-primary" onClick={() => vote(candidate._id, candidate.name)}>Vote</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoteCard
