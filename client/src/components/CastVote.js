import React, { useEffect } from 'react'
import DisplayCandidates from './DisplayCandidates'
import { useNavigate } from 'react-router-dom'

const CastVote = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!sessionStorage.getItem('token eVoting Login')) {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="container my-3">
                <DisplayCandidates />
            </div>
        </>
    )
}

export default CastVote
