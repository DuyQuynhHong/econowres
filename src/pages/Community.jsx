import React, { useState } from 'react';
import Header from '../components/Header';
import './Community.css';

const Community = ({ onNavigate }) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleOpenFeedback = () => {
    setShowFeedbackModal(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedbackModal(false);
    setFeedbackData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    // TODO: Send feedback to backend
    console.log('Feedback submitted:', feedbackData);
    alert('Cảm ơn bạn đã gửi feedback! Chúng tôi sẽ xem xét và phản hồi sớm nhất.');
    handleCloseFeedback();
  };

  return (
    <div className="community-page">
      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="community-content">
        <h1 className="community-title">CỘNG ĐỒNG</h1>

        <div className="community-sections">
          {/* Facebook Group Section */}
          <div className="community-section facebook-section">
            <div className="section-image">
              <div className="facebook-illustration">
                <div className="illustration-content">
                  <div className="econoverse-logo">Econoverse</div>
                  <div className="people-illustration">
                    <div className="person person-1">👨‍💼</div>
                    <div className="person person-2">👩‍💼</div>
                    <div className="person person-3">👨‍🎓</div>
                  </div>
                  <div className="chart-icon">📊</div>
                  <div className="speech-bubbles">
                    <div className="bubble bubble-1">💬</div>
                    <div className="bubble bubble-2">💬</div>
                  </div>
                  <div className="mic-icon">🎤</div>
                </div>
              </div>
            </div>
            <div className="section-content">
              <h2 className="section-title">
                GROUP FACEBOOK<br/>ECONOVERSE
              </h2>
              <p className="section-description">
                Một cộng đồng học sinh viên, mentor và cựu sinh viên tràng tràn với kinh tế cùng 
                trào đổi, chia sẻ kinh nghiệm học tập - nghề nghiệp. Tại đây, người dùng có thể đặt 
                câu hỏi, nhận lời khuyên từ cộng đồng, tham gia các buổi thảo luận, sự kiện và chia sẻ 
                động hướng nghiệp của mỗi tổng Đây là không gian kết nối học hỏi và người học 
                định hướng và hành và hành nghiệp cùa mình.
              </p>
              <button className="cta-btn facebook-btn">
                THAM GIA NGAY
              </button>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="community-section feedback-section">
            <div className="section-content">
              <h2 className="section-title">
                ĐÓNG GÓP Ý KIẾN
              </h2>
              <p className="section-description">
                Trong quá trình xây dựng, phát triển trang web, Econowerse vẫn cần nhiều điều cần 
                cải thiện. Chúng tôi hi vọng có thể nhận được những góp ý của các bạn để ngày 
                càng hoàn thiện hơn.
              </p>
              <button className="cta-btn feedback-btn" onClick={handleOpenFeedback}>
                FEEDBACK TẠI ĐÂY
              </button>
            </div>
            <div className="section-image">
              <div className="feedback-illustration">
                <div className="puzzle-piece puzzle-red">🧩</div>
                <div className="puzzle-piece puzzle-blue">🧩</div>
                <div className="puzzle-piece puzzle-yellow">🧩</div>
                <div className="puzzle-piece puzzle-pink">🧩</div>
                <div className="person-feedback person-1">👨</div>
                <div className="person-feedback person-2">👩</div>
                <div className="lightbulb-icon">💡</div>
                <div className="plant-icon">🌱</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="community-footer">
        <div className="community-footer-container">
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
            <p>Trường Đại học Ngoại thương 91 phố Chùa Láng, Đống Đa, Hà Nội, Việt Nam</p>
            <p>Thứ hai - Thứ sáu</p>
            <p>8:00 - 17:00</p>
          </div>
          
          <div className="footer-section">
            <h3>VỀ CHÚNG TÔI</h3>
            <p>Fanpage</p>
            <p>Email</p>
            <p>SĐT</p>
          </div>
        </div>
      </footer>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="modal-overlay" onClick={handleCloseFeedback}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseFeedback}>&times;</button>
            <h2 className="modal-title">Gửi Feedback</h2>
            <form className="feedback-form" onSubmit={handleSubmitFeedback}>
              <div className="form-group">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={feedbackData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={feedbackData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="example@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Chủ đề</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={feedbackData.subject}
                  onChange={handleInputChange}
                  placeholder="Chủ đề feedback của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Nội dung *</label>
                <textarea
                  id="message"
                  name="message"
                  value={feedbackData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Chia sẻ ý kiến, góp ý của bạn về Econoverse..."
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={handleCloseFeedback}>
                  Hủy
                </button>
                <button type="submit" className="btn-submit">
                  Gửi Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
