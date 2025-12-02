// Dữ liệu môn học cho từng nghề trong 7 ngành
// Cấu trúc: careerId -> jobId -> courses[]

const coursesData = {
  // NGÀNH 1: THƯƠNG MẠI QUỐC TẾ
  1: {
    1: { // Chuyên viên Xuất nhập khẩu
      jobName: 'Chuyên viên Xuất nhập khẩu (Import/Export Specialist)',
      core: [
        { stt: 1, name: 'Giao dịch thương mại quốc tế (TMA302)', reason: 'Hiểu quy trình, các bước thực hiện một giao dịch XNK, Incoterms để xác định trách nhiệm.' },
        { stt: 2, name: 'Thanh toán quốc tế (TCH412)', reason: 'Xử lý các phương thức thanh toán L/C, T/T, D/P, đảm bảo an toàn tài chính.' },
        { stt: 3, name: 'Logistics và vận tải quốc tế (TMA336)', reason: 'Lựa chọn phương thức, tuyến vận tải tối ưu, lập chứng từ vận tải.' },
        { stt: 4, name: 'Thuế quốc tế (TMA330)', reason: 'Tính toán, kê khai các loại thuế (NK, XK, GTGT) chính xác.' },
        { stt: 5, name: 'Pháp luật thương mại quốc tế (PLU422)', reason: 'Nắm vững khung pháp lý để xử lý hợp đồng, tranh chấp.' },
        { stt: 6, name: 'Chính sách thương mại quốc tế (TMA301)', reason: 'Nắm vững luật chơi, các rào cản và ưu đãi thuế quan khi XNK.' },
        { stt: 7, name: 'Nghiệp vụ hải quan (TMA310)', reason: 'Nền tảng về thủ tục thông quan, khai báo hải quan.' },
        { stt: 8, name: 'Bảo hiểm trong kinh doanh (TMA402)', reason: 'Lựa chọn loại bảo hiểm phù hợp cho hàng hóa XNK.' },
        { stt: 9, name: 'Quan hệ kinh tế quốc tế', reason: 'Hiểu bối cảnh chính trị - kinh tế tác động đến quyết định XNK.' },
        { stt: 10, name: 'Lý thuyết tài chính', reason: 'Đánh giá rủi ro tài chính, quản lý dòng tiền trong giao dịch XNK.' },
        { stt: 11, name: 'Nguyên lý kế toán (KET201)', reason: 'Hạch toán, theo dõi chi phí, giá vốn hàng XNK.' },
        { stt: 12, name: 'Đàm phán thương mại quốc tế (TMA404)', reason: 'Đàm phán thành công các điều khoản trong hợp đồng mua bán quốc tế.' },
        { stt: 13, name: 'Marketing quốc tế (MKT401)', reason: 'Nghiên cứu thị trường và tìm kiếm đối tác, nhà cung cấp quốc tế.' },
        { stt: 14, name: 'Sở hữu trí tuệ (TMA408)', reason: 'Tránh vi phạm SHTT khi nhập khẩu hoặc đăng ký SHTT khi xuất khẩu.' },
        { stt: 15, name: 'Nguyên lý quản lý kinh tế', reason: 'Quản lý, điều phối các hoạt động kinh doanh XNK.' },
        { stt: 16, name: 'Cơ sở dữ liệu (TIN313)', reason: 'Quản lý dữ liệu, chứng từ XNK khổng lồ.' },
        { stt: 17, name: 'Thương hiệu trong kinh doanh quốc tế', reason: 'Hiểu về nhãn hiệu, mã HS, nguồn gốc sản phẩm XNK.' },
        { stt: 18, name: 'Thương mại kỹ thuật số (TMA333)', reason: 'Thực hiện XNK trên các nền tảng thương mại điện tử (e-commerce).' },
        { stt: 19, name: 'Quản lý năng suất và chất lượng', reason: 'Đảm bảo chất lượng hàng hóa XNK đáp ứng tiêu chuẩn quốc tế.' },
        { stt: 20, name: 'Thương mại dịch vụ', reason: 'Cần thiết khi công ty giao dịch các loại dịch vụ xuyên biên giới.' }
      ],
      elective: [
        { stt: 21, name: 'Xúc tiến thương mại, du lịch, đầu tư QT', reason: 'Tìm kiếm thị trường và khách hàng nước ngoài.' },
        { stt: 22, name: 'Văn hóa trong kinh doanh', reason: 'Hiểu đối tác để giao tiếp và đàm phán XNK hiệu quả hơn.' },
        { stt: 23, name: 'Chiến lược kinh doanh của DNTM', reason: 'Đặt các mục tiêu và kế hoạch dài hạn cho hoạt động XNK của công ty.' },
        { stt: 24, name: 'Sáng tạo kinh doanh', reason: 'Tìm kiếm các mô hình XNK mới, hiệu quả hơn.' },
        { stt: 25, name: 'Kinh tế học về nền tảng kinh doanh', reason: 'Hiểu cách các nền tảng số hóa (Platform) thay đổi XNK.' },
        { stt: 26, name: 'Lập trình cho phân tích dữ liệu', reason: 'Phân tích xu hướng thị trường, tối ưu hóa lợi nhuận XNK.' },
        { stt: 27, name: 'Đổi mới sáng tạo', reason: '' },
        { stt: 28, name: 'Quản trị học', reason: 'Kỹ năng lập kế hoạch và tổ chức công việc XNK.' },
        { stt: 29, name: 'Logic học và phương pháp NCKH', reason: 'Tư duy hệ thống và giải quyết vấn đề trong XNK.' },
        { stt: 30, name: 'Kinh tế vĩ mô', reason: 'Phân tích tác động của chính sách kinh tế đến XNK.' }
      ]
    }
    // ... Thêm 4 nghề còn lại của ngành Thương mại Quốc tế
  },
  
  // NGÀNH 2: MARKETING
  2: {
    1: { // Chuyên viên Digital Marketing
      jobName: 'Chuyên viên Digital Marketing (Digital Marketing Specialist)',
      core: [
        { stt: 1, name: 'Marketing số (Digital marketing)', reason: 'Cốt lõi của nghề' },
        { stt: 2, name: 'Truyền thông Marketing số (Digital Marketing Communication)', reason: 'Kỹ năng thực thi chiến dịch số' },
        { stt: 3, name: 'Sáng tạo ý tưởng thiết kế và nội dung số (Digital Content Creation)', reason: 'Sản xuất nội dung cho các kênh số' },
        { stt: 4, name: 'Quản trị phân phối và phát triển kênh bán số (Distribution Management and digital channel development)', reason: 'Quản lý kênh bán hàng trực tuyến' },
        { stt: 5, name: 'Quản lý thương hiệu và nhượng quyền thương mại (Franchise Management)', reason: 'Xây dựng thương hiệu trên nền tảng số' },
        { stt: 6, name: 'Marketing căn bản (Principles of Marketing)', reason: 'Nền tảng 4P' },
        { stt: 7, name: 'Chiến lược và kế hoạch Marketing (Marketing Planning and Strategies)', reason: 'Lập kế hoạch tổng thể cho Digital Marketing' },
        { stt: 8, name: 'Tâm lý và hành vi khách hàng (Customer\'s Psychology and Behavior)', reason: 'Hiểu người dùng số' },
        { stt: 9, name: 'Nghiên cứu Marketing (Marketing Research)', reason: 'Phân tích thị trường số' },
        { stt: 10, name: 'Lập dự án kinh doanh số (Digital Project Planning)', reason: 'Quản lý và triển khai dự án số' },
        { stt: 11, name: 'Kinh doanh số (Digital Business)', reason: 'Hiểu mô hình kinh doanh trên nền tảng số' },
        { stt: 12, name: 'Cơ sở dữ liệu (Data management system)', reason: 'Quản lý dữ liệu chiến dịch' },
        { stt: 13, name: 'Phương pháp nghiên cứu trong kinh tế và kinh doanh', reason: 'Nền tảng tư duy nghiên cứu' },
        { stt: 14, name: 'Quản trị học (Fundamentals of Management)', reason: 'Kỹ năng tổ chức và quản lý' },
        { stt: 15, name: 'FDMAP2: Dự án thực chiến nghiên cứu thị trường', reason: 'Thực hành phân tích thị trường' },
        { stt: 16, name: 'FDMAP3: Dự án thực hành kênh bán hàng số', reason: 'Thực hành quản trị kênh bán số' },
        { stt: 17, name: 'Kinh tế vi mô (Microeconomics)', reason: 'Phân tích cung cầu, giá cả' },
        { stt: 18, name: 'Kinh tế vĩ mô (Macroeconomics)', reason: 'Phân tích bối cảnh kinh tế vĩ mô' },
        { stt: 19, name: 'Pháp luật điều chỉnh trong thương mại điện tử', reason: 'Tuân thủ pháp lý trong hoạt động số' },
        { stt: 20, name: 'Marketing quốc tế (International Marketing)', reason: 'Triển khai chiến dịch xuyên biên giới' }
      ],
      elective: [
        { stt: 21, name: 'Phân tích dữ liệu kinh doanh (Business Analytics)', reason: 'Kỹ năng chuyên sâu về phân tích dữ liệu chiến dịch' },
        { stt: 22, name: 'Trí tuệ nhân tạo trong kỷ nguyên chuyển đổi số', reason: 'Ứng dụng AI trong tối ưu chiến dịch' },
        { stt: 23, name: 'Thương mại điện tử (E-Commerce)', reason: 'Kiến thức sâu về vận hành sàn TMĐT' },
        { stt: 24, name: 'Quan hệ khách hàng trong kinh doanh (Business Customer Relationships)', reason: 'Quản lý CRM' },
        { stt: 25, name: 'Hệ thống thông tin marketing và khai thác CSDL lớn', reason: 'Quản lý và khai thác Big Data' },
        { stt: 26, name: 'Lập trình cho dữ liệu và tính toán khoa học', reason: 'Kỹ năng lập trình cơ bản phục vụ phân tích' },
        { stt: 27, name: 'Sở hữu trí tuệ trong môi trường số', reason: 'Bảo vệ nội dung, thương hiệu số' },
        { stt: 28, name: 'Đổi mới sáng tạo trong kinh doanh số', reason: 'Cải tiến mô hình/công cụ Digital Marketing' },
        { stt: 29, name: 'Đạo đức kinh doanh và trách nhiệm xã hội', reason: 'Đảm bảo tính minh bạch, đạo đức trong quảng cáo' },
        { stt: 30, name: 'Lý thuyết tài chính (Principles of Finance)', reason: 'Hiểu về ngân sách và hiệu suất tài chính' }
      ]
    }
    // ... Thêm 6 nghề còn lại của ngành Marketing
  }
  
  // TODO: Thêm 5 ngành còn lại
};

export default coursesData;
