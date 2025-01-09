import React, { useContext } from 'react'
import candidateContext from '../context/candidates/candidateContext'

const CandidateItem = (props) => {
    const context = useContext(candidateContext)
    const { deleteCandidate } = context
    const { candidate, updateCandidate } = props
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <img className="card-img-top" style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', marginBottom: '8px' }} src={candidate.url} alt={candidate.name} />
                    <h5 className="card-title">{candidate.partyname}</h5>
                    <p className="card-text">{candidate.name}</p>
                    <i className="fa-regular fa-trash-can mx-2" style={{ color: 'red' }} onClick={() => { deleteCandidate(candidate._id) }}></i>
                    <i className="fa-regular fa-pen-to-square mx-2" style={{ color: 'green' }} onClick={() => { updateCandidate(candidate) }}></i>
                </div>
            </div>
        </div>
    )
}

export default CandidateItem
