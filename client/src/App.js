import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandidateState from './context/candidates/CandidateState';
import UserLogin from './components/UserLogin';
import CastVote from './components/CastVote';
import UserSignUp from './components/UserSignUp';
import AdminLogin from './components/AdminLogin';
import NotFoundPage from './components/NotFoundPage';
import Candidates from './components/Candidates';
import FinalPage from './components/FinalPage';
import Demo from './components/Demo';
import Carousel from './components/Carousel';
import Abc from './components/Abc';
import { useEffect, useState } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileDevices = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileDevices.test(userAgent));
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>This site is only accessible from a desktop or laptop.</h1>
      </div>
    );
  }
  return (
    <CandidateState>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<><Carousel /><UserLogin /><Abc /></>} />
            <Route exact path='/login' element={<><Carousel /><UserLogin /><Abc /></>} />
            <Route exact path='/signup' element={<><Carousel /><UserSignUp /><Abc /></>} />
            <Route exact path='/castvote' element={<CastVote />} />
            <Route exact path='/demo' element={<Demo />} />
            <Route exact path='/adminlogin' element={<><Carousel /><AdminLogin /><Abc /></>} />
            <Route exact path='/addcandidate' element={<Candidates />} />
            <Route exact path='/thanks-for-voting' element={<FinalPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </CandidateState>
  );
}

export default App;
