import React, { useState } from 'react';
import { authAPI } from '../services/api';
import './SignUp.css';

const SignUp = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await authAPI.register(formData);
      localStorage.setItem('user', JSON.stringify(data.user));
      onNavigate('profile');
    } catch (err) {
      setError(err.response?.data?.message || 'Đăng ký thất bại');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider}`);
  };

  return (
    <div className="auth-page">
      <header className="auth-header">
        <div className="auth-header-container">
          <div className="logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <span className="logo-text">Econowres</span>
          </div>
          <nav className="nav">
            <a onClick={() => onNavigate('home')} className="nav-link">TRANG CHỦ</a>
            <a onClick={() => onNavigate('career')} className="nav-link">THẾ GIỚI NGHỀ</a>
            <a onClick={() => onNavigate('community')} className="nav-link">CỘNG ĐỒNG</a>
            <a onClick={() => onNavigate('login')} className="nav-link active">ĐĂNG NHẬP</a>
          </nav>
        </div>
      </header>

      <div className="auth-content">
        <div className="auth-form-container">
          <h2 className="auth-title">ĐĂNG KÝ</h2>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              value={formData.fullName}
              onChange={handleChange}
              className="auth-input"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="auth-input"
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              className="auth-input"
            />
            
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleChange}
              className="auth-input"
            />
            
            <div className="auth-divider">
              <span>hoặc tiếp tục với</span>
            </div>
            
            <div className="social-login">
              <button 
                type="button" 
                className="social-btn facebook-btn"
                onClick={() => handleSocialSignUp('Facebook')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
              
              <button 
                type="button" 
                className="social-btn google-btn"
                onClick={() => handleSocialSignUp('Google')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </div>
            
            <button type="submit" className="signup-submit-btn" disabled={loading}>
              {loading ? 'Đang đăng ký...' : 'Đăng ký'}
            </button>
            
            <div className="switch-auth-text">
              Bạn đã có tài khoản? <a onClick={() => onNavigate('login')} className="switch-link">Đăng nhập ngay</a>
            </div>
          </form>
        </div>
      </div>

      <footer className="auth-footer">
        <div className="auth-footer-container">
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

export default SignUp;
