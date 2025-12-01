import React from 'react';
import './ContentSection.css';

const ContentSection = ({ onNavigate }) => {
  return (
    <section className="content-section">
      <div className="content-container">
        <h2 className="content-title">
          <span className="highlight">Econoverse</span> mang đến cho bạn:
        </h2>
        
        <div className="content-grid">
          <div className="content-item">
            <div className="content-image-placeholder">
              {/* Placeholder for image */}
              <div className="image-box">📊</div>
            </div>
            <div className="content-text">
              <p>
                Thư viện nghề toàn diện: Bao gồm hàng trăm ngành nghề với các thông tin chi tiết về 
                trách nhiệm, yêu cầu kỹ năng, thu nhập và triển vọng nghề nghiệp trong tương lai để bạn 
                có thể lựa chọn phù hợp với chính mình.
              </p>
            </div>
          </div>

          <div className="content-item reverse">
            <div className="content-text">
              <p>
                Bộ câu hỏi tư vấn nghề nghiệp độc đáo: Hỗ trợ bạn xác định nghề phù hợp nhất, 
                kết hợp giữa sở thích và khả năng của bạn để tạo một lộ trình nghề nghiệp hiệu quả.
              </p>
            </div>
            <div className="content-image-placeholder">
              <div className="image-box">🎯</div>
            </div>
          </div>
        </div>

        <div className="cta-buttons-group">
          <button className="cta-button discover-btn" onClick={() => onNavigate && onNavigate('video-intro')}>
            🌍 KHÁM PHÁ THẾ GIỚI NGHỀ NGHIỆP
          </button>
          <button className="cta-button">BẮT ĐẦU NGAY</button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
