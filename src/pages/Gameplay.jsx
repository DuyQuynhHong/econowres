import React, { useState } from 'react';
import Header from '../components/Header';
import { careersGameplayData } from '../data/gameplayData';
import './Gameplay.css';

const Gameplay = ({ onNavigate, careerData }) => {
  const [currentMission, setCurrentMission] = useState(0);
  const [showGuidance, setShowGuidance] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Lấy dữ liệu dựa trên careerId được truyền vào
  const gameplayData = careersGameplayData[careerData?.careerId || 1];
  
  if (!gameplayData) {
    return <div>Dữ liệu không tồn tại</div>;
  }

  const mission = gameplayData.missions[currentMission];
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const handleNextMission = () => {
    if (currentMission < gameplayData.missions.length - 1) {
      setCurrentMission(currentMission + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowGuidance(true);
    } else {
      alert('Chúc mừng! Bạn đã hoàn thành tất cả nhiệm vụ!');
      onNavigate('career');
    }
  };

  return (
    <div className="gameplay-page">
      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="gameplay-content">
        {/* Back Button & Career Title */}
        <div className="career-header-section">
          <button className="back-btn" onClick={() => onNavigate('career')}>
            ← QUAY LẠI
          </button>
          <h1 className="career-name">{gameplayData.careerName}</h1>
        </div>

        {/* Jobs in Career */}
        <div className="jobs-section">
          <h2 className="section-subtitle">Các nghề trong ngành:</h2>
          <div className="jobs-grid">
            {gameplayData.jobs.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-icon">❓</div>
                <p className="job-name">{job}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Preview */}
        <div className="mission-preview">
          <h2 className="section-subtitle">Trải nghiệm nghề:</h2>
          <div className="preview-card">
            <div className="preview-icon">💼</div>
            <p className="preview-text">{mission.context}</p>
            <button className="start-mission-btn" onClick={() => setShowGuidance(false)}>
              BẮT ĐẦU
            </button>
          </div>
        </div>

        {/* Mission Details (shown after clicking start) */}
        {!showGuidance && (
          <div className="mission-details">
            {/* Progress Bar */}
            <div className="mission-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${((currentMission + 1) / gameplayData.missions.length) * 100}%` }}></div>
              </div>
              <span className="mission-label">{mission.title}</span>
            </div>

            {/* Question Section */}
            <div className="question-section">
              <h3 className="question-title">{mission.question.question}</h3>
              <div className="options-grid">
                {mission.question.options.map((option, index) => (
                  <button 
                    key={index}
                    className={`option-btn ${
                      selectedAnswer === index 
                        ? (mission.question.correctAnswer === index ? 'correct' : 'incorrect')
                        : ''
                    } ${
                      showResult && mission.question.correctAnswer === index
                        ? 'correct-highlight'
                        : ''
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="option-label">{String.fromCharCode(65 + index)}.</span>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>
              
              {/* Show result feedback */}
              {showResult && (
                <div className={`result-feedback ${selectedAnswer === mission.question.correctAnswer ? 'correct-feedback' : 'incorrect-feedback'}`}>
                  <p className="result-icon">{selectedAnswer === mission.question.correctAnswer ? '✓' : '✗'}</p>
                  <p className="result-text">
                    {selectedAnswer === mission.question.correctAnswer ? 'Chính xác!' : 'Chưa chính xác!'}
                  </p>
                  <p className="result-explanation">{mission.question.explanation}</p>
                </div>
              )}
            </div>

            {/* Guidance Section - shown after answering */}
            {showResult && (
              <div className="guidance-section">
                <div className="guidance-header">
                  <div className="guidance-indicator"></div>
                  <h3>{mission.guidance.title}</h3>
                </div>
                <p className="guidance-content">{mission.guidance.content}</p>
                <button className="continue-btn" onClick={handleNextMission}>
                  {currentMission < gameplayData.missions.length - 1 ? 'NHIỆM VỤ TIẾP THEO' : 'HOÀN THÀNH'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="gameplay-footer">
        <div className="gameplay-footer-container">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-text">Econowres</span>
            </div>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi
            </p>
          </div>
          
          <div className="footer-section">
            <h3>LIÊN HỆ</h3>
            <p>Trường Đại học Ngoại thương</p>
            <p>91 phố Chùa Láng, Đống Đa, Hà Nội</p>
            <p>Thứ hai - Thứ sáu: 8:00 - 17:00</p>
          </div>
          
          <div className="footer-section">
            <h3>VỀ CHÚNG TÔI</h3>
            <p>Fanpage</p>
            <p>Email</p>
            <p>SĐT</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gameplay;
