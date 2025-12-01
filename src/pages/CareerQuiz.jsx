import React, { useState } from 'react';
import Header from '../components/Header';
import './CareerQuiz.css';

const CareerQuiz = ({ onNavigate }) => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const careers = [
    { id: 1, name: 'Thương mại quốc tế', color: '#FF6B6B' },
    { id: 2, name: 'Tài chính - Ngân hàng - Đầu tư', color: '#4ECDC4' },
    { id: 3, name: 'Phân tích dữ liệu', color: '#95E1D3' },
    { id: 4, name: 'Ngoại giao & Hợp tác quốc tế', color: '#FFE66D' },
    { id: 5, name: 'Marketing', color: '#FF6BCB' },
    { id: 6, name: 'Chuỗi cung ứng & Logistics', color: '#A8E6CF' },
    { id: 7, name: 'Khởi nghiệp & Quản trị sáng tạo', color: '#FFD93D' }
  ];

  const quizData = {
    1: [ // Thương mại quốc tế
      {
        question: 'Bạn có hứng thú với việc tìm hiểu về các nền văn hóa và thị trường khác nhau trên thế giới không?',
        options: ['Rất hứng thú', 'Khá hứng thú', 'Ít hứng thú', 'Không hứng thú'],
        correctAnswer: 0
      },
      {
        question: 'Khả năng tiếng Anh của bạn ở mức nào?',
        options: ['Thành thạo, giao tiếp tốt', 'Khá tốt, có thể giao tiếp cơ bản', 'Trung bình', 'Yếu, cần cải thiện'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng đàm phán và thương lượng tốt không?',
        options: ['Rất tốt, tự tin đàm phán', 'Khá tốt', 'Trung bình', 'Chưa tốt lắm'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có hiểu biết về các quy định pháp luật thương mại quốc tế không?',
        options: ['Rất hiểu biết', 'Có hiểu biết cơ bản', 'Ít hiểu biết', 'Chưa hiểu biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có khả năng làm việc với nhiều bên liên quan (khách hàng, nhà cung cấp, đối tác) không?',
        options: ['Rất tốt, thích làm việc nhóm', 'Khá tốt', 'Trung bình', 'Thích làm việc độc lập'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng phân tích thị trường và xu hướng kinh doanh quốc tế không?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Cần cải thiện'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có sẵn sàng làm việc trong môi trường đa quốc gia không?',
        options: ['Rất sẵn sàng', 'Sẵn sàng', 'Cân nhắc', 'Chưa sẵn sàng'],
        correctAnswer: 0
      },
      {
        question: 'Khả năng quản lý thời gian và tổ chức công việc của bạn như thế nào?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Cần cải thiện'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có hiểu biết về logistics và vận chuyển quốc tế không?',
        options: ['Rất hiểu biết', 'Có kiến thức cơ bản', 'Ít hiểu biết', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng sử dụng các phần mềm văn phòng (Excel, Word, ERP) không?',
        options: ['Rất thành thạo', 'Khá thành thạo', 'Cơ bản', 'Chưa thành thạo'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có khả năng làm việc dưới áp lực và deadline gấp không?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Khó khăn'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có hiểu biết về các điều khoản thương mại quốc tế (Incoterms) không?',
        options: ['Rất hiểu', 'Có hiểu biết', 'Ít hiểu', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có khả năng xử lý các vấn đề phát sinh trong giao dịch XNK không?',
        options: ['Rất tốt, linh hoạt', 'Khá tốt', 'Trung bình', 'Cần hỗ trợ'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng lập và kiểm tra chứng từ xuất nhập khẩu không?',
        options: ['Thành thạo', 'Có kỹ năng cơ bản', 'Ít kinh nghiệm', 'Chưa có kinh nghiệm'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có mong muốn phát triển sự nghiệp trong lĩnh vực thương mại quốc tế không?',
        options: ['Rất mong muốn', 'Khá quan tâm', 'Cân nhắc', 'Chưa chắc chắn'],
        correctAnswer: 0
      }
    ],
    2: [ // Tài chính - Ngân hàng
      {
        question: 'Bạn có hứng thú với các con số và phân tích tài chính không?',
        options: ['Rất hứng thú', 'Khá hứng thú', 'Ít hứng thú', 'Không hứng thú'],
        correctAnswer: 0
      },
      {
        question: 'Khả năng làm việc với Excel và các công cụ phân tích tài chính của bạn như thế nào?',
        options: ['Thành thạo', 'Khá tốt', 'Cơ bản', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có hiểu biết về các sản phẩm tài chính (cổ phiếu, trái phiếu, quỹ đầu tư) không?',
        options: ['Rất hiểu biết', 'Có hiểu biết', 'Ít hiểu biết', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng phân tích báo cáo tài chính không?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Cần học thêm'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có khả năng đưa ra quyết định đầu tư dựa trên dữ liệu không?',
        options: ['Rất tự tin', 'Khá tự tin', 'Cần cân nhắc', 'Chưa tự tin'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có hiểu về quản trị rủi ro tài chính không?',
        options: ['Rất hiểu', 'Có hiểu biết cơ bản', 'Ít hiểu', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng tư vấn tài chính cho khách hàng không?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Cần rèn luyện'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có theo dõi tin tức thị trường tài chính thường xuyên không?',
        options: ['Rất thường xuyên', 'Thường xuyên', 'Thỉnh thoảng', 'Hiếm khi'],
        correctAnswer: 0
      },
      {
        question: 'Khả năng làm việc với áp lực cao trong môi trường tài chính của bạn như thế nào?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Khó khăn'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có hiểu biết về các quy định pháp luật tài chính - ngân hàng không?',
        options: ['Rất hiểu', 'Có hiểu biết', 'Ít hiểu', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng lập kế hoạch tài chính cá nhân/doanh nghiệp không?',
        options: ['Rất tốt', 'Khá tốt', 'Cơ bản', 'Chưa có'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có khả năng phân tích chỉ số tài chính (ROE, ROA, EPS) không?',
        options: ['Thành thạo', 'Khá tốt', 'Cơ bản', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng giao tiếp và xây dựng mối quan hệ với khách hàng không?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Cần cải thiện'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có hiểu về đầu tư chứng khoán và quản lý danh mục đầu tư không?',
        options: ['Rất hiểu', 'Có kiến thức', 'Ít hiểu', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có mong muốn làm việc trong lĩnh vực tài chính - ngân hàng không?',
        options: ['Rất mong muốn', 'Khá quan tâm', 'Cân nhắc', 'Chưa chắc'],
        correctAnswer: 0
      }
    ],
    // Thêm quiz cho các nghề còn lại...
    3: [ // Phân tích dữ liệu
      {
        question: 'Bạn có hứng thú với việc làm việc với dữ liệu và số liệu không?',
        options: ['Rất hứng thú', 'Khá hứng thú', 'Ít hứng thú', 'Không hứng thú'],
        correctAnswer: 0
      },
      {
        question: 'Kỹ năng lập trình của bạn (Python, R, SQL) ở mức nào?',
        options: ['Thành thạo', 'Khá tốt', 'Cơ bản', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có khả năng phân tích và diễn giải dữ liệu phức tạp không?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Cần học thêm'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng trực quan hóa dữ liệu (Tableau, Power BI) không?',
        options: ['Thành thạo', 'Khá tốt', 'Cơ bản', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có hiểu về thống kê và các phương pháp phân tích dữ liệu không?',
        options: ['Rất hiểu', 'Có hiểu biết', 'Ít hiểu', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có khả năng tìm insight từ dữ liệu thô không?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Khó khăn'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kinh nghiệm với Machine Learning hay AI không?',
        options: ['Có kinh nghiệm', 'Đã học qua', 'Ít kiến thức', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Khả năng làm việc với Big Data của bạn như thế nào?',
        options: ['Rất tốt', 'Khá tốt', 'Cơ bản', 'Chưa có'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng làm sạch và xử lý dữ liệu không?',
        options: ['Thành thạo', 'Khá tốt', 'Cơ bản', 'Chưa có'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có khả năng truyền đạt kết quả phân tích cho người không chuyên không?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Cần cải thiện'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có hiểu về business intelligence và analytics không?',
        options: ['Rất hiểu', 'Có hiểu biết', 'Ít hiểu', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có kỹ năng làm việc với database (SQL, NoSQL) không?',
        options: ['Thành thạo', 'Khá tốt', 'Cơ bản', 'Chưa biết'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có khả năng tư duy logic và giải quyết vấn đề không?',
        options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Cần rèn luyện'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có theo dõi xu hướng công nghệ Data Science không?',
        options: ['Rất thường xuyên', 'Thường xuyên', 'Thỉnh thoảng', 'Hiếm khi'],
        correctAnswer: 0
      },
      {
        question: 'Bạn có mong muốn làm Data Analyst/Data Scientist không?',
        options: ['Rất mong muốn', 'Khá quan tâm', 'Cân nhắc', 'Chưa chắc'],
        correctAnswer: 0
      }
    ]
  };

  const handleCareerSelect = (career) => {
    setSelectedCareer(career);
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setAnswers([...answers, selectedAnswer]);
      
      if (currentQuestion < quizData[selectedCareer.id].length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Kết thúc quiz
        const finalAnswers = [...answers, selectedAnswer];
        setAnswers(finalAnswers);
        setShowResult(true);
      }
    }
  };

  const calculateScore = () => {
    const questions = quizData[selectedCareer.id];
    let correctCount = 0;
    
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });
    
    return (correctCount / questions.length) * 100;
  };

  const getResultMessage = () => {
    const score = calculateScore();
    
    if (score >= 70) {
      return {
        title: '🎉 Chúc mừng!',
        message: `Bạn rất phù hợp với nghề ${selectedCareer.name}!`,
        detail: `Bạn đã trả lời đúng ${Math.round(score)}% câu hỏi. Bạn có đầy đủ kiến thức và kỹ năng cần thiết cho ngành nghề này.`,
        suggestion: 'Hãy tiếp tục phát triển và hoàn thiện kỹ năng của mình!',
        isPass: true
      };
    } else {
      return {
        title: '💪 Đừng nản lòng!',
        message: `Bạn cần cải thiện thêm để phù hợp với nghề ${selectedCareer.name}`,
        detail: `Bạn đã trả lời đúng ${Math.round(score)}% câu hỏi. Điểm số của bạn chưa đạt mức yêu cầu (70%).`,
        suggestion: 'Chúng tôi khuyên bạn nên:',
        isPass: false
      };
    }
  };

  const getLearningPath = () => {
    return [
      `Học các môn cơ bản về ${selectedCareer.name}`,
      'Tham gia các khóa học online và offline chuyên sâu',
      'Thực hành qua các dự án thực tế',
      'Tìm kiếm cơ hội thực tập tại các công ty',
      'Tham gia cộng đồng và networking trong ngành'
    ];
  };

  if (!selectedCareer) {
    return (
      <div className="career-quiz-page">
        <Header onNavigate={onNavigate} />
        
        <div className="quiz-content">
          <div className="quiz-intro">
            <h1 className="quiz-main-title">TRẮC NGHIỆM NGHỀ NGHIỆP</h1>
            <p className="quiz-subtitle">
              Chọn một nghề nghiệp để kiểm tra mức độ phù hợp của bạn. 
              Mỗi bài test có 15 câu hỏi, đạt từ 70% trở lên là phù hợp!
            </p>
          </div>

          <div className="careers-grid">
            {careers.map(career => (
              <div 
                key={career.id}
                className="career-card"
                onClick={() => handleCareerSelect(career)}
                style={{ borderColor: career.color }}
              >
                <div className="career-icon" style={{ background: career.color }}>
                  {career.id}
                </div>
                <h3 className="career-name">{career.name}</h3>
                <p className="career-questions">15 câu hỏi</p>
                <button className="start-btn" style={{ background: career.color }}>
                  Bắt đầu test
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="career-quiz-page">
        <Header onNavigate={onNavigate} />
        
        <div className="quiz-content">
          <div className="quiz-ready">
            <button className="back-btn" onClick={() => setSelectedCareer(null)}>
              ← Quay lại
            </button>
            
            <div className="ready-card" style={{ borderColor: selectedCareer.color }}>
              <div className="ready-icon" style={{ background: selectedCareer.color }}>
                {selectedCareer.id}
              </div>
              <h2 className="ready-title">{selectedCareer.name}</h2>
              <p className="ready-description">
                Bạn sẵn sàng kiểm tra kiến thức về {selectedCareer.name}? 
                Bài test gồm 15 câu hỏi, bạn cần đạt ít nhất 70% để vượt qua.
              </p>
              
              <div className="ready-info">
                <div className="info-item">
                  <span className="info-label">Số câu hỏi:</span>
                  <span className="info-value">15 câu</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Thời gian:</span>
                  <span className="info-value">Không giới hạn</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Điểm đạt:</span>
                  <span className="info-value">≥ 70%</span>
                </div>
              </div>
              
              <button 
                className="start-quiz-btn" 
                onClick={handleStartQuiz}
                style={{ background: selectedCareer.color }}
              >
                Bắt đầu ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const result = getResultMessage();
    const learningPath = getLearningPath();
    
    return (
      <div className="career-quiz-page">
        <Header onNavigate={onNavigate} />
        
        <div className="quiz-content">
          <div className="result-section">
            <div className={`result-card ${result.isPass ? 'pass' : 'fail'}`}>
              <h2 className="result-title">{result.title}</h2>
              <div className="score-circle" style={{ borderColor: selectedCareer.color }}>
                <span className="score-value">{Math.round(calculateScore())}%</span>
              </div>
              <h3 className="result-message">{result.message}</h3>
              <p className="result-detail">{result.detail}</p>
              
              {!result.isPass && (
                <div className="learning-path">
                  <h4 className="learning-title">{result.suggestion}</h4>
                  <ul className="learning-list">
                    {learningPath.map((step, index) => (
                      <li key={index} className="learning-item">
                        <span className="step-number">{index + 1}</span>
                        <span className="step-text">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="result-actions">
                <button 
                  className="retry-btn"
                  onClick={() => {
                    setQuizStarted(false);
                    setCurrentQuestion(0);
                    setAnswers([]);
                    setSelectedAnswer(null);
                    setShowResult(false);
                  }}
                  style={{ background: selectedCareer.color }}
                >
                  Làm lại
                </button>
                <button 
                  className="choose-another-btn"
                  onClick={() => setSelectedCareer(null)}
                >
                  Chọn nghề khác
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quizData[selectedCareer.id][currentQuestion];
  const progress = ((currentQuestion + 1) / quizData[selectedCareer.id].length) * 100;

  return (
    <div className="career-quiz-page">
      <Header onNavigate={onNavigate} />
      
      <div className="quiz-content">
        <div className="quiz-container">
          <div className="quiz-header">
            <button className="back-btn" onClick={() => setSelectedCareer(null)}>
              ← Quay lại
            </button>
            <div className="quiz-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%`, background: selectedCareer.color }}
                />
              </div>
              <span className="progress-text">
                Câu {currentQuestion + 1}/{quizData[selectedCareer.id].length}
              </span>
            </div>
          </div>

          <div className="question-card">
            <h3 className="question-text">{currentQ.question}</h3>
            
            <div className="options-list">
              {currentQ.options.map((option, index) => (
                <div
                  key={index}
                  className={`option-item ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                  style={selectedAnswer === index ? { borderColor: selectedCareer.color, background: `${selectedCareer.color}20` } : {}}
                >
                  <div className="option-radio" style={selectedAnswer === index ? { background: selectedCareer.color } : {}}>
                    {selectedAnswer === index && <span className="radio-dot"></span>}
                  </div>
                  <span className="option-text">{option}</span>
                </div>
              ))}
            </div>

            <button
              className="next-btn"
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              style={selectedAnswer !== null ? { background: selectedCareer.color } : {}}
            >
              {currentQuestion < quizData[selectedCareer.id].length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;
