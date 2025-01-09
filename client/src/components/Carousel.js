import React from 'react';

const Carousel = () => {
    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                    <div className="text-center">
                        <h1 className="mb-4">e-Voting Platform</h1>
                        <p className="lead">
                            Our e-Voting platform provides a secure, transparent, and efficient way to conduct elections online.
                            Empowering voters to cast their ballots from anywhere, while ensuring data security and integrity.
                        </p>
                        <p>
                            With this system, both administrators and voters can engage in seamless election management, 
                            ensuring every vote counts in a fair and democratic process.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;
