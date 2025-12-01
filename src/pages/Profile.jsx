import React, { useState, useEffect } from 'react';
import { userAPI, fileAPI } from '../services/api';
import { getInitials, getAvatarColor } from '../utils/avatarHelper';
import './Profile.css';

const Profile = ({ onNavigate }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser._id) {
        const data = await userAPI.getProfile(storedUser._id);
        setUser(data);
        setFormData({
          fullName: data.fullName || '',
          phone: data.phone || '',
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error loading profile:', error);
      setLoading(false);
    }
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        setUploading(true);
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const data = await fileAPI.uploadAvatar(file, storedUser._id);
        setUser({ ...user, avatar: `http://localhost:3000${data.url}` });
        
        const updatedUser = { ...storedUser, avatar: `http://localhost:3000${data.url}` };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } catch (error) {
        console.error('Error uploading avatar:', error);
        alert('Lỗi khi upload ảnh');
      } finally {
        setUploading(false);
      }
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const data = await userAPI.updateProfile(storedUser._id, formData);
      setUser(data);
      
      const updatedUser = { ...storedUser, ...data };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      setEditMode(false);
      alert('Cập nhật thông tin thành công!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Lỗi khi cập nhật thông tin');
    }
  };

  const calculateProgress = () => {
    if (!user) return 0;
    return (user.experience / user.maxExperience) * 100;
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    onNavigate('home');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <div className="profile-header-container">
          <div className="user-profile-header">
            <div className="user-avatar-small">
              {user?.avatar && user.avatar.startsWith('/uploads') ? (
                <img 
                  src={`http://localhost:3000${user.avatar}`} 
                  alt="User" 
                />
              ) : (
                <div 
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: getAvatarColor(user?.fullName || ''),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px'
                  }}
                >
                  {getInitials(user?.fullName || '')}
                </div>
              )}
            </div>
            <div className="user-info">
              <div className="user-name">{user?.fullName}</div>
              <div className="user-status">
                <span className="status-dot"></span>
                Online
              </div>
            </div>
          </div>
          <nav className="profile-nav">
            <a onClick={() => onNavigate('home')} className="nav-link">TRANG CHỦ</a>
            <a onClick={() => onNavigate('career')} className="nav-link">THẾ GIỚI NGHỀ</a>
            <a onClick={() => onNavigate('community')} className="nav-link">CỘNG ĐỒNG</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="profile-content">
        <div className="profile-container">
          {/* Avatar Section */}
          <div className="avatar-section">
            <div className="avatar-card">
              <div className="avatar-display">
                {user?.avatar && user.avatar.startsWith('/uploads') ? (
                  <img 
                    src={`http://localhost:3000${user.avatar}`} 
                    alt="Profile Avatar" 
                  />
                ) : (
                  <div 
                    style={{
                      width: '300px',
                      height: '300px',
                      borderRadius: '50%',
                      background: getAvatarColor(user?.fullName || ''),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '120px'
                    }}
                  >
                    {getInitials(user?.fullName || '')}
                  </div>
                )}
              </div>
              <label className="upload-btn" htmlFor="avatar-upload">
                {uploading ? 'Uploading...' : '📷 Change Avatar'}
              </label>
              <input 
                type="file" 
                id="avatar-upload" 
                accept="image/*"
                onChange={handleAvatarChange}
                disabled={uploading}
                style={{ display: 'none' }}
              />
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="info-section">
            <div className="info-card">
              <h2 className="profile-name">{user?.fullName}</h2>
              
              {/* Level Progress */}
              <div className="level-badge">
                <div className="level-text">TRƯỜNG HỢP QUỐC TẾ</div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${calculateProgress()}%` }}
                    ></div>
                  </div>
                  <div className="progress-text">{user?.experience}/{user?.maxExperience}</div>
                </div>
                <div className="trophy-icon">🏆</div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                {editMode ? (
                  <>
                    <input
                      type="text"
                      className="edit-input"
                      placeholder="Họ và tên"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    <input
                      type="text"
                      className="edit-input"
                      placeholder="Số điện thoại"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <button className="action-btn save-btn" onClick={handleUpdateProfile}>
                      💾 Lưu thay đổi
                    </button>
                    <button className="action-btn cancel-btn" onClick={() => setEditMode(false)}>
                      ❌ Hủy
                    </button>
                  </>
                ) : (
                  <>
                    <button className="action-btn" onClick={() => setEditMode(true)}>
                      Giới thiệu bản thân
                    </button>
                    <button className="action-btn">
                      Trắc nghiệm tính cách
                    </button>
                    <button className="action-btn">
                      Thành tựu
                    </button>
                    <button className="action-btn">
                      Đổi mật khẩu
                    </button>
                    <button className="action-btn logout-btn" onClick={handleLogout}>
                      Đăng xuất
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="profile-footer">
        <div className="profile-footer-container">
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

export default Profile;
