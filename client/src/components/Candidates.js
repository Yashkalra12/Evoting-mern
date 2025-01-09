import React, { useContext, useEffect, useRef, useState } from 'react'
import candidateContext from '../context/candidates/candidateContext'
import CandidateItem from './CandidateItem'
import AddCandidate from './AddCandidate'
import { useNavigate } from 'react-router-dom'

const Candidates = () => {

    const navigate = useNavigate()
    const context = useContext(candidateContext)
    const { candidates, getCandidates, editCandidate } = context

    const [candidate, setCandidate] = useState({ id: '', ename: '', epartyname: '', eurl: '' })

    useEffect(() => {
        if (sessionStorage.getItem('admin token eVoting')) {
            getCandidates()
        }
        else {
            navigate('/adminlogin')
        }
        // eslint-disable-next-line
    }, [])

    const updateCandidate = (currentCandidate) => {
        ref.current.click()
        setCandidate({ id: currentCandidate._id, ename: currentCandidate.name, epartyname: currentCandidate.partyname, eurl: currentCandidate.url })
    }

    const handleClick = (e) => {
        editCandidate(candidate.id, candidate.ename, candidate.epartyname, candidate.eurl)
        refClose.current.click()
    }

    const onChange = (e) => {
        setCandidate({ ...candidate, [e.target.name]: e.target.value })
    }

    const ref = useRef('')
    const refClose = useRef('')

    return (
        <>
            <AddCandidate />

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Candidate</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="ename" className="form-label">Name</label>
                                    <input type="text" autoComplete='off' className="form-control" id="ename" name='ename' value={candidate.ename} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="epartyname" className="form-label">Party Name</label>
                                    <input type="text" autoComplete='off' className="form-control" id="epartyname" name='epartyname' value={candidate.epartyname} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eurl" className="form-label">Image URL</label>
                                    <input type="text" autoComplete='off' className="form-control" id="eurl" name='eurl' value={candidate.eurl} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
                            <button disabled={candidate.ename.length < 5 || candidate.epartyname.length < 5} type="button" className="btn btn-outline-success" onClick={handleClick}>Update Candidate</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>List of Candidates</h2>
                <div className="container">
                    {candidates.length === 0 && 'No Candidates to display'}
                </div>
                {candidates.map((candidate) => {
                    return <CandidateItem key={candidate._id} updateCandidate={updateCandidate} candidate={candidate} />
                })}
            </div>
        </>
    )
}

export default Candidates
