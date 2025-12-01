import React, { useState, useEffect } from 'react';
import './Header.css';
import { getInitials, getAvatarColor } from '../utils/avatarHelper';

const Header = ({ onNavigate }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    onNavigate('home');
  };

  return (
    <header className="header">
      <div className="header-container">
        {user ? (
          <div className="user-profile-header" onClick={() => onNavigate('profile')} style={{ cursor: 'pointer' }}>
            <div className="user-avatar-header">
              {user.avatar && (user.avatar.startsWith('http') || user.avatar.startsWith('/uploads')) ? (
                <img src={user.avatar.startsWith('http') ? user.avatar : `http://localhost:3000${user.avatar}`} alt={user.fullName} />
              ) : (
                <div 
                  className="avatar-initials"
                  style={{
                    background: getAvatarColor(user.fullName),
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}
                >
                  {getInitials(user.fullName)}
                </div>
              )}
            </div>
            <span className="user-name-header">{user.fullName}</span>
          </div>
        ) : (
          <div className="logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <div className="logo-icon">
              <span className="logo-icon-text">Econoverse</span>
            </div>
            <span className="logo-text">Econoverse</span>
          </div>
        )}
        
        <nav className="nav">
          <a onClick={() => onNavigate('home')} className="nav-link">TRANG CHỦ</a>
          <a onClick={() => onNavigate('career')} className="nav-link">THẾ GIỚI NGHỀ</a>
          <a onClick={() => onNavigate('quiz')} className="nav-link">QUIZ NGHỀ NGHIỆP</a>
          <a onClick={() => onNavigate('courses')} className="nav-link">GỢI Ý HỌC PHẦN</a>
          <a onClick={() => onNavigate('community')} className="nav-link">CỘNG ĐỐNG</a>
          {user ? (
            <a onClick={handleLogout} className="nav-link logout-link">ĐĂNG XUẤT</a>
          ) : (
            <a onClick={() => onNavigate('login')} className="nav-link">ĐĂNG NHẬP</a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
