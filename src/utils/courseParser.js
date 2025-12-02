// Parse course data from TXT file format
export const parseCourseData = (txtContent) => {
  const lines = txtContent.split('\n').map(line => line.trim()).filter(line => line);
  const courseData = {};
  
  let currentCareer = null;
  let currentJob = null;
  let currentSection = null; // 'core' or 'elective'
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect career world (e.g., "World 1: Thương mại Quốc tế")
    if (line.match(/^World\s+\d+:/i)) {
      const careerMatch = line.match(/World\s+(\d+):\s*(.+)/i);
      if (careerMatch) {
        currentCareer = careerMatch[1];
        courseData[currentCareer] = {};
      }
      continue;
    }
    
    // Detect job (e.g., "1. Chuyên viên Xuất nhập khẩu")
    if (line.match(/^\d+\.\s+.+\(.+\)/)) {
      const jobMatch = line.match(/^(\d+)\.\s+(.+?)(?:\s+\((.+?)\))?$/);
      if (jobMatch && currentCareer) {
        currentJob = jobMatch[1];
        const jobName = jobMatch[2];
        courseData[currentCareer][currentJob] = {
          jobName: jobName.trim(),
          core: [],
          elective: []
        };
      }
      continue;
    }
    
    // Detect section headers
    if (line.match(/^A\.\s*Core/i)) {
      currentSection = 'core';
      continue;
    }
    if (line.match(/^B\.\s*Elective/i)) {
      currentSection = 'elective';
      continue;
    }
    
    // Skip table headers
    if (line === 'STT' || line === 'Tên môn học' || line === 'Lý do lựa chọn') {
      continue;
    }
    
    // Parse course entries (number followed by course name and reason)
    if (currentCareer && currentJob && currentSection) {
      // Check if line is a number (STT)
      if (line.match(/^\d+$/)) {
        const stt = parseInt(line);
        const courseName = lines[i + 1] || '';
        const reason = lines[i + 2] || '';
        
        if (courseName && !courseName.match(/^[AB]\.\s*(Core|Elective)/i)) {
          courseData[currentCareer][currentJob][currentSection].push({
            stt: stt,
            name: courseName.trim(),
            reason: reason.trim()
          });
          i += 2; // Skip next 2 lines (name and reason)
        }
      }
    }
  }
  
  return courseData;
};

// Get courses for a specific career and job
export const getCourses = (courseData, careerId, jobId) => {
  if (!courseData[careerId] || !courseData[careerId][jobId]) {
    return null;
  }
  return courseData[careerId][jobId];
};
