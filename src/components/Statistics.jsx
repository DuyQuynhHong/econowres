import React from 'react';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      percentage: '59.9%',
      description: 'Sinh viên đến lần đầu tiên có kiến thức về định hướng nghề nghiệp cũng như các công ty, doanh nghiệp đang tìm kiếm.',
      gradient: 'linear-gradient(180deg, #FF6B6B 0%, #FF8E53 100%)'
    },
    {
      percentage: '82.9%',
      description: 'Sinh viên không biết lập kế hoạch để phát triển bản thân dựa trên mục tiêu nghề nghiệp của họ.',
      gradient: 'linear-gradient(180deg, #FF6B6B 0%, #FF8E53 100%)'
    },
    {
      percentage: '50.6%',
      description: 'Chưa được tư vấn hướng nghiệp từ nhà trường hoặc tư vấn không đạt hiệu quả cao như mong đợi.',
      gradient: 'linear-gradient(180deg, #4FACFE 0%, #00F2FE 100%)'
    },
    {
      percentage: '94.4%',
      description: 'Sinh viên cảm thấy cần một nền tảng để họ có thể tìm kiếm thông tin về các công ty, doanh nghiệp và cơ hội việc làm của họ.',
      gradient: 'linear-gradient(180deg, #4FACFE 0%, #00F2FE 100%)'
    }
  ];

  return (
    <section className="statistics-section">
      <div className="statistics-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-percentage" style={{ background: stat.gradient }}>
              {stat.percentage}
            </div>
            <div className="stat-description">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
