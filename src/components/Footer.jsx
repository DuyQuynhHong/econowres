import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="footer-logo-text">Econowres</span>
          </div>
          <h3>LIÊN HỆ</h3>
          <p>Email: contact@econowres.com</p>
          <p>Phone: +84 123 456 789</p>
          <p>Address: Hà Nội, Việt Nam</p>
        </div>
        
        <div className="footer-section">
          <h3>VỀ CHÚNG TÔI</h3>
          <p>
            Econowres là nền tảng hướng nghiệp hàng đầu, 
            giúp sinh viên khám phá và định hướng nghề nghiệp phù hợp.
          </p>
          <p>© 2025 Econowres. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
