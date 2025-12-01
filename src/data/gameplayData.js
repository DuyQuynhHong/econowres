// Dữ liệu gameplay cho 7 ngành nghề
export const careersGameplayData = {
  1: { // Thương mại quốc tế
    careerName: 'THƯƠNG MẠI QUỐC TẾ',
    jobs: [
      'Chuyên viên xuất nhập khẩu',
      'Nhân viên chứng từ thương mại',
      'Chuyên viên mua hàng quốc tế',
      'Nhân viên xuất nhập khẩu tại doanh nghiệp sản xuất',
      'Chuyên viên quan hệ đối tác quốc tế'
    ],
    missions: [
      {
        id: 1,
        title: 'Nhiệm vụ 01',
        context: 'Chuyên viên xuất nhập khẩu phụ trách quản lý các hoạt động giao thương quốc tế của doanh nghiệp.',
        task: 'Bạn nhận được yêu cầu xuất khẩu 500 tấn gạo sang Philippines.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Xuất khẩu gạo cần tuân thủ quy định kiểm dịch thực vật, chứng nhận chất lượng và giấy phép xuất khẩu.'
        },
        question: {
          question: 'Xuất khẩu gạo sang nước ngoài, giấy tờ nào là BẮT BUỘC phải có?',
          options: [
            'Giấy phép kiểm dịch thực vật từ Bộ Nông nghiệp',
            'Giấy chứng nhận ISO 9001',
            'Hợp đồng bảo hiểm hàng hóa',
            'Giấy phép kinh doanh quốc tế'
          ],
          correctAnswer: 0,
          explanation: 'Giấy phép kiểm dịch thực vật là bắt buộc để đảm bảo không mang mầm bệnh.'
        }
      },
      {
        id: 2,
        title: 'Nhiệm vụ 02',
        context: 'Nhân viên chứng từ thương mại chuẩn bị và kiểm tra chứng từ xuất nhập khẩu.',
        task: 'Kiểm tra bộ chứng từ xuất khẩu 1000 chiếc áo thun sang Mỹ.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Bộ chứng từ gồm: Invoice, Packing List, B/L, bảo hiểm, C/O.'
        },
        question: {
          question: 'Chứng từ nào chứng minh quyền sở hữu hàng hóa?',
          options: [
            'Commercial Invoice',
            'Bill of Lading',
            'Packing List',
            'Certificate of Origin'
          ],
          correctAnswer: 1,
          explanation: 'Bill of Lading là chứng từ sở hữu hàng hóa đường biển.'
        }
      },
      {
        id: 3,
        title: 'Nhiệm vụ 03',
        context: 'Chuyên viên mua hàng quốc tế tìm kiếm nhà cung cấp và quản lý nhập khẩu.',
        task: 'Tìm nhà cung cấp linh kiện điện tử từ Trung Quốc.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Sử dụng Canton Fair, Alibaba, kiểm tra chứng chỉ ISO.'
        },
        question: {
          question: 'Nhập khẩu linh kiện điện tử, nên ưu tiên nhà cung cấp có chứng chỉ nào?',
          options: [
            'ISO 9001',
            'Halal Certificate',
            'Organic Certificate',
            'Fair Trade'
          ],
          correctAnswer: 0,
          explanation: 'ISO 9001 đảm bảo quy trình sản xuất ổn định.'
        }
      },
      {
        id: 4,
        title: 'Nhiệm vụ 04',
        context: 'Nhân viên XNK tại doanh nghiệp sản xuất đảm bảo hàng đạt tiêu chuẩn quốc tế.',
        task: 'Xuất khẩu đồ gỗ sang EU cần tiêu chuẩn gì?',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Cần FSC/PEFC, tiêu chuẩn formaldehyde E1/E0.'
        },
        question: {
          question: 'Tiêu chuẩn formaldehyde nào được EU chấp nhận?',
          options: [
            'E2 (≤ 5.0 mg/L)',
            'E1 (≤ 1.5 mg/L) hoặc E0',
            'E3 (≤ 10 mg/L)',
            'Không yêu cầu'
          ],
          correctAnswer: 1,
          explanation: 'EU yêu cầu E1 hoặc E0 để đảm bảo an toàn sức khỏe.'
        }
      },
      {
        id: 5,
        title: 'Nhiệm vụ 05',
        context: 'Chuyên viên quan hệ đối tác quốc tế xây dựng mối quan hệ với đối tác nước ngoài.',
        task: 'Đàm phán hợp tác với đối tác Nhật Bản.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Văn hóa Nhật coi trọng sự chuyên nghiệp, kiên nhẫn và tôn trọng.'
        },
        question: {
          question: 'Trong văn hóa kinh doanh Nhật, điều gì QUAN TRỌNG nhất?',
          options: [
            'Quyết định nhanh trong buổi đầu',
            'Kiên nhẫn, lắng nghe và tôn trọng',
            'Thương lượng giá gay gắt',
            'Đưa ra nhiều lựa chọn khác'
          ],
          correctAnswer: 1,
          explanation: 'Văn hóa Nhật coi trọng sự tôn trọng và xây dựng lòng tin.'
        }
      }
    ]
  },
  2: { // Tài chính - Ngân hàng - Đầu tư
    careerName: 'TÀI CHÍNH - NGÂN HÀNG - ĐẦU TƯ',
    jobs: [
      'Chuyên viên phân tích tài chính',
      'Nhân viên tín dụng ngân hàng',
      'Chuyên viên đầu tư chứng khoán',
      'Kế toán trưởng',
      'Chuyên viên quản lý rủi ro tài chính'
    ],
    missions: [
      {
        id: 1,
        title: 'Nhiệm vụ 01',
        context: 'Chuyên viên phân tích tài chính đánh giá tình hình tài chính doanh nghiệp.',
        task: 'Phân tích báo cáo tài chính để đưa ra khuyến nghị đầu tư.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Sử dụng các chỉ số ROE, ROA, Current Ratio, Debt/Equity để đánh giá.'
        },
        question: {
          question: 'Chỉ số nào đánh giá khả năng thanh toán ngắn hạn?',
          options: [
            'ROE (Return on Equity)',
            'Current Ratio',
            'Debt to Equity',
            'EPS (Earnings per Share)'
          ],
          correctAnswer: 1,
          explanation: 'Current Ratio = Tài sản ngắn hạn / Nợ ngắn hạn, đánh giá khả năng thanh toán.'
        }
      },
      {
        id: 2,
        title: 'Nhiệm vụ 02',
        context: 'Nhân viên tín dụng thẩm định hồ sơ vay và quản lý rủi ro tín dụng.',
        task: 'Thẩm định hồ sơ vay 5 tỷ của doanh nghiệp sản xuất.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Kiểm tra báo cáo tài chính, tài sản thế chấp, lịch sử tín dụng, dòng tiền.'
        },
        question: {
          question: 'Yếu tố nào KHÔNG thuộc 5C trong thẩm định tín dụng?',
          options: [
            'Character (Phẩm chất)',
            'Capacity (Năng lực trả nợ)',
            'Competition (Cạnh tranh)',
            'Capital (Vốn)'
          ],
          correctAnswer: 2,
          explanation: '5C gồm: Character, Capacity, Capital, Collateral, Condition.'
        }
      },
      {
        id: 3,
        title: 'Nhiệm vụ 03',
        context: 'Chuyên viên đầu tư phân tích thị trường và tư vấn đầu tư chứng khoán.',
        task: 'Phân tích cổ phiếu ngành công nghệ để đưa khuyến nghị.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Sử dụng phân tích kỹ thuật (Technical) và phân tích cơ bản (Fundamental).'
        },
        question: {
          question: 'Chỉ số P/E (Price to Earnings) cao có nghĩa gì?',
          options: [
            'Cổ phiếu rẻ, nên mua',
            'Cổ phiếu đắt hoặc kỳ vọng tăng trưởng cao',
            'Công ty đang lỗ',
            'Công ty sắp phá sản'
          ],
          correctAnswer: 1,
          explanation: 'P/E cao cho thấy nhà đầu tư sẵn sàng trả giá cao vì kỳ vọng tăng trưởng.'
        }
      },
      {
        id: 4,
        title: 'Nhiệm vụ 04',
        context: 'Kế toán trưởng quản lý toàn bộ công tác kế toán và báo cáo tài chính.',
        task: 'Lập báo cáo tài chính quý 4 theo chuẩn VAS.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Báo cáo gồm: Bảng cân đối kế toán, Báo cáo kết quả kinh doanh, Lưu chuyển tiền tệ.'
        },
        question: {
          question: 'Nguyên tắc kế toán nào yêu cầu ghi nhận doanh thu khi kiếm được?',
          options: [
            'Nguyên tắc nhất quán',
            'Nguyên tắc phù hợp',
            'Nguyên tắc thận trọng',
            'Nguyên tắc kế toán dồn tích'
          ],
          correctAnswer: 3,
          explanation: 'Kế toán dồn tích ghi nhận khi phát sinh, không phụ thuộc thu/chi tiền.'
        }
      },
      {
        id: 5,
        title: 'Nhiệm vụ 05',
        context: 'Chuyên viên quản lý rủi ro nhận diện và giảm thiểu rủi ro tài chính.',
        task: 'Quản lý rủi ro tỷ giá cho doanh nghiệp xuất khẩu.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Sử dụng hợp đồng Forward, Futures, Options để phòng ngừa rủi ro tỷ giá.'
        },
        question: {
          question: 'Công cụ nào giúp phòng ngừa rủi ro tỷ giá hiệu quả nhất?',
          options: [
            'Gửi tiết kiệm',
            'Hợp đồng Forward',
            'Mua vàng',
            'Đầu tư cổ phiếu'
          ],
          correctAnswer: 1,
          explanation: 'Forward cho phép cố định tỷ giá trong tương lai, giảm rủi ro biến động.'
        }
      }
    ]
  },
  3: { // Phân tích dữ liệu
    careerName: 'PHÂN TÍCH DỮ LIỆU',
    jobs: [
      'Data Analyst',
      'Business Intelligence Analyst',
      'Data Scientist',
      'Market Research Analyst',
      'Financial Analyst'
    ],
    missions: [
      {
        id: 1,
        title: 'Nhiệm vụ 01',
        context: 'Data Analyst thu thập, xử lý và phân tích dữ liệu để hỗ trợ quyết định kinh doanh.',
        task: 'Phân tích dữ liệu bán hàng để tối ưu chiến lược marketing.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Sử dụng SQL, Python, Excel để trích xuất, làm sạch và phân tích dữ liệu.'
        },
        question: {
          question: 'Công cụ nào KHÔNG phải là công cụ phân tích dữ liệu phổ biến?',
          options: [
            'Python (Pandas, NumPy)',
            'Tableau',
            'Photoshop',
            'Power BI'
          ],
          correctAnswer: 2,
          explanation: 'Photoshop là công cụ thiết kế đồ họa, không dùng để phân tích dữ liệu.'
        }
      },
      {
        id: 2,
        title: 'Nhiệm vụ 02',
        context: 'BI Analyst xây dựng dashboard và báo cáo trực quan cho quản lý.',
        task: 'Tạo dashboard theo dõi KPI bán hàng real-time.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Sử dụng Power BI hoặc Tableau để visualize dữ liệu.'
        },
        question: {
          question: 'Loại biểu đồ nào tốt nhất để hiển thị xu hướng thay đổi theo thời gian?',
          options: [
            'Pie Chart (Biểu đồ tròn)',
            'Line Chart (Biểu đồ đường)',
            'Bar Chart (Biểu đồ cột)',
            'Scatter Plot'
          ],
          correctAnswer: 1,
          explanation: 'Line Chart thể hiện rõ xu hướng tăng/giảm theo thời gian.'
        }
      },
      {
        id: 3,
        title: 'Nhiệm vụ 03',
        context: 'Data Scientist xây dựng mô hình machine learning để dự đoán.',
        task: 'Xây dựng mô hình dự đoán khách hàng rời bỏ (churn).',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Sử dụng Logistic Regression, Random Forest, XGBoost.'
        },
        question: {
          question: 'Thuật toán nào phù hợp cho bài toán phân loại (classification)?',
          options: [
            'Linear Regression',
            'K-Means Clustering',
            'Logistic Regression',
            'PCA'
          ],
          correctAnswer: 2,
          explanation: 'Logistic Regression là thuật toán phân loại (binary/multi-class).'
        }
      },
      {
        id: 4,
        title: 'Nhiệm vụ 04',
        context: 'Market Research Analyst nghiên cứu thị trường và hành vi khách hàng.',
        task: 'Khảo sát thị trường để ra mắt sản phẩm mới.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Thiết kế khảo sát, phân tích định lượng và định tính.'
        },
        question: {
          question: 'Phương pháp nào là nghiên cứu định tính (Qualitative)?',
          options: [
            'Khảo sát 1000 người qua Google Form',
            'Phỏng vấn sâu 10 khách hàng',
            'Phân tích dữ liệu bán hàng',
            'A/B Testing'
          ],
          correctAnswer: 1,
          explanation: 'Phỏng vấn sâu là phương pháp định tính để hiểu insights sâu.'
        }
      },
      {
        id: 5,
        title: 'Nhiệm vụ 05',
        context: 'Financial Analyst phân tích dữ liệu tài chính để đưa ra dự báo.',
        task: 'Dự báo doanh thu quý tiếp theo dựa trên dữ liệu lịch sử.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Sử dụng Time Series Analysis, ARIMA model.'
        },
        question: {
          question: 'Kỹ thuật nào dùng để dự báo chuỗi thời gian?',
          options: [
            'Linear Regression',
            'ARIMA (AutoRegressive Integrated Moving Average)',
            'Decision Tree',
            'K-Nearest Neighbors'
          ],
          correctAnswer: 1,
          explanation: 'ARIMA là mô hình phổ biến để dự báo chuỗi thời gian.'
        }
      }
    ]
  },
  4: { // Ngoại giao & Hợp tác quốc tế
    careerName: 'NGOẠI GIAO & HỢP TÁC QUỐC TẾ',
    jobs: [
      'Chuyên viên ngoại giao',
      'Chuyên viên quan hệ quốc tế',
      'Nhân viên lãnh sự',
      'Chuyên viên hợp tác phát triển',
      'Phiên dịch ngoại giao'
    ],
    missions: [
      {
        id: 1,
        title: 'Nhiệm vụ 01',
        context: 'Chuyên viên ngoại giao đại diện quốc gia trong quan hệ đối ngoại.',
        task: 'Chuẩn bị tài liệu cho hội nghị ASEAN về biển đông.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Nghiên cứu luật quốc tế, lập trường các nước, dự thảo tuyên bố chung.'
        },
        question: {
          question: 'Tổ chức nào là diễn đàn hợp tác khu vực Đông Nam Á?',
          options: [
            'APEC',
            'ASEAN',
            'WTO',
            'G20'
          ],
          correctAnswer: 1,
          explanation: 'ASEAN (Hiệp hội các quốc gia Đông Nam Á) gồm 10 nước.'
        }
      },
      {
        id: 2,
        title: 'Nhiệm vụ 02',
        context: 'Chuyên viên quan hệ quốc tế phát triển hợp tác song phương và đa phương.',
        task: 'Đàm phán FTA với đối tác EU.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Hiểu lợi ích quốc gia, cân nhắc nhượng bộ, đảm bảo win-win.'
        },
        question: {
          question: 'FTA (Free Trade Agreement) là gì?',
          options: [
            'Hiệp định đầu tư',
            'Hiệp định thương mại tự do',
            'Hiệp định thuế quan',
            'Hiệp định hợp tác phát triển'
          ],
          correctAnswer: 1,
          explanation: 'FTA giảm/xóa bỏ rào cản thuế quan giữa các nước thành viên.'
        }
      },
      {
        id: 3,
        title: 'Nhiệm vụ 03',
        context: 'Nhân viên lãnh sự hỗ trợ công dân và doanh nghiệp ở nước ngoài.',
        task: 'Hỗ trợ công dân Việt Nam bị mất hộ chiếu tại Pháp.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Cấp giấy thông hành tạm thời, hướng dẫn làm hộ chiếu mới.'
        },
        question: {
          question: 'Giấy tờ nào được cấp tạm thời khi mất hộ chiếu ở nước ngoài?',
          options: [
            'Visa',
            'Travel Document (Giấy thông hành)',
            'Chứng minh nhân dân',
            'Giấy khai sinh'
          ],
          correctAnswer: 1,
          explanation: 'Travel Document cho phép công dân về nước khi mất hộ chiếu.'
        }
      },
      {
        id: 4,
        title: 'Nhiệm vụ 04',
        context: 'Chuyên viên hợp tác phát triển quản lý dự án ODA.',
        task: 'Triển khai dự án xây trường học tài trợ bởi JICA.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Quản lý ngân sách ODA, báo cáo tiến độ, đảm bảo minh bạch.'
        },
        question: {
          question: 'ODA (Official Development Assistance) là gì?',
          options: [
            'Vốn đầu tư tư nhân',
            'Viện trợ phát triển chính thức',
            'Vay thương mại',
            'Đầu tư trực tiếp nước ngoài'
          ],
          correctAnswer: 1,
          explanation: 'ODA là viện trợ không hoàn lại hoặc vay ưu đãi từ chính phủ nước ngoài.'
        }
      },
      {
        id: 5,
        title: 'Nhiệm vụ 05',
        context: 'Phiên dịch ngoại giao phiên dịch trong các sự kiện ngoại giao.',
        task: 'Phiên dịch cuộc họp cấp cao Việt - Mỹ.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Cần thông thạo ngoại ngữ, hiểu thuật ngữ chính trị, văn hóa.'
        },
        question: {
          question: 'Loại phiên dịch nào yêu cầu dịch đồng thời trong tai nghe?',
          options: [
            'Consecutive Interpretation',
            'Simultaneous Interpretation',
            'Liaison Interpretation',
            'Whispered Interpretation'
          ],
          correctAnswer: 1,
          explanation: 'Simultaneous Interpretation dịch đồng thời, dùng trong hội nghị lớn.'
        }
      }
    ]
  },
  5: { // Marketing
    careerName: 'MARKETING',
    jobs: [
      'Digital Marketing Specialist',
      'Brand Manager',
      'Content Marketing Manager',
      'Social Media Manager',
      'SEO/SEM Specialist'
    ],
    missions: [
      {
        id: 1,
        title: 'Nhiệm vụ 01',
        context: 'Digital Marketing Specialist chạy quảng cáo trực tuyến để tăng doanh số.',
        task: 'Chạy chiến dịch Facebook Ads cho sản phẩm mới.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Xác định mục tiêu, đối tượng khách hàng, ngân sách, tối ưu CPC/CPM.'
        },
        question: {
          question: 'CPC trong quảng cáo Facebook là gì?',
          options: [
            'Cost Per Click (Chi phí mỗi lượt nhấp)',
            'Cost Per Customer',
            'Cost Per Conversion',
            'Cost Per Campaign'
          ],
          correctAnswer: 0,
          explanation: 'CPC = tổng chi phí / số lượt click, đo lường hiệu quả quảng cáo.'
        }
      },
      {
        id: 2,
        title: 'Nhiệm vụ 02',
        context: 'Brand Manager xây dựng và quản lý nhận diện thương hiệu.',
        task: 'Tái định vị thương hiệu cũ cho thế hệ Gen Z.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Nghiên cứu insight Gen Z, thiết kế lại logo/slogan, chiến dịch viral.'
        },
        question: {
          question: 'Yếu tố nào QUAN TRỌNG nhất trong brand positioning?',
          options: [
            'Giá rẻ nhất thị trường',
            'Điểm khác biệt độc đáo trong tâm trí khách hàng',
            'Quảng cáo nhiều nhất',
            'Sản phẩm đẹp nhất'
          ],
          correctAnswer: 1,
          explanation: 'Brand positioning tạo vị trí độc đáo trong tâm trí khách hàng.'
        }
      },
      {
        id: 3,
        title: 'Nhiệm vụ 03',
        context: 'Content Marketing Manager sản xuất nội dung giá trị để thu hút khách hàng.',
        task: 'Viết bài blog SEO về "Cách chọn laptop cho sinh viên".',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Nghiên cứu từ khóa, cấu trúc bài chuẩn SEO, thêm hình ảnh, CTA.'
        },
        question: {
          question: 'CTA (Call-to-Action) trong content marketing là gì?',
          options: [
            'Lời kêu gọi hành động (Mua ngay, Đăng ký...)',
            'Câu chuyện thương hiệu',
            'Tiêu đề bài viết',
            'Hình ảnh minh họa'
          ],
          correctAnswer: 0,
          explanation: 'CTA thúc đẩy người đọc thực hiện hành động mong muốn.'
        }
      },
      {
        id: 4,
        title: 'Nhiệm vụ 04',
        context: 'Social Media Manager quản lý kênh mạng xã hội và tương tác khách hàng.',
        task: 'Xử lý khủng hoảng truyền thông khi khách hàng phản ánh tiêu cực.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Phản hồi nhanh, thừa nhận lỗi, đưa giải pháp, theo dõi sau.'
        },
        question: {
          question: 'Nguyên tắc nào QUAN TRỌNG khi xử lý khủng hoảng truyền thông?',
          options: [
            'Im lặng, chờ mọi người quên',
            'Phản hồi nhanh, minh bạch và trung thực',
            'Xóa bình luận tiêu cực',
            'Đổ lỗi cho khách hàng'
          ],
          correctAnswer: 1,
          explanation: 'Phản hồi nhanh và minh bạch giúp khống chế khủng hoảng.'
        }
      },
      {
        id: 5,
        title: 'Nhiệm vụ 05',
        context: 'SEO/SEM Specialist tối ưu website lên top Google.',
        task: 'Tối ưu SEO cho website thương mại điện tử.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'On-page SEO (title, meta, content), Off-page (backlink), Technical SEO.'
        },
        question: {
          question: 'Yếu tố nào QUAN TRỌNG nhất cho SEO on-page?',
          options: [
            'Số lượng backlink',
            'Tốc độ load trang',
            'Từ khóa trong title và content chất lượng',
            'Số lượng trang'
          ],
          correctAnswer: 2,
          explanation: 'Từ khóa trong title/content và nội dung chất lượng là nền tảng SEO.'
        }
      }
    ]
  },
  6: { // Chuỗi cung ứng & Logistics
    careerName: 'CHUỖI CUNG ỨNG & LOGISTICS',
    jobs: [
      'Quản lý kho',
      'Chuyên viên vận chuyển',
      'Supply Chain Planner',
      'Procurement Specialist',
      'Customs Specialist'
    ],
    missions: [
      {
        id: 1,
        title: 'Nhiệm vụ 01',
        context: 'Quản lý kho kiểm soát hàng tồn kho và tối ưu không gian lưu trữ.',
        task: 'Quản lý kho chứa 10,000 SKU, giảm hàng tồn kho 20%.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Áp dụng FIFO, ABC Analysis, tối ưu layout kho.'
        },
        question: {
          question: 'FIFO trong quản lý kho có nghĩa là gì?',
          options: [
            'First In First Out (Vào trước ra trước)',
            'First In Last Out',
            'Fast Inventory Flow Out',
            'Full Inventory First Out'
          ],
          correctAnswer: 0,
          explanation: 'FIFO đảm bảo hàng cũ được xuất trước, tránh hết hạn.'
        }
      },
      {
        id: 2,
        title: 'Nhiệm vụ 02',
        context: 'Chuyên viên vận chuyển lập kế hoạch vận chuyển tối ưu chi phí và thời gian.',
        task: 'Vận chuyển 100 tấn hàng từ HCM đến Hà Nội.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'So sánh đường bộ, đường sắt, hàng không về chi phí/thời gian.'
        },
        question: {
          question: 'Phương thức vận chuyển nào RẺ nhất cho hàng hóa cồng kềnh?',
          options: [
            'Hàng không',
            'Đường biển',
            'Đường bộ',
            'Courier (chuyển phát nhanh)'
          ],
          correctAnswer: 1,
          explanation: 'Đường biển chi phí thấp nhưng thời gian lâu, phù hợp hàng cồng kềnh.'
        }
      },
      {
        id: 3,
        title: 'Nhiệm vụ 03',
        context: 'Supply Chain Planner lập kế hoạch sản xuất và cung ứng.',
        task: 'Dự báo nhu cầu để đặt hàng nguyên liệu đúng lúc.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Phân tích dữ liệu bán hàng, xu hướng thị trường, lead time nhà cung cấp.'
        },
        question: {
          question: 'JIT (Just-In-Time) trong supply chain là gì?',
          options: [
            'Sản xuất và giao hàng đúng lúc, giảm tồn kho',
            'Tăng tồn kho để đề phòng',
            'Sản xuất với số lượng lớn',
            'Giảm chất lượng để nhanh'
          ],
          correctAnswer: 0,
          explanation: 'JIT giảm tồn kho bằng cách sản xuất/giao hàng đúng thời điểm cần.'
        }
      },
      {
        id: 4,
        title: 'Nhiệm vụ 04',
        context: 'Procurement Specialist tìm kiếm và đàm phán với nhà cung cấp.',
        task: 'Đàm phán giảm 15% chi phí nguyên liệu với nhà cung cấp.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'So sánh giá nhiều nhà cung cấp, đàm phán số lượng lớn, hợp đồng dài hạn.'
        },
        question: {
          question: 'Chiến lược nào giúp tăng sức mạnh đàm phán với nhà cung cấp?',
          options: [
            'Phụ thuộc vào 1 nhà cung cấp duy nhất',
            'Có nhiều lựa chọn nhà cung cấp (Multi-sourcing)',
            'Không ký hợp đồng',
            'Trả chậm tiền'
          ],
          correctAnswer: 1,
          explanation: 'Multi-sourcing tạo áp lực cạnh tranh, tăng sức mạnh đàm phán.'
        }
      },
      {
        id: 5,
        title: 'Nhiệm vụ 05',
        context: 'Customs Specialist làm thủ tục hải quan xuất nhập khẩu.',
        task: 'Khai báo hải quan lô hàng nhập khẩu 500 laptop.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Chuẩn bị Invoice, Packing List, B/L, khai HS Code, nộp thuế.'
        },
        question: {
          question: 'HS Code trong hải quan dùng để làm gì?',
          options: [
            'Mã định danh nhà cung cấp',
            'Mã phân loại hàng hóa toàn cầu',
            'Mã vận đơn',
            'Mã khách hàng'
          ],
          correctAnswer: 1,
          explanation: 'HS Code (Harmonized System) phân loại hàng hóa để tính thuế.'
        }
      }
    ]
  },
  7: { // Khởi nghiệp & Quản trị sáng tạo
    careerName: 'KHỞI NGHIỆP & QUẢN TRỊ SÁNG TẠO',
    jobs: [
      'Startup Founder',
      'Innovation Manager',
      'Product Manager',
      'Business Development Manager',
      'Venture Capital Analyst'
    ],
    missions: [
      {
        id: 1,
        title: 'Nhiệm vụ 01',
        context: 'Startup Founder xây dựng ý tưởng kinh doanh và mô hình khởi nghiệp.',
        task: 'Xây dựng MVP (sản phẩm tối thiểu) cho ứng dụng giao đồ ăn.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Xác định pain point khách hàng, tính năng cốt lõi, ra mắt nhanh để test.'
        },
        question: {
          question: 'MVP (Minimum Viable Product) là gì?',
          options: [
            'Sản phẩm hoàn chỉnh nhất',
            'Sản phẩm tối thiểu để test thị trường',
            'Sản phẩm đắt nhất',
            'Sản phẩm marketing tốt nhất'
          ],
          correctAnswer: 1,
          explanation: 'MVP có tính năng cốt lõi để test ý tưởng nhanh, tiết kiệm chi phí.'
        }
      },
      {
        id: 2,
        title: 'Nhiệm vụ 02',
        context: 'Innovation Manager thúc đẩy đổi mới sáng tạo trong tổ chức.',
        task: 'Tổ chức hackathon nội bộ để tìm ý tưởng sản phẩm mới.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Tạo môi trường khuyến khích thử nghiệm, chấp nhận thất bại.'
        },
        question: {
          question: 'Design Thinking bao gồm mấy giai đoạn chính?',
          options: [
            '3 giai đoạn',
            '5 giai đoạn (Empathize, Define, Ideate, Prototype, Test)',
            '7 giai đoạn',
            '10 giai đoạn'
          ],
          correctAnswer: 1,
          explanation: 'Design Thinking có 5 giai đoạn tập trung vào giải quyết vấn đề từ góc nhìn người dùng.'
        }
      },
      {
        id: 3,
        title: 'Nhiệm vụ 03',
        context: 'Product Manager quản lý phát triển sản phẩm từ ý tưởng đến ra mắt.',
        task: 'Lập roadmap sản phẩm cho app fintech.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Ưu tiên tính năng theo value vs effort, lắng nghe feedback user.'
        },
        question: {
          question: 'Framework nào dùng để ưu tiên tính năng sản phẩm?',
          options: [
            'SWOT Analysis',
            'RICE (Reach, Impact, Confidence, Effort)',
            '5 Forces Porter',
            'BCG Matrix'
          ],
          correctAnswer: 1,
          explanation: 'RICE đánh giá tính năng dựa trên phạm vi, tác động, độ tự tin và công sức.'
        }
      },
      {
        id: 4,
        title: 'Nhiệm vụ 04',
        context: 'Business Development Manager tìm kiếm đối tác và mở rộng thị trường.',
        task: 'Đàm phán hợp tác với đối tác phân phối tại Thái Lan.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Nghiên cứu thị trường, tìm đối tác uy tín, đưa ra điều khoản win-win.'
        },
        question: {
          question: 'Yếu tố nào QUAN TRỌNG nhất khi chọn đối tác chiến lược?',
          options: [
            'Giá rẻ nhất',
            'Gần nhà nhất',
            'Phù hợp về giá trị, tầm nhìn và năng lực',
            'Quen biết lâu năm'
          ],
          correctAnswer: 2,
          explanation: 'Đối tác chiến lược cần cùng giá trị, tầm nhìn và bổ trợ năng lực.'
        }
      },
      {
        id: 5,
        title: 'Nhiệm vụ 05',
        context: 'VC Analyst đánh giá startup để quyết định đầu tư.',
        task: 'Thẩm định startup EdTech xin vốn Series A 2 triệu USD.',
        guidance: {
          title: 'Gợi ý giải thích:',
          content: 'Đánh giá team, thị trường, traction, mô hình kinh doanh, tiềm năng tăng trưởng.'
        },
        question: {
          question: 'Trong đầu tư Venture Capital, Series A là gì?',
          options: [
            'Vòng gọi vốn đầu tiên từ nhà đầu tư chuyên nghiệp',
            'Vòng IPO',
            'Vòng vay ngân hàng',
            'Vòng thoái vốn'
          ],
          correctAnswer: 0,
          explanation: 'Series A là vòng gọi vốn đầu tiên từ VC sau khi startup đã có traction.'
        }
      }
    ]
  }
};
