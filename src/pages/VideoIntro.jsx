import React from 'react';
import './VideoIntro.css';

const VideoIntro = ({ onNavigate }) => {
  return (
    <div className="video-intro-page">
      {/* Header */}
      <header className="video-header">
        <div className="video-header-container">
          <div className="logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <span className="logo-text">Econoverse</span>
          </div>
          <nav className="nav">
            <a onClick={() => onNavigate('home')} className="nav-link">TRANG CHỦ</a>
            <a onClick={() => onNavigate('career')} className="nav-link">THẾ GIỚI NGHỀ</a>
            <a onClick={() => onNavigate('community')} className="nav-link">CỘNG ĐỒNG</a>
            <a onClick={() => onNavigate('login')} className="nav-link">ĐĂNG NHẬP</a>
          </nav>
        </div>
      </header>

      {/* Video Section */}
      <div className="video-content">
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              className="intro-video"
              src="https://www.youtube.com/embed/dVTNmSmUo14"
              title="Video giới thiệu Econoverse"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="video-title">
            Khởi đầu hành trình nghề nghiệp của bạn
          </h1>

          <p className="video-description">
            Econoverse sẽ đồng hành cùng bạn trong hành trình khám phá và phát triển sự nghiệp. 
            Hãy bắt đầu ngay hôm nay để tìm ra con đường phù hợp nhất với bản thân!
          </p>

          <button className="start-btn" onClick={() => onNavigate('career')}>
            BẮT ĐẦU NGAY
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="video-footer">
        <div className="video-footer-container">
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
    </div>
  );
};

export default VideoIntro;
