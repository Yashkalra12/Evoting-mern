import React, { useContext, useEffect } from 'react'
import candidateContext from '../context/candidates/candidateContext'
import VoteCard from './VoteCard'

const DisplayCandidates = () => {

    useEffect(() => {
        getCandidatesforVoters()
        // eslint-disable-next-line
    }, [])

    const context = useContext(candidateContext)
    const { candidates, getCandidatesforVoters } = context
    return (
        <>
            <div className="row my-3">
                <h2>Cast your Vote</h2>
                <div className="container">
                    {candidates.length === 0 && 'No Candidates to display'}
                </div>
                {candidates.map((candidate) => {
                    return <VoteCard key={candidate._id} candidate={candidate} />
                })}
            </div>
        </>
    )
}

export default DisplayCandidates
