import React from 'react';
import Header from '../components/Header';
import './CareerWorld.css';

const CareerWorld = ({ onNavigate }) => {
  const careers = [
    {
      id: 1,
      title: 'THƯƠNG MẠI\nQUỐC TẾ',
      position: { top: '15%', left: '10%' },
      image: '🏝️'
    },
    {
      id: 2,
      title: 'TÀI CHÍNH -\nNGÂN HÀNG - ĐẦU TƯ',
      position: { top: '35%', left: '25%' },
      image: '💰'
    },
    {
      id: 3,
      title: 'PHÂN TÍCH\nDỮ LIỆU',
      position: { top: '20%', left: '45%' },
      image: '📊'
    },
    {
      id: 4,
      title: 'NGOẠI GIAO &\nHỢP TÁC QUỐC TẾ',
      position: { top: '15%', right: '10%' },
      image: '🌍'
    },
    {
      id: 5,
      title: 'MARKETING',
      position: { top: '55%', left: '15%' },
      image: '📱'
    },
    {
      id: 6,
      title: 'CHUỖI CUNG ỨNG\nLOGISTICS',
      position: { top: '60%', left: '42%' },
      image: '🚚'
    },
    {
      id: 7,
      title: 'KHỞI NGHIỆP &\nQUẢN TRỊ SÁNG TẠO',
      position: { top: '55%', right: '12%' },
      image: '💡'
    }
  ];

  return (
    <div className="career-world-page">
      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Main Content - Map với các đảo */}
      <div className="career-map-section">
        <h1 className="career-title">THẾ GIỚI NGHỀ</h1>
        <p className="career-intro">
          Econowres mang đến hành trình khám phá nghề nghiệp qua 7 "thế giới" gồm: <strong>Thương mại quốc tế, Marketing, Tài chính - Ngân hàng - Đầu tư, Chuỗi cung ứng & Logistics, Phân tích dữ liệu, Ngoại giao & Hợp tác quốc tế,</strong> và <strong>Khởi nghiệp – Quản trị sáng tạo.</strong> Người dùng nhập vai vào các nghề thực tế và thực hiện nhiệm vụ mô phỏng, từ đó hiểu đặc thù từng lĩnh vực và xác định hướng đi phù hợp.
        </p>
        
        <div className="career-map">
          {careers.map((career) => (
            <div 
              key={career.id} 
              className="career-island"
              style={{
                top: career.position.top,
                left: career.position.left,
                right: career.position.right
              }}
            >
              <div className="island-content">
                <div className="island-image">{career.image}</div>
                <div className="island-title">{career.title}</div>
                <button 
                  className="try-career-btn"
                  onClick={() => onNavigate('gameplay', { careerId: career.id, careerName: career.title })}
                >
                  Trải nghiệm nghề này
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="career-footer">
        <div className="career-footer-container">
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

export default CareerWorld;
