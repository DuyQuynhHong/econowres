import React, { useState } from 'react';
import Header from '../components/Header';
import './CourseSuggestion.css';

const CourseSuggestion = ({ onNavigate }) => {
  const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
  const [selectedCareer, setSelectedCareer] = useState('thuong-mai-quoc-te');
  const [selectedSpecialization, setSelectedSpecialization] = useState('chuyen-vien-xuat-nhap-khau');

  // Danh sách 7 ngành nghề
  const careers = [
    { id: 'thuong-mai-quoc-te', name: 'Thương mại quốc tế' },
    { id: 'tai-chinh-ngan-hang', name: 'Tài chính - Ngân hàng - Đầu tư' },
    { id: 'phan-tich-du-lieu', name: 'Phân tích dữ liệu' },
    { id: 'ngoai-giao', name: 'Ngoại giao & Hợp tác quốc tế' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'logistics', name: 'Chuỗi cung ứng Logistics' },
    { id: 'khoi-nghiep', name: 'Khởi nghiệp & Quản trị sáng tạo' }
  ];

  // Chuyên ngành cho từng ngành nghề
  const specializations = {
    'thuong-mai-quoc-te': [
      { id: 'chuyen-vien-xuat-nhap-khau', name: 'Chuyên viên xuất nhập khẩu' },
      { id: 'nhan-vien-chung-tu', name: 'Nhân viên chứng từ thương mại' },
      { id: 'chuyen-vien-mua-hang', name: 'Chuyên viên mua hàng quốc tế' },
      { id: 'nhan-vien-xnk-doanh-nghiep', name: 'Nhân viên xuất nhập khẩu tại doanh nghiệp sản xuất' },
      { id: 'quan-he-doi-tac', name: 'Chuyên viên quan hệ đối tác quốc tế' }
    ],
    'tai-chinh-ngan-hang': [
      { id: 'chuyen-vien-tai-chinh', name: 'Chuyên viên tài chính doanh nghiệp' },
      { id: 'nhan-vien-ngan-hang', name: 'Nhân viên ngân hàng' },
      { id: 'chuyen-vien-dau-tu', name: 'Chuyên viên đầu tư' }
    ],
    'phan-tich-du-lieu': [
      { id: 'data-analyst', name: 'Data Analyst' },
      { id: 'business-intelligence', name: 'Business Intelligence Analyst' }
    ],
    'ngoai-giao': [
      { id: 'chuyen-vien-ngoai-giao', name: 'Chuyên viên ngoại giao' },
      { id: 'quan-he-quoc-te', name: 'Chuyên viên quan hệ quốc tế' }
    ],
    'marketing': [
      { id: 'digital-marketing', name: 'Digital Marketing Specialist' },
      { id: 'brand-manager', name: 'Brand Manager' }
    ],
    'logistics': [
      { id: 'quan-ly-kho', name: 'Quản lý kho' },
      { id: 'van-chuyen', name: 'Chuyên viên vận chuyển' }
    ],
    'khoi-nghiep': [
      { id: 'startup-founder', name: 'Startup Founder' },
      { id: 'innovation-manager', name: 'Innovation Manager' }
    ]
  };

  const courses = [
    {
      semester: 'HỌC KỲ 1',
      subjects: [
        { code: 'GEO101', name: 'Địa lý kinh tế', credits: 3, reason: 'Hiểu bản đồ kinh tế thế giới, vị trí địa lý ảnh hưởng đến thương mại' },
        { code: 'ECO101', name: 'Kinh tế vi mô', credits: 3, reason: 'Nền tảng về cung cầu, giá cả, cạnh tranh thị trường' },
        { code: 'MAT101', name: 'Toán kinh tế', credits: 3, reason: 'Kỹ năng tính toán cho phân tích kinh tế' },
        { code: 'ENG101', name: 'Tiếng Anh thương mại 1', credits: 3, reason: 'Giao tiếp cơ bản trong môi trường kinh doanh quốc tế' },
        { code: 'COM101', name: 'Tin học văn phòng', credits: 2, reason: 'Sử dụng Excel, Word cho công việc văn phòng' }
      ]
    },
    {
      semester: 'HỌC KỲ 2',
      subjects: [
        { code: 'ECO102', name: 'Kinh tế vĩ mô', credits: 3, reason: 'Hiểu về GDP, lạm phát, chính sách tiền tệ quốc tế' },
        { code: 'ACC101', name: 'Nguyên lý kế toán', credits: 3, reason: 'Đọc hiểu báo cáo tài chính doanh nghiệp' },
        { code: 'LAW101', name: 'Luật thương mại', credits: 3, reason: 'Các quy định pháp lý trong giao dịch thương mại' },
        { code: 'ENG102', name: 'Tiếng Anh thương mại 2', credits: 3, reason: 'Kỹ năng đàm phán và thư tín thương mại' },
        { code: 'STA101', name: 'Thống kê kinh doanh', credits: 3, reason: 'Phân tích số liệu thị trường và dự báo' }
      ]
    },
    {
      semester: 'HỌC KỲ 3',
      subjects: [
        { code: 'TMA302', name: 'Thương mại quốc tế', credits: 4, reason: 'Môn quan trọng nhất: Incoterms, chứng từ, quy trình giao dịch XNK' },
        { code: 'MKT201', name: 'Nguyên lý Marketing', credits: 3, reason: 'Chiến lược tiếp thị sản phẩm ra thị trường quốc tế' },
        { code: 'FIN201', name: 'Tài chính doanh nghiệp', credits: 3, reason: 'Quản lý vốn, thanh toán quốc tế' },
        { code: 'LOG201', name: 'Logistics cơ bản', credits: 3, reason: 'Vận chuyển, kho bãi trong thương mại quốc tế' },
        { code: 'CUL201', name: 'Văn hóa kinh doanh quốc tế', credits: 2, reason: 'Hiểu khác biệt văn hóa khi làm việc với đối tác nước ngoài' }
      ]
    },
    {
      semester: 'HỌC KỲ 4',
      subjects: [
        { code: 'TMA401', name: 'Thanh toán quốc tế', credits: 3, reason: 'L/C, T/T, D/P, D/A - các phương thức thanh toán XNK' },
        { code: 'TMA402', name: 'Hải quan và thuế XNK', credits: 3, reason: 'Thủ tục hải quan, tính thuế nhập khẩu/xuất khẩu' },
        { code: 'TMA403', name: 'Quản trị xuất nhập khẩu', credits: 3, reason: 'Quy trình vận hành bộ phận XNK trong doanh nghiệp' },
        { code: 'LAW301', name: 'Luật thương mại quốc tế', credits: 3, reason: 'CISG, Luật WTO, tranh chấp thương mại' },
        { code: 'ENG301', name: 'Tiếng Anh chuyên ngành XNK', credits: 3, reason: 'Thuật ngữ chuyên môn trong giao dịch XNK' }
      ]
    },
    {
      semester: 'HỌC KỲ 5',
      subjects: [
        { code: 'TMA501', name: 'Chứng từ thương mại quốc tế', credits: 4, reason: 'Invoice, Packing list, B/L, C/O - thực hành làm chứng từ' },
        { code: 'TMA502', name: 'Đàm phán thương mại quốc tế', credits: 3, reason: 'Kỹ năng협상 với đối tác nước ngoài' },
        { code: 'SCM301', name: 'Quản trị chuỗi cung ứng', credits: 3, reason: 'Tối ưu hóa quy trình từ nhà cung cấp đến khách hàng' },
        { code: 'MKT401', name: 'Marketing quốc tế', credits: 3, reason: 'Chiến lược thâm nhập thị trường nước ngoài' },
        { code: 'TMA503', name: 'Thực tập nghiệp vụ XNK', credits: 2, reason: 'Mô phỏng quy trình XNK thực tế' }
      ]
    },
    {
      semester: 'HỌC KỲ 6',
      subjects: [
        { code: 'TMA601', name: 'Quản trị rủi ro trong TMQT', credits: 3, reason: 'Nhận diện và phòng tránh rủi ro trong giao dịch XNK' },
        { code: 'TMA602', name: 'Thương mại điện tử quốc tế', credits: 3, reason: 'B2B, B2C xuyên biên giới, nền tảng Alibaba, Amazon' },
        { code: 'FIN401', name: 'Tài chính quốc tế', credits: 3, reason: 'Tỷ giá, phòng ngừa rủi ro ngoại hối' },
        { code: 'TMA603', name: 'Phát triển thị trường XK', credits: 3, reason: 'Tìm kiếm và mở rộng thị trường xuất khẩu' },
        { code: 'RES401', name: 'Phương pháp nghiên cứu', credits: 3, reason: 'Chuẩn bị cho khóa luận tốt nghiệp' }
      ]
    },
    {
      semester: 'HỌC KỲ 7',
      subjects: [
        { code: 'TMA701', name: 'Thực tập tốt nghiệp', credits: 4, reason: 'Làm việc thực tế tại doanh nghiệp XNK hoặc phòng XNK' },
        { code: 'TMA702', name: 'Khóa luận tốt nghiệp', credits: 6, reason: 'Nghiên cứu chuyên sâu về chủ đề TMQT' },
        { code: 'TMA703', name: 'Hội nhập kinh tế quốc tế', credits: 3, reason: 'CPTPP, EVFTA, RCEP - các hiệp định thương mại tự do' },
        { code: 'ENT401', name: 'Khởi nghiệp trong lĩnh vực XNK', credits: 2, reason: 'Kiến thức mở công ty XNK, sourcing, trading' }
      ]
    }
  ];

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/[TMA319] GỢI Ý HỌC PHẦN.pdf';
    link.download = '[TMA319] GỢI Ý HỌC PHẦN.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getTotalCredits = (subjects) => {
    return subjects.reduce((sum, subject) => sum + subject.credits, 0);
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'Bắt buộc': return '#FF6B6B';
      case 'Chuyên ngành': return '#4ECDC4';
      case 'Tự chọn': return '#95E1D3';
      default: return '#999';
    }
  };

  return (
    <div className="course-suggestion-page">
      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="course-content">
        <div className="course-content-container">
          <div className="page-title-section">
            <h1 className="page-title">GỢI Ý HỌC PHẦN</h1>
            <p className="page-subtitle">Gợi ý học phần giúp bạn chọn đúng môn cho lộ trình nghề nghiệp. Chi tiết chọn thế giới nghề/ngành, hệ thống sẽ hiển thị bảng môn học kèm lý do nên học - giúp bạn lập kế hoạch lộ trình nghề nghiệp và chính xác và tối ưu.</p>
          </div>

          {/* Filter Section */}
          <div className="filter-section">
            <div className="filter-group">
              <label className="filter-label">
                {careers.find(c => c.id === selectedCareer)?.name || 'Chọn ngành nghề'}
              </label>
              <select 
                className="filter-select"
                value={selectedCareer}
                onChange={(e) => {
                  setSelectedCareer(e.target.value);
                  setSelectedSpecialization(specializations[e.target.value][0].id);
                }}
              >
                {careers.map(career => (
                  <option key={career.id} value={career.id}>{career.name}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">
                {specializations[selectedCareer]?.find(s => s.id === selectedSpecialization)?.name || 'Chọn chuyên ngành'}
              </label>
              <select 
                className="filter-select"
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
              >
                {specializations[selectedCareer]?.map(spec => (
                  <option key={spec.id} value={spec.id}>{spec.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs-section">
            <button className="tab-btn">Core</button>
            <button className="tab-btn active">ELECTIVE</button>
          </div>

          {/* Download Button */}
          <div className="download-section">
            <button className="download-btn" onClick={handleDownloadPDF}>
              <span className="download-icon">📥</span>
              <span className="download-text">TẢI LỘ TRÌNH HỌC CÁ NHÂN</span>
            </button>
          </div>

          {/* Course Tables by Semester */}
          {courses.map((semester, index) => (
            <div key={index} className="semester-section">
              <div className="semester-header">
                <h2 className="semester-title">{semester.semester}</h2>
                <span className="semester-credits">
                  Tổng: {getTotalCredits(semester.subjects)} tín chỉ
                </span>
              </div>
              
              <div className="course-table-wrapper">
                <table className="course-table">
                  <thead>
                    <tr>
                      <th className="col-number">STT</th>
                      <th className="col-code">Mã môn</th>
                      <th className="col-name">Tên môn học</th>
                      <th className="col-credits">Tín chỉ</th>
                      <th className="col-reason">Lý do phù hợp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.subjects.map((subject, idx) => (
                      <tr key={idx}>
                        <td className="col-number">{idx + 1}</td>
                        <td className="col-code">{subject.code}</td>
                        <td className="col-name">{subject.name}</td>
                        <td className="col-credits">{subject.credits}</td>
                        <td className="col-reason">{subject.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="summary-section">
            <div className="summary-card">
              <h3 className="summary-title">TỔNG KẾT</h3>
              <div className="summary-content">
                <div className="summary-item">
                  <span className="summary-label">Tổng số học kỳ:</span>
                  <span className="summary-value">{courses.length} học kỳ</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Tổng số tín chỉ:</span>
                  <span className="summary-value">
                    {courses.reduce((total, sem) => total + getTotalCredits(sem.subjects), 0)} tín chỉ
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Thời gian đào tạo:</span>
                  <span className="summary-value">4 năm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="course-footer">
        <div className="course-footer-container">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-text">Econoverse</span>
            </div>
            <p className="footer-description">
              Nền tảng hướng nghiệp và định hướng nghề nghiệp cho sinh viên 
              Trường Đại học Ngoại thương. Khám phá tiềm năng, phát triển kỹ năng, 
              và xây dựng tương lai sự nghiệp của bạn.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>LIÊN HỆ</h3>
            <p>Trường Đại học Ngoại thương</p>
            <p>91 phố Chùa Láng, Đống Đa, Hà Nội</p>
            <p>Thứ hai - Thứ sáu: 8:00 - 17:00</p>
          </div>
          
          <div className="footer-section">
            <h3>VỀ CHÚNG TÔI</h3>
            <p>Fanpage</p>
            <p>Email: contact@econoverse.edu.vn</p>
            <p>SĐT: (024) 3834 9898</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseSuggestion;
