import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Statistics from './components/Statistics';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CareerWorld from './pages/CareerWorld';
import Community from './pages/Community';
import Profile from './pages/Profile';
import VideoIntro from './pages/VideoIntro';
import Gameplay from './pages/Gameplay';
import CourseSuggestion from './pages/CourseSuggestion';
import CareerQuiz from './pages/CareerQuiz';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageData, setPageData] = useState(null);
  const [userUpdated, setUserUpdated] = useState(0); // Force re-render

  const handleNavigate = (page, data = null) => {
    setCurrentPage(page);
    setPageData(data);
    setUserUpdated(prev => prev + 1); // Trigger Header re-render
    window.scrollTo(0, 0);
  };

  if (currentPage === 'login') {
    return (
      <>
        <div className="fixed-logo" onClick={() => handleNavigate('home')}>
          <div className="fixed-logo-circle">
            <span className="fixed-logo-text">E</span>
          </div>
        </div>
        <Login onNavigate={handleNavigate} />
      </>
    );
  }

  if (currentPage === 'signup') {
    return (
      <>
        <div className="fixed-logo" onClick={() => handleNavigate('home')}>
          <div className="fixed-logo-circle">
            <span className="fixed-logo-text">E</span>
          </div>
        </div>
        <SignUp onNavigate={handleNavigate} />
      </>
    );
  }

  if (currentPage === 'career') {
    return (
      <>
        <div className="fixed-logo" onClick={() => handleNavigate('home')}>
          <div className="fixed-logo-circle">
            <span className="fixed-logo-text">E</span>
          </div>
        </div>
        <CareerWorld onNavigate={handleNavigate} />
      </>
    );
  }

  if (currentPage === 'community') {
    return (
      <>
        <div className="fixed-logo" onClick={() => handleNavigate('home')}>
          <div className="fixed-logo-circle">
            <span className="fixed-logo-text">E</span>
          </div>
        </div>
        <Community onNavigate={handleNavigate} />
      </>
    );
  }

  if (currentPage === 'profile') {
    return (
      <>
        <div className="fixed-logo" onClick={() => handleNavigate('home')}>
          <div className="fixed-logo-circle">
            <span className="fixed-logo-text">E</span>
          </div>
        </div>
        <Profile onNavigate={handleNavigate} />
      </>
    );
  }

  if (currentPage === 'video-intro') {
    return (
      <>
        <div className="fixed-logo" onClick={() => handleNavigate('home')}>
          <div className="fixed-logo-circle">
            <span className="fixed-logo-text">E</span>
          </div>
        </div>
        <VideoIntro onNavigate={handleNavigate} />
      </>
    );
  }

  if (currentPage === 'gameplay') {
    return (
      <>
        <div className="fixed-logo" onClick={() => handleNavigate('home')}>
          <div className="fixed-logo-circle">
            <span className="fixed-logo-text">E</span>
          </div>
        </div>
        <Gameplay onNavigate={handleNavigate} careerData={pageData} />
      </>
    );
  }

  if (currentPage === 'courses') {
    return (
      <>
        <div className="fixed-logo" onClick={() => handleNavigate('home')}>
          <div className="fixed-logo-circle">
            <span className="fixed-logo-text">E</span>
          </div>
        </div>
        <CourseSuggestion onNavigate={handleNavigate} />
      </>
    );
  }

  if (currentPage === 'quiz') {
    return (
      <>
        <div className="fixed-logo" onClick={() => handleNavigate('home')}>
          <div className="fixed-logo-circle">
            <span className="fixed-logo-text">E</span>
          </div>
        </div>
        <CareerQuiz onNavigate={handleNavigate} />
      </>
    );
  }

  return (
    <div className="App">
      {/* Fixed Logo */}
      <div className="fixed-logo" onClick={() => handleNavigate('home')}>
        <div className="fixed-logo-circle">
          <span className="fixed-logo-text">E</span>
        </div>
      </div>

      <Header onNavigate={handleNavigate} key={userUpdated} />
      <HeroSection />
      <Statistics />
      <ContentSection onNavigate={handleNavigate} />
      <Footer />
    </div>
  );
}

export default App;
