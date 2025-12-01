// Tạo avatar từ chữ cái đầu của tên
export const getInitials = (name) => {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

// Tạo màu background dựa trên tên
export const getAvatarColor = (name) => {
  if (!name) return '#0099DD';
  
  const colors = [
    '#FF6B35', '#F7931E', '#00A8E8', '#0099DD', 
    '#00D4FF', '#0088CC', '#9B59B6', '#E74C3C',
    '#3498DB', '#2ECC71', '#F39C12', '#E67E22'
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
};
