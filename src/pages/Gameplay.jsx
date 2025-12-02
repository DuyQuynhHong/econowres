import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CourseList from '../components/CourseList';
import careersGameplayDataNew from '../data/gameplayDataNew';
import { parseCourseData, getCourses } from '../utils/courseParser';
import './Gameplay.css';

const Gameplay = ({ onNavigate, careerData }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentMission, setCurrentMission] = useState(0);
  const [showGuidance, setShowGuidance] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [selectedJobCourses, setSelectedJobCourses] = useState(null);

  // Load course data
  useEffect(() => {
    const loadCourseData = async () => {
      try {
        const response = await fetch('/courses.txt');
        const text = await response.text();
        const parsed = parseCourseData(text);
        setCourseData(parsed);
      } catch (error) {
        console.error('Error loading course data:', error);
      }
    };
    loadCourseData();
  }, []);

  // Lấy dữ liệu dựa trên careerId được truyền vào
  const gameplayData = careersGameplayDataNew[careerData?.careerId || 1];
  
  if (!gameplayData) {
    return <div>Dữ liệu không tồn tại</div>;
  }

  const currentJobData = selectedJob !== null ? gameplayData.jobs[selectedJob] : null;
  const mission = currentJobData ? currentJobData.missions[currentMission] : null;

  const handleJobSelect = (jobIndex) => {
    setSelectedJob(jobIndex);
    setCurrentMission(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowGuidance(true);
  };

  const handleShowCourses = () => {
    if (courseData && careerData) {
      const courses = getCourses(courseData, careerData.careerId.toString(), (selectedJob + 1).toString());
      setSelectedJobCourses(courses);
      setShowCourses(true);
    }
  };

  const handleCloseCourses = () => {
    setShowCourses(false);
    setSelectedJobCourses(null);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
    setCurrentMission(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowGuidance(true);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const handleNextMission = () => {
    if (currentMission < currentJobData.missions.length - 1) {
      setCurrentMission(currentMission + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowGuidance(true);
    } else {
      alert('Chúc mừng! Bạn đã hoàn thành tất cả nhiệm vụ của nghề này!');
      handleBackToJobs();
    }
  };

  return (
    <div className="gameplay-page">
      <Header onNavigate={onNavigate} />

      <div className="gameplay-content">
        <div className="career-header-section">
          <button className="back-btn" onClick={() => onNavigate('career')}>
            &larr; QUAY LẠI
          </button>
          <h1 className="career-name">{gameplayData.careerName}</h1>
        </div>

        <div className="career-description">
          <p>{gameplayData.description}</p>
          <div className="career-stats">
            <span>&#128202; {gameplayData.totalJobs} nghề nghiệp</span>
            <span>&#127919; {gameplayData.totalMissions} nhiệm vụ</span>
            <span>&#127942; {gameplayData.badge}</span>
          </div>
        </div>

        {selectedJob === null ? (
          <div className="jobs-section">
            <h2 className="section-subtitle">Chọn nghề để trải nghiệm:</h2>
            <div className="jobs-grid">
              {gameplayData.jobs.map((job, index) => (
                <div 
                  key={index} 
                  className="job-card" 
                  onClick={() => handleJobSelect(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="job-icon">&#128188;</div>
                  <h3 className="job-name">{job.name}</h3>
                  <p className="job-description">{job.description}</p>
                  <button className="start-job-btn">Bắt đầu &rarr;</button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="job-info-section">
              <button className="back-to-jobs-btn" onClick={handleBackToJobs}>
                &larr; Quay lại danh sách nghề
              </button>
              <div className="job-detail">
                <h2>{currentJobData.name}</h2>
                <p className="job-context">{currentJobData.context}</p>
                <button className="view-courses-btn" onClick={handleShowCourses}>
                  &#128218; Xem danh sách môn học
                </button>
              </div>
            </div>

            {showGuidance && (
              <div className="mission-preview">
                <h2 className="section-subtitle">Nhiệm vụ {currentMission + 1}/{currentJobData.missions.length}</h2>
                <div className="preview-card">
                  <div className="preview-icon">&#127919;</div>
                  <h3>{mission.title}</h3>
                  {mission.context && <p className="preview-text">{mission.context}</p>}
                  <button className="start-mission-btn" onClick={() => setShowGuidance(false)}>
                    BẮT ĐẦU NHIỆM VỤ
                  </button>
                </div>
              </div>
            )}

            {!showGuidance && mission && (
              <div className="mission-details">
                <div className="mission-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${((currentMission + 1) / currentJobData.missions.length) * 100}%` }}></div>
                  </div>
                  <span className="mission-label">{mission.title} ({currentMission + 1}/{currentJobData.missions.length})</span>
                </div>

                {mission.data && (
                  <div className="mission-data-section">
                    <h4>Dữ liệu:</h4>
                    <div className="mission-data-content">
                      {mission.data.headers && mission.data.rows ? (
                        <table className="data-table">
                          <thead>
                            <tr>
                              {mission.data.headers.map((header, index) => (
                                <th key={index}>{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {mission.data.rows.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : typeof mission.data === 'string' ? (
                        <p>{mission.data}</p>
                      ) : (
                        <pre>{JSON.stringify(mission.data, null, 2)}</pre>
                      )}
                    </div>
                  </div>
                )}

                <div className="question-section">
                  <h3 className="question-title">{mission.question}</h3>
                  
                  {mission.options && mission.options.length > 0 ? (
                    <div className="options-grid">
                      {mission.options.map((option, index) => (
                        <button 
                          key={index}
                          className={`option-btn ${
                            selectedAnswer === index 
                              ? (mission.correctAnswer === index ? 'correct' : 'incorrect')
                              : ''
                          } ${
                            showResult && mission.correctAnswer === index
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
                  ) : (
                    <div className="input-answer-section">
                      <input 
                        type="text" 
                        placeholder="Nhập câu trả lời của bạn..."
                        className="answer-input"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const userAnswer = e.target.value.trim();
                            const isCorrect = userAnswer.toLowerCase() === mission.correctAnswer.toLowerCase();
                            setSelectedAnswer(isCorrect ? 'correct' : 'incorrect');
                            setShowResult(true);
                          }
                        }}
                        disabled={selectedAnswer !== null}
                      />
                      <button 
                        className="submit-answer-btn"
                        onClick={(e) => {
                          const input = e.target.previousSibling;
                          const userAnswer = input.value.trim();
                          const isCorrect = userAnswer.toLowerCase() === mission.correctAnswer.toLowerCase();
                          setSelectedAnswer(isCorrect ? 'correct' : 'incorrect');
                          setShowResult(true);
                        }}
                        disabled={selectedAnswer !== null}
                      >
                        Xác nhận
                      </button>
                    </div>
                  )}
                  
                  {showResult && (
                    <div className={`result-feedback ${
                      (mission.options ? selectedAnswer === mission.correctAnswer : selectedAnswer === 'correct') 
                        ? 'correct-feedback' 
                        : 'incorrect-feedback'
                    }`}>
                      <p className="result-icon">
                        {(mission.options ? selectedAnswer === mission.correctAnswer : selectedAnswer === 'correct') ? '✓' : '✗'}
                      </p>
                      <p className="result-text">
                        {(mission.options ? selectedAnswer === mission.correctAnswer : selectedAnswer === 'correct') 
                          ? 'Chính xác!' 
                          : `Chưa chính xác! Đáp án đúng: ${mission.correctAnswer}`}
                      </p>
                      <p className="result-explanation">{mission.explanation}</p>
                      <button className="continue-btn" onClick={handleNextMission}>
                        {currentMission < currentJobData.missions.length - 1 ? 'NHIỆM VỤ TIẾP THEO &rarr;' : 'HOÀN THÀNH ✓'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {showCourses && (
        <CourseList 
          courses={selectedJobCourses} 
          onClose={handleCloseCourses}
        />
      )}

      <footer className="gameplay-footer">
        <div className="gameplay-footer-container">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-text">Econoverse</span>
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
