import React from 'react';
import { Link } from 'react-router-dom';

const Abc = () => {
    return (
        <div id="elContent" className="flex justify-center items-center min-h-screen">
            <div className="container my-5">
                <div className="row text-center justify-center">
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4 ml-4 md:ml-10"> 
                        <Link to="https://www.nvsp.in/" target="_blank" rel="noopener noreferrer" className="card h-100 shadow-sm text-decoration-none">
                            <div className="card-body">
                                <img src="/img/voter-services-icon.png" className="img-fluid mb-3" alt="Voter Services" title="Voter Services" />
                                <h6 className="card-title text-dark">Voter Services</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <Link to="https://www.eci.gov.in/voter-education" target="_blank" className="card h-100 shadow-sm text-decoration-none">
                            <div className="card-body">
                                <img src="/img/voter-education-icon.png" className="img-fluid mb-3" alt="Voter Education" title="Voter Education" />
                                <h6 className="card-title text-dark">Voter Education</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <Link to="https://www.eci.gov.in/election-management" target="_blank" className="card h-100 shadow-sm text-decoration-none">
                            <div className="card-body">
                                <img src="/img/election-icon.png" className="img-fluid mb-3" alt="Elections" title="Elections" />
                                <h6 className="card-title text-dark">Elections</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <Link to="https://www.eci.gov.in/candidate-politicalparty" target="_blank" className="card h-100 shadow-sm text-decoration-none">
                            <div className="card-body">
                                <img src="/img/political-party-icon.png" className="img-fluid mb-3" alt="Candidate/Political Party" title="Candidate/Political Party" />
                                <h6 className="card-title text-dark">Candidate/Political Party</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <Link to="https://www.eci.gov.in/eci-publication" target="_blank" className="card h-100 shadow-sm text-decoration-none">
                            <div className="card-body">
                                <img src="/img/publication-icon.png" className="img-fluid mb-3" alt="Publications" title="Publications" />
                                <h6 className="card-title text-dark">Publications</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <Link to="https://www.eci.gov.in/ict-app" target="_blank" className="card h-100 shadow-sm text-decoration-none">
                            <div className="card-body">
                                <img src="/img/ict-apps-icon.png" className="img-fluid mb-3" alt="ICT APPS" title="ICT APPS" />
                                <h6 className="card-title text-dark">ICT APPS</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abc;
