import React from 'react';
import './CourseList.css';

const CourseList = ({ courses, onClose }) => {
  if (!courses) {
    return (
      <div className="course-modal-overlay" onClick={onClose}>
        <div className="course-modal" onClick={(e) => e.stopPropagation()}>
          <div className="course-modal-header">
            <h2>Danh sách môn học</h2>
            <button className="close-btn" onClick={onClose}>✕</button>
          </div>
          <div className="course-modal-body">
            <p>Không tìm thấy thông tin môn học.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="course-modal-overlay" onClick={onClose}>
      <div className="course-modal" onClick={(e) => e.stopPropagation()}>
        <div className="course-modal-header">
          <h2>{courses.jobName}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="course-modal-body">
          {/* Core Courses */}
          <div className="course-section">
            <h3>A. Môn học bắt buộc (Core) - 20 môn</h3>
            <table className="course-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên môn học</th>
                  <th>Lý do lựa chọn</th>
                </tr>
              </thead>
              <tbody>
                {courses.core.map((course, index) => (
                  <tr key={index}>
                    <td>{course.stt}</td>
                    <td className="course-name">{course.name}</td>
                    <td className="course-reason">{course.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Elective Courses */}
          <div className="course-section">
            <h3>B. Môn học tự chọn (Elective) - 10 môn</h3>
            <table className="course-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên môn học</th>
                  <th>Lý do lựa chọn</th>
                </tr>
              </thead>
              <tbody>
                {courses.elective.map((course, index) => (
                  <tr key={index}>
                    <td>{course.stt}</td>
                    <td className="course-name">{course.name}</td>
                    <td className="course-reason">{course.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
