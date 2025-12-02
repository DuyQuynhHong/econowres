// Dữ liệu gameplay mới từ file input - 7 ngành nghề với 35 nghề và 105 nhiệm vụ

export const careersGameplayDataNew = {
  1: { 
    // THƯƠNG MẠI QUỐC TẾ
    careerName: 'THƯƠNG MẠI QUỐC TẾ',
    description: 'Thế giới của các hoạt động mua bán, trao đổi hàng hoá và dịch vụ giữa các quốc gia. Đây là nơi diễn ra quá trình nghiên cứu thị trường, đàm phán, ký kết hợp đồng và quản lý hoạt động xuất nhập khẩu trong bối cảnh hội nhập kinh tế quốc tế.',
    totalJobs: 5,
    totalMissions: 15,
    badge: 'Nhà giao thương quốc tế',
    
    jobs: [
      {
        id: 1,
        name: 'Chuyên viên xuất nhập khẩu',
        description: 'Chuyên viên xuất nhập khẩu phụ trách quản lý các hoạt động giao thương quốc tế của doanh nghiệp, từ đàm phán, ký kết hợp đồng đến giải quyết các yêu cầu vận chuyển. Công việc đòi hỏi khả năng giao tiếp, kiến thức logistics và hiểu biết về quy định thương mại quốc tế.',
        context: 'Công ty VietTrade Co. đang mở rộng xuất khẩu sản phẩm nồi inox sang khu vực Đông Nam Á. Bạn được giao nhiệm vụ phụ trách lô hàng đầu tiên.',
        missions: [
          {
            id: 1,
            title: 'Phân tích nhu cầu thị trường và lựa chọn mặt hàng tiềm năng để xuất khẩu',
            type: 'table-analysis',
            data: {
              headers: ['Thị trường', 'Thuế nhập khẩu (%)', 'Chi phí vận chuyển (USD/container)', 'Sức mua (USD/người/năm)', 'Rủi ro thanh toán (1-5)'],
              rows: [
                ['Thái Lan', '10%', '1,200', '6,500', '2'],
                ['Malaysia', '7%', '1,800', '7,000', '3'],
                ['Indonesia', '5%', '2,600', '4,800', '4']
              ]
            },
            question: 'Chọn thị trường có tiềm năng cao nhất cho xuất khẩu sản phẩm nồi inox, đảm bảo cân bằng giữa chi phí, sức mua và rủi ro.',
            options: ['Thái Lan', 'Malaysia', 'Indonesia'],
            correctAnswer: 0,
            explanation: 'Thái Lan có mức chi phí vận chuyển thấp, sức mua ổn định, và rủi ro thanh toán thấp (2/5). Dù thuế cao hơn Malaysia, tổng lợi ích thương mại vẫn cao nhất.'
          },
          {
            id: 2,
            title: 'Đàm phán điều khoản hợp đồng ngoại thương theo Incoterms',
            type: 'table-analysis',
            data: {
              headers: ['Phương án', 'Mức chi phí do công ty chịu', 'Mức độ kiểm soát hàng hóa', 'Mức độ rủi ro', 'Mức độ thuận tiện cho khách hàng'],
              rows: [
                ['FOB (Free On Board)', 'Thấp', 'Trung bình', 'Thấp', 'Trung bình'],
                ['CIF (Cost, Insurance, Freight)', 'Trung bình', 'Cao', 'Trung bình', 'Cao'],
                ['DDP (Delivered Duty Paid)', 'Cao', 'Rất cao', 'Cao', 'Rất cao']
              ]
            },
            question: 'Chọn điều kiện giao hàng tối ưu nhất nếu công ty muốn cạnh tranh nhưng vẫn đảm bảo an toàn giao dịch.',
            options: ['FOB', 'CIF', 'DDP'],
            correctAnswer: 1,
            explanation: 'CIF giúp công ty kiểm soát vận chuyển và bảo hiểm hàng hóa, đảm bảo an toàn, đồng thời thuận tiện cho khách hàng quốc tế — một lựa chọn cân bằng giữa chi phí và rủi ro.'
          },
          {
            id: 3,
            title: 'Kiểm tra bộ chứng từ xuất khẩu và xử lý sai sót',
            type: 'table-analysis',
            data: {
              headers: ['Loại chứng từ', 'Thông tin chính', 'Ghi chú'],
              rows: [
                ['Invoice', 'Số lượng: 1.000 thùng nồi inox', '—'],
                ['Packing List', 'Số lượng: 1.200 thùng nồi inox', '⚠ Không trùng khớp'],
                ['Bill of Lading', 'Cảng đi: Hải Phòng / Cảng đến: Bangkok', '—']
              ]
            },
            question: 'Xác định lỗi sai và đề xuất hướng xử lý (sửa Packing List hoặc lập bộ chứng từ mới).',
            options: [
              'Sai lệch số lượng giữa Invoice và Packing List',
              'Sai tên cảng đến',
              'Thiếu Bill of Lading',
              'Không có lỗi'
            ],
            correctAnswer: 0,
            explanation: 'Bộ chứng từ cần trùng khớp 100% giữa các tài liệu. Việc lệch số lượng khiến ngân hàng nghi ngờ tính xác thực — phải sửa hoặc phát hành lại Packing List.'
          }
        ]
      },
      {
        id: 2,
        name: 'Nhân viên chứng từ thương mại',
        description: 'Nhân viên chứng từ thương mại đảm nhận việc xử lý, kiểm tra và chuẩn bị các bộ chứng từ như invoice, packing list, bill of lading… để đảm bảo hàng hóa được thông quan suôn sẻ. Nghề này phù hợp với người cẩn thận, tỉ mỉ và hiểu rõ quy trình xuất nhập khẩu.',
        context: 'Phòng chứng từ đang chuẩn bị hồ sơ cho lô hàng cà phê sang Nhật Bản theo phương thức thanh toán L/C.',
        missions: [
          {
            id: 1,
            title: 'Chuẩn bị bộ hồ sơ gồm Invoice, Packing List, Bill of Lading',
            type: 'form-input',
            data: {
              headers: ['Thông tin', 'Giá trị đúng'],
              rows: [
                ['Tên hàng', 'Coffee Bean Type A'],
                ['Số lượng', '20 tấn'],
                ['Đơn giá', '3.200 USD/tấn'],
                ['Tổng giá trị', '64.000 USD']
              ]
            },
            question: 'Điền thông tin vào mẫu biểu đúng định dạng; sai sót trên 1 ký tự khiến hồ sơ bị "trả lại".',
            correctAnswer: '64000',
            explanation: 'Tổng giá trị = 20 × 3.200 = 64.000 USD. Đảm bảo đồng nhất thông tin giữa Invoice, Packing List và hợp đồng.'
          },
          {
            id: 2,
            title: 'So khớp chứng từ giữa người bán, người mua và ngân hàng phát hành L/C',
            type: 'comparison',
            data: {
              contract: { value: '64.000 USD', condition: 'FOB Hải Phòng' },
              lc: { value: '46.000 USD', condition: 'FOB Hải Phòng' }
            },
            question: 'Xác định lỗi và đề xuất cách xử lý: chỉnh sửa L/C hay yêu cầu phát hành mới.',
            options: [
              'Giá trị L/C không khớp (46.000 ≠ 64.000)',
              'Điều kiện giao hàng sai',
              'Không có lỗi',
              'Thiếu chữ ký'
            ],
            correctAnswer: 0,
            explanation: 'Yêu cầu phát hành lại L/C để tránh rủi ro thanh toán thiếu.'
          },
          {
            id: 3,
            title: 'Phát hiện sai lệch thông tin và đề xuất hướng xử lý',
            type: 'multiple-choice',
            context: 'Ngân hàng thông báo: "Tên hàng trên vận đơn bị ghi sai thành Coffee Blend A thay vì Coffee Bean A."',
            question: 'Chọn phương án xử lý',
            options: [
              'Xin xác nhận bổ sung của ngân hàng phát hành',
              'Sửa và gửi lại chứng từ',
              'Phát hành vận đơn mới'
            ],
            correctAnswer: 0,
            explanation: 'Sai tên hàng là lỗi nhẹ → có thể xin xác nhận bổ sung, không cần phát hành vận đơn mới (tốn chi phí và thời gian).'
          }
        ]
      },
      {
        id: 3,
        name: 'Chuyên viên mua hàng quốc tế',
        description: 'Chuyên viên mua hàng quốc tế chịu trách nhiệm tìm kiếm, đánh giá và làm việc với nhà cung cấp ở nước ngoài nhằm đảm bảo doanh nghiệp có nguồn hàng ổn định, chất lượng và tối ưu chi phí. Công việc này yêu cầu kỹ năng đàm phán, phân tích thị trường và khả năng làm việc với đối tác toàn cầu.',
        context: 'Doanh nghiệp cần chọn đối tác cung cấp linh kiện điện tử.',
        missions: [
          {
            id: 1,
            title: 'Tìm kiếm và so sánh báo giá từ các nhà cung cấp nước ngoài',
            type: 'table-analysis',
            data: {
              headers: ['Nhà cung cấp', 'Giá/1000 linh kiện (USD)', 'Thời gian giao (ngày)', 'Độ tin cậy (1-5)', 'Bảo hành (tháng)'],
              rows: [
                ['KoreaTech', '15,500', '10', '5', '12'],
                ['ChinaParts', '13,800', '5', '3', '6'],
                ['MyElec', '14,600', '8', '4', '9']
              ]
            },
            question: 'Phân tích bảng dữ liệu và chọn đối tác phù hợp nhất nếu mục tiêu là "chất lượng ổn định, thời gian giao hàng nhanh".',
            options: ['KoreaTech', 'ChinaParts', 'MyElec'],
            correctAnswer: 0,
            explanation: 'Mặc dù giá cao hơn, nhưng độ tin cậy và bảo hành tốt nhất → ổn định sản xuất dài hạn.'
          },
          {
            id: 2,
            title: 'Đánh giá chi phí logistics trong từng phương án nhập hàng',
            type: 'multiple-choice',
            question: 'Chọn phương thức thanh toán phù hợp nhất',
            options: [
              'L/C: An toàn, phí cao',
              'T/T trả trước: Nhanh, rủi ro cao',
              'DP (Documents against Payment): Trung bình cả hai'
            ],
            correctAnswer: 2,
            explanation: 'An toàn hơn T/T, chi phí thấp hơn L/C → phù hợp với giao dịch đầu tiên quy mô vừa.'
          },
          {
            id: 3,
            title: 'Đàm phán hợp đồng và quản lý lịch giao hàng',
            type: 'situation',
            context: 'Hệ thống thông báo "lô hàng trễ 5 ngày do thời tiết xấu".',
            question: 'Lựa chọn phương án phản ứng',
            options: [
              'Giữ nguyên hợp đồng',
              'Yêu cầu giảm giá',
              'Đổi sang nhà cung cấp khác'
            ],
            correctAnswer: 1,
            explanation: 'Giữ hợp đồng nhưng bảo vệ lợi ích doanh nghiệp → vừa duy trì quan hệ, vừa giảm thiệt hại.'
          }
        ]
      },
      {
        id: 4,
        name: 'Nhân viên xuất nhập khẩu tại doanh nghiệp sản xuất',
        description: 'Nhân viên xuất nhập khẩu trong doanh nghiệp sản xuất trực tiếp quản lý việc đưa nguyên liệu vào nhà máy và xuất hàng thành phẩm ra thị trường quốc tế. Họ làm việc sát với các bộ phận sản xuất, kho và logistics để đảm bảo tiến độ giao hàng và tuân thủ quy định thương mại.',
        context: 'Công ty dệt may chuẩn bị xuất 5.000 áo khoác sang Đức. Cảng đi Hải Phòng, cảng đến Hamburg.',
        missions: [
          {
            id: 1,
            title: 'Lên kế hoạch xuất khẩu sản phẩm sang thị trường mục tiêu',
            type: 'multiple-choice',
            question: 'Chọn quy trình đóng gói đúng tiêu chuẩn',
            options: [
              'Bao PE + thùng carton + pallet gỗ',
              'Túi nilon đơn + thùng nhựa',
              'Bao vải thô + bó bằng dây kẽm'
            ],
            correctAnswer: 0,
            explanation: 'Đạt tiêu chuẩn xuất sang EU, chống ẩm mốc và bảo vệ hàng trong container.'
          },
          {
            id: 2,
            title: 'Theo dõi tiến độ sản xuất – giao hàng',
            type: 'situation',
            context: 'Hãng tàu báo chuyển lịch đi chậm 2 ngày.',
            question: 'Chọn phản ứng phù hợp',
            options: [
              'Giữ lịch xuất, cập nhật lại chứng từ',
              'Hủy booking',
              'Chuyển sang hãng tàu khác'
            ],
            correctAnswer: 0,
            explanation: 'Không ảnh hưởng lớn đến thanh toán; chỉ cần cập nhật lại vận đơn và booking note.'
          },
          {
            id: 3,
            title: 'Làm việc với đơn vị vận tải và hải quan khi có phát sinh',
            type: 'situation',
            context: 'Phòng cấp C/O chưa đóng dấu xác nhận.',
            question: 'Lựa chọn xử lý',
            options: [
              'Gửi hàng trước, bổ sung sau',
              'Liên hệ phòng thương mại xin cấp khẩn',
              'Tạm hoãn giao hàng'
            ],
            correctAnswer: 1,
            explanation: 'Cấp khẩn trong 24h giúp đảm bảo hàng đi đúng hạn, tránh mất thời gian và chi phí lưu kho.'
          }
        ]
      },
      {
        id: 5,
        name: 'Chuyên viên quan hệ đối tác quốc tế',
        description: 'Chuyên viên quan hệ đối tác quốc tế xây dựng, duy trì và phát triển mối quan hệ với các đối tác nước ngoài trong các lĩnh vực như giáo dục, kinh doanh, tổ chức phi lợi nhuận hoặc thương mại. Họ đóng vai trò kết nối, đàm phán và tạo cơ hội hợp tác mới cho tổ chức.',
        context: 'Công ty bạn muốn mở rộng hợp tác với tập đoàn Singapore trong lĩnh vực đồ gỗ.',
        missions: [
          {
            id: 1,
            title: 'Thu thập thông tin về doanh nghiệp đối tác',
            type: 'table-analysis',
            data: {
              headers: ['Tiêu chí', 'Công ty A', 'Công ty B'],
              rows: [
                ['Doanh thu 2024 (triệu USD)', '40', '25'],
                ['Độ uy tín (1-5)', '5', '3'],
                ['Số năm hợp tác quốc tế', '7', '10'],
                ['Độ trễ thanh toán (%)', '0', '10']
              ]
            },
            question: 'Chọn đối tác có độ tin cậy và tiềm năng hợp tác lâu dài cao nhất.',
            options: ['Công ty A', 'Công ty B'],
            correctAnswer: 0,
            explanation: 'Doanh thu lớn, uy tín cao, không trễ thanh toán → độ tin cậy vượt trội so với Công ty B.'
          },
          {
            id: 2,
            title: 'Soạn thảo thư chào hàng và đề xuất hợp tác thương mại',
            type: 'email-writing',
            template: 'Dear [Partner Name], We are [Company Name], a Vietnamese enterprise specializing in [Product]. We are looking forward to [goal].',
            question: 'Chọn giọng văn phù hợp (formal / friendly / concise) để đạt điểm "tác phong quốc tế".',
            options: ['Formal', 'Friendly', 'Concise'],
            correctAnswer: 0,
            explanation: 'Email quốc tế yêu cầu giọng văn trang trọng, chuyên nghiệp.'
          },
          {
            id: 3,
            title: 'Chuẩn bị nội dung trình bày trong buổi ký kết hợp đồng',
            type: 'situation',
            context: 'Đối tác yêu cầu giảm giá 10%.',
            question: 'Chọn phản ứng phù hợp',
            options: [
              'Chấp nhận ngay',
              'Từ chối thẳng thừng',
              'Đề xuất giảm 5% đổi lấy tăng số lượng đơn hàng'
            ],
            correctAnswer: 2,
            explanation: 'Giữ lợi nhuận và tạo quan hệ đôi bên cùng có lợi — chiến lược đàm phán cân bằng.'
          }
        ]
      }
    ]
  },
  
  2: {
    // MARKETING
    careerName: 'MARKETING',
    description: 'Thế giới của các chiến lược quảng bá, xây dựng thương hiệu và phát triển thị trường toàn cầu. Lĩnh vực này kết hợp giữa nghiên cứu hành vi người tiêu dùng, quản trị sản phẩm, và truyền thông quốc tế nhằm giúp doanh nghiệp mở rộng hoạt động ra nước ngoài.',
    totalJobs: 5,
    totalMissions: 15,
    badge: 'Nhà chiến lược quốc tế',
    jobs: [
      {
        id: 1,
        name: 'Chuyên viên nghiên cứu thị trường quốc tế',
        description: 'Thu thập và phân tích dữ liệu từ nhiều quốc gia để đánh giá nhu cầu, xu hướng và hành vi người tiêu dùng toàn cầu.',
        context: 'Tập đoàn ViệtFresh đang muốn mở rộng sang thị trường Nhật Bản với sản phẩm nước ép trái cây nhiệt đới.',
        missions: [
          {
            id: 1,
            title: 'Phân tích dữ liệu thị trường',
            type: 'table-analysis',
            question: 'Chọn loại sản phẩm nên được chọn làm sản phẩm chủ lực',
            options: ['Nước ép xoài', 'Nước ép dứa', 'Nước ép chanh dây'],
            correctAnswer: 2,
            explanation: 'Có mức độ yêu thích cao nhất (70%), tần suất tiêu dùng cao (6 lần/tháng) và hình ảnh tốt cho sức khỏe (5/5).'
          },
          {
            id: 2,
            title: 'Xác định nhóm khách hàng mục tiêu',
            type: 'table-analysis',
            question: 'Chọn nhóm khách hàng nên tập trung cho chiến dịch',
            options: ['Nhóm A (18-25)', 'Nhóm B (26-35)', 'Nhóm C (36-50)'],
            correctAnswer: 1,
            explanation: 'Thu nhập cao, quan tâm đến sức khỏe và xu hướng "natural product" – trùng khớp định vị sản phẩm.'
          },
          {
            id: 3,
            title: 'Lựa chọn kênh phân phối ban đầu',
            type: 'table-analysis',
            question: 'Chọn kênh phân phối phù hợp nhất cho giai đoạn thâm nhập thị trường',
            options: ['Chuỗi siêu thị', 'Cửa hàng tiện lợi', 'Bán online'],
            correctAnswer: 2,
            explanation: 'Chi phí thấp, thời gian hoàn vốn ngắn, có thể thử nghiệm nhanh phản ứng thị trường.'
          }
        ]
      },
      {
        id: 2,
        name: 'Chuyên viên truyền thông & quảng cáo quốc tế',
        description: 'Xây dựng kế hoạch truyền thông cho nhiều thị trường khác nhau, đảm bảo thông điệp phù hợp với văn hóa.',
        context: 'Sau khi ra mắt ở Nhật, công ty muốn thực hiện chiến dịch quảng cáo kỹ thuật số đầu tiên.',
        missions: [
          {
            id: 1,
            title: 'Chọn thông điệp truyền thông',
            question: 'Chọn khẩu hiệu phù hợp nhất',
            options: ['Pure Energy from the Tropics', 'Freshness for Your Morning', 'A Taste of Vietnam, A Gift from Nature'],
            correctAnswer: 2,
            explanation: 'Truyền tải cả yếu tố xuất xứ Việt Nam và thông điệp "tự nhiên", đồng thời có chỉ số ghi nhớ thương hiệu cao nhất.'
          },
          {
            id: 2,
            title: 'Chọn nền tảng quảng cáo chính',
            question: 'Chọn nền tảng quảng cáo phù hợp với giới trẻ và ngân sách giới hạn',
            options: ['YouTube', 'Instagram', 'TV Local'],
            correctAnswer: 1,
            explanation: 'Chi phí thấp, tương tác cao nhất (7.8%) và phù hợp nhất với nhóm mục tiêu (18–35 tuổi).'
          },
          {
            id: 3,
            title: 'Đánh giá hiệu quả chiến dịch',
            question: 'Tính chi phí trung bình cho mỗi người theo dõi mới (3 triệu JPY / 6000 followers)',
            correctAnswer: '500',
            explanation: '3,000,000 JPY / 6,000 new followers = 500 JPY/người.'
          }
        ]
      },
      {
        id: 3,
        name: 'Chuyên viên thương hiệu (Brand Executive)',
        description: 'Quản lý hình ảnh, giá trị và trải nghiệm của thương hiệu trong mắt khách hàng.',
        context: 'Công ty muốn định vị thương hiệu "nước ép Việt Nam cao cấp" tại thị trường quốc tế.',
        missions: [
          {
            id: 1,
            title: 'Xác định giá trị thương hiệu cốt lõi',
            question: 'Chọn thuộc tính thương hiệu chính',
            options: ['Tự nhiên, thuần Việt', 'Cao cấp, tinh tế', 'Trẻ trung, năng động'],
            correctAnswer: 0,
            explanation: 'Đây là yếu tố tạo khác biệt với các đối thủ Thái và Nhật, gắn với hình ảnh vùng nguyên liệu Việt Nam.'
          },
          {
            id: 2,
            title: 'Chọn thiết kế bao bì phù hợp',
            question: 'Chọn thiết kế tối ưu',
            options: ['Thiết kế A', 'Thiết kế B', 'Thiết kế C'],
            correctAnswer: 1,
            explanation: 'Dù chi phí cao hơn một chút, nhưng thiết kế B cân bằng tốt giữa nổi bật và hình ảnh thương hiệu Việt.'
          },
          {
            id: 3,
            title: 'Đo lường giá trị thương hiệu',
            question: 'Tính tốc độ tăng trưởng nhận diện thương hiệu (từ 25% lên 50%)',
            correctAnswer: '100',
            explanation: '(50 – 25) / 25 × 100 = 100%. Thương hiệu tăng gấp đôi độ nhận diện.'
          }
        ]
      },
      {
        id: 4,
        name: 'Chuyên viên kinh doanh quốc tế (Sales Executive)',
        description: 'Tìm kiếm khách hàng, đàm phán và chăm sóc các đối tác nước ngoài.',
        context: 'Bạn là nhân viên bán hàng của VietFresh, phụ trách khu vực Singapore.',
        missions: [
          {
            id: 1,
            title: 'Lựa chọn chính sách giá',
            question: 'Chọn phương án giá phù hợp khi thâm nhập thị trường',
            options: ['Phương án A', 'Phương án B', 'Phương án C'],
            correctAnswer: 1,
            explanation: 'Giá cạnh tranh, có chính sách thu hút khách mới → phù hợp khi thâm nhập thị trường.'
          },
          {
            id: 2,
            title: 'Phân loại khách hàng tiềm năng',
            question: 'Chọn khách hàng ưu tiên',
            options: ['Khách hàng A', 'Khách hàng B', 'Khách hàng C'],
            correctAnswer: 0,
            explanation: 'Thanh toán đúng hạn, ổn định và lâu dài hơn.'
          },
          {
            id: 3,
            title: 'Xử lý từ chối mua hàng',
            context: 'Khách hàng nói: "Giá của bạn vẫn cao hơn đối thủ 5%."',
            question: 'Chọn cách xử lý',
            options: ['Giảm giá 5% ngay', 'Giữ nguyên giá, nhấn mạnh chất lượng', 'Đề xuất dùng thử miễn phí 1 tháng'],
            correctAnswer: 2,
            explanation: 'Tạo cơ hội trải nghiệm để chứng minh chất lượng mà không phá vỡ mức giá.'
          }
        ]
      },
      {
        id: 5,
        name: 'Phân tích dữ liệu Marketing (Marketing Analyst)',
        description: 'Sử dụng công cụ thống kê và dữ liệu khách hàng để đánh giá hiệu quả chiến dịch.',
        context: 'Công ty cần đánh giá hiệu quả chiến dịch quảng cáo tại Thái Lan.',
        missions: [
          {
            id: 1,
            title: 'Phân tích dữ liệu quảng cáo',
            question: 'Tính CTR và chọn kênh hiệu quả nhất',
            options: ['Facebook (2%)', 'Google Ads (2.5%)', 'TikTok (4%)'],
            correctAnswer: 2,
            explanation: 'TikTok có CTR cao nhất và chi phí thấp nhất → hiệu quả tối ưu.'
          },
          {
            id: 2,
            title: 'Tính chi phí/khách hàng (CPA)',
            question: 'Chọn kênh có CPA thấp nhất',
            options: ['Facebook', 'Google Ads', 'TikTok'],
            correctAnswer: 2,
            explanation: 'TikTok: 3.2 USD/khách hàng (thấp nhất).'
          },
          {
            id: 3,
            title: 'Viết báo cáo rút ra kết luận',
            question: 'Chọn kết luận đúng nhất',
            options: ['Google hiệu quả nhất vì khách hàng chất lượng cao', 'Facebook cân bằng chi phí và lượt tiếp cận', 'TikTok hiệu quả nhất về chi phí và tỷ lệ chuyển đổi'],
            correctAnswer: 2,
            explanation: 'TikTok đạt cả CTR và CPA tốt nhất → tối ưu ROI cho chiến dịch.'
          }
        ]
      }
    ]
  },

  3: {
    // TÀI CHÍNH - NGÂN HÀNG - ĐẦU TƯ
    careerName: 'TÀI CHÍNH - NGÂN HÀNG - ĐẦU TƯ',
    description: 'Thế giới của các dòng vốn, quyết định tài chính và hoạt động đầu tư trong phạm vi quốc tế.',
    totalJobs: 5,
    totalMissions: 15,
    badge: 'Nhà tài chính toàn cầu',
    jobs: [
      {
        id: 1,
        name: 'Chuyên viên tài chính doanh nghiệp (Financial Analyst)',
        description: 'Quản lý dòng tiền, lập kế hoạch tài chính và phân tích hiệu quả hoạt động của công ty.',
        context: 'Công ty GlobalFruit Co. muốn mở rộng sản xuất tại Việt Nam.',
        missions: [
          {
            id: 1,
            title: 'Phân tích hiệu quả đầu tư (NPV)',
            question: 'Tính NPV và quyết định có nên đầu tư không',
            correctAnswer: '-0.14',
            explanation: 'NPV = -0.14 triệu USD (âm) → không nên đầu tư.'
          },
          {
            id: 2,
            title: 'Đánh giá cơ cấu vốn',
            question: 'Tính WACC',
            correctAnswer: '8.8',
            explanation: 'WACC = 0.4×6% + 0.2×8% + 0.4×12% = 8.8%'
          },
          {
            id: 3,
            title: 'So sánh các phương án tài trợ',
            question: 'Chọn phương án tối ưu',
            options: ['Phương án A', 'Phương án B', 'Phương án C'],
            correctAnswer: 1,
            explanation: 'Cân bằng giữa rủi ro và lợi nhuận; ROE tốt mà chưa vượt ngưỡng rủi ro.'
          }
        ]
      },
      {
        id: 2,
        name: 'Kế toán doanh nghiệp (Accountant)',
        description: 'Ghi nhận, kiểm tra và tổng hợp các nghiệp vụ tài chính hằng ngày.',
        context: 'Bạn là kế toán tại công ty xuất khẩu gạo.',
        missions: [
          {
            id: 1,
            title: 'Định khoản nghiệp vụ',
            question: 'Định khoản mua hàng hóa 200 triệu, thuế 10%, chưa thanh toán',
            correctAnswer: 'Nợ 156, Nợ 1331, Có 331',
            explanation: 'Ghi nhận đúng nguyên tắc dồn tích.'
          },
          {
            id: 2,
            title: 'Xác định giá vốn hàng bán (FIFO)',
            question: 'Tính giá vốn',
            correctAnswer: '2800000',
            explanation: 'Giá vốn = (100×10) + (150×12) = 2,800 nghìn VND'
          },
          {
            id: 3,
            title: 'Tính lợi nhuận gộp',
            question: 'Tính lợi nhuận gộp',
            correctAnswer: '3000',
            explanation: 'Lợi nhuận gộp = 10,000 – 7,000 = 3,000 triệu VND'
          }
        ]
      },
      {
        id: 3,
        name: 'Phân tích đầu tư (Investment Analyst)',
        description: 'Nghiên cứu thị trường, đánh giá doanh nghiệp và phân tích rủi ro–lợi nhuận.',
        context: 'Quỹ đầu tư quốc tế VinaCapital Edge đang cân nhắc đầu tư vào 3 cổ phiếu.',
        missions: [
          {
            id: 1,
            title: 'Tính tỷ suất lợi nhuận kỳ vọng',
            question: 'Chọn cổ phiếu có lợi nhuận kỳ vọng cao nhất',
            options: ['Cổ phiếu A (7%)', 'Cổ phiếu B (8%)', 'Cổ phiếu C (5%)'],
            correctAnswer: 1,
            explanation: 'Cổ phiếu B có tỷ suất lợi nhuận kỳ vọng cao nhất.'
          },
          {
            id: 2,
            title: 'Phân tích rủi ro',
            question: 'Chọn cổ phiếu an toàn nhất',
            options: ['Cổ phiếu A', 'Cổ phiếu B', 'Cổ phiếu C'],
            correctAnswer: 2,
            explanation: 'Cổ phiếu C có độ lệch chuẩn thấp nhất (3%).'
          },
          {
            id: 3,
            title: 'So sánh P/E ratio',
            question: 'Chọn cổ phiếu có P/E tốt nhất',
            options: ['Cổ phiếu A (15)', 'Cổ phiếu B (12)', 'Cổ phiếu C (15)'],
            correctAnswer: 1,
            explanation: 'Cổ phiếu B có P/E thấp nhất → định giá hấp dẫn.'
          }
        ]
      },
      {
        id: 4,
        name: 'Chuyên viên quản lý rủi ro tài chính (Risk Analyst)',
        description: 'Phân tích các yếu tố có thể gây ảnh hưởng đến hoạt động tài chính.',
        context: 'Ngân hàng AsiaTrade Bank cần đánh giá rủi ro danh mục cho vay.',
        missions: [
          {
            id: 1,
            title: 'Đánh giá xác suất vỡ nợ',
            question: 'Chọn doanh nghiệp rủi ro cao nhất',
            options: ['Doanh nghiệp A', 'Doanh nghiệp B', 'Doanh nghiệp C'],
            correctAnswer: 2,
            explanation: 'Doanh nghiệp C: Nợ cao, âm dòng tiền → xác suất vỡ nợ lớn.'
          },
          {
            id: 2,
            title: 'Mô phỏng rủi ro tỷ giá',
            question: 'Tính tác động khi tỷ giá tăng 3%',
            correctAnswer: '7500000000',
            explanation: 'Tác động = 10,000,000 × (25,000 × 1.03 – 25,000) = 7.5 tỷ VND'
          },
          {
            id: 3,
            title: 'Lập kế hoạch phòng ngừa rủi ro',
            question: 'Chọn phương án phòng ngừa tốt nhất',
            options: ['Không bảo hiểm', 'Hợp đồng kỳ hạn', 'Quyền chọn ngoại tệ'],
            correctAnswer: 1,
            explanation: 'Chi phí thấp hơn quyền chọn, bảo vệ 100% rủi ro tỷ giá.'
          }
        ]
      },
      {
        id: 5,
        name: 'Cố vấn tài chính doanh nghiệp',
        description: 'Hỗ trợ doanh nghiệp trong việc hoạch định chiến lược tài chính.',
        context: 'Bạn là cố vấn cho một startup đang kêu gọi vốn.',
        missions: [
          {
            id: 1,
            title: 'Xác định định giá công ty (DCF)',
            question: 'Tính giá trị hiện tại của công ty',
            correctAnswer: '71.5',
            explanation: 'PV = 20/1.1 + 30/1.1² + 40/1.1³ = 71.5 tỷ VND'
          },
          {
            id: 2,
            title: 'Tư vấn chia cổ phần',
            question: 'Tính tỷ lệ cổ phần cho nhà đầu tư B',
            correctAnswer: '17.1',
            explanation: '15 / (70 + 25) = 17.1%'
          },
          {
            id: 3,
            title: 'Lựa chọn chiến lược thoái vốn',
            question: 'Chọn chiến lược tối ưu',
            options: ['IPO', 'Bán cho quỹ', 'Bán cho đối tác chiến lược'],
            correctAnswer: 2,
            explanation: 'Cân bằng giữa lợi nhuận, rủi ro và thời gian thu hồi vốn.'
          }
        ]
      }
    ]
  },

  4: {
    // CHUỖI CUNG ỨNG & LOGISTICS
    careerName: 'CHUỖI CUNG ỨNG & LOGISTICS',
    description: 'Thế giới của hệ thống vận hành kết nối sản xuất, phân phối và tiêu dùng.',
    totalJobs: 5,
    totalMissions: 15,
    badge: 'Bậc thầy Chuỗi Cung ứng Toàn cầu',
    jobs: [
      {
        id: 1,
        name: 'Chuyên viên Hoạch định Nhu cầu (Demand Planner)',
        description: 'Dự báo lượng hàng cần thiết dựa trên dữ liệu bán hàng và xu hướng thị trường.',
        context: 'Công ty GlobalFresh Drinks đang phân phối nước ép trái cây tại Việt Nam.',
        missions: [
          {
            id: 1,
            title: 'Dự báo nhu cầu theo xu hướng',
            question: 'Dự báo nhu cầu tháng 7 (tăng đều 300 thùng/tháng)',
            correctAnswer: '3600',
            explanation: 'Tháng 6 là 3,300 → tháng 7 = 3,600 thùng.'
          },
          {
            id: 2,
            title: 'Tính mức tồn kho an toàn',
            question: 'Tính Safety Stock',
            correctAnswer: '330',
            explanation: 'Safety Stock ≈ 330 thùng'
          },
          {
            id: 3,
            title: 'Quyết định kế hoạch đặt hàng',
            question: 'Tính lượng đặt hàng cần thiết',
            correctAnswer: '3000',
            explanation: '3,600 + 330 – 900 = 3,030 → đặt 3,000 thùng'
          }
        ]
      },
      {
        id: 2,
        name: 'Quản lý Kho (Warehouse Supervisor)',
        description: 'Tổ chức, giám sát và tối ưu toàn bộ hoạt động trong kho hàng.',
        context: 'Nhà kho trung tâm đang chuẩn bị nhập 12 container hàng mới.',
        missions: [
          {
            id: 1,
            title: 'Tính tỷ lệ lấp đầy kho',
            question: 'Tính tỷ lệ sử dụng kho (4250/5000)',
            correctAnswer: '85',
            explanation: '4,250 / 5,000 = 85%'
          },
          {
            id: 2,
            title: 'Chọn phương án lưu kho tối ưu',
            question: 'Sắp xếp vị trí lô hàng A, B, C',
            correctAnswer: 'A gần cửa, C trung tâm, B xa cửa',
            explanation: 'Hàng xuất nhiều để sát cửa giảm thời gian xử lý.'
          },
          {
            id: 3,
            title: 'Kiểm tra sai lệch tồn kho',
            question: 'Tính sai lệch (3500 - 3420)',
            correctAnswer: '-80',
            explanation: 'Sai lệch = –80 thùng'
          }
        ]
      },
      {
        id: 3,
        name: 'Điều phối Vận tải Quốc tế',
        description: 'Quản lý quá trình vận chuyển hàng hóa qua biên giới.',
        context: 'Công ty chuẩn bị xuất lô hàng nước ép đi Hamburg (Đức).',
        missions: [
          {
            id: 1,
            title: 'Chọn tuyến vận tải tối ưu',
            question: 'Chọn tuyến tốt nhất',
            options: ['Tuyến A', 'Tuyến B', 'Tuyến C'],
            correctAnswer: 0,
            explanation: 'Tuyến A cân bằng tốt nhất giữa thời gian – chi phí – độ tin cậy.'
          },
          {
            id: 2,
            title: 'Tính chi phí vận chuyển/đơn vị',
            question: 'Tính chi phí/thùng (3000 USD / 12000 thùng)',
            correctAnswer: '0.25',
            explanation: '3,000 / 12,000 = 0.25 USD/thùng'
          },
          {
            id: 3,
            title: 'Xử lý rủi ro container',
            question: 'Container bị rolled, chọn cách xử lý',
            options: ['Giữ booking mới', 'Chuyển sang hãng tàu khác', 'Thông báo khách hàng lùi đơn'],
            correctAnswer: 1,
            explanation: 'Trễ chuyến sẽ phá vỡ hợp đồng → ưu tiên giao đúng hạn.'
          }
        ]
      },
      {
        id: 4,
        name: 'Chuyên viên phân tích chuỗi cung ứng',
        description: 'Thu thập và phân tích dữ liệu để đánh giá hiệu quả vận hành.',
        context: 'Công ty muốn giảm chi phí chuỗi cung ứng 10% trong quý này.',
        missions: [
          {
            id: 1,
            title: 'Phân tích chi phí logistics',
            question: 'Tính tổng chi phí',
            correctAnswer: '38',
            explanation: 'Tổng chi phí = 38 tỷ VND'
          },
          {
            id: 2,
            title: 'Đánh giá phương án tối ưu',
            question: 'Chọn phương án đạt mục tiêu giảm 10%',
            options: ['Phương án A (8%)', 'Phương án B (12%)', 'Phương án C (15%)'],
            correctAnswer: 1,
            explanation: 'B đạt mục tiêu, rủi ro chấp nhận được.'
          },
          {
            id: 3,
            title: 'Tính mức tiết kiệm thực tế',
            question: 'Tính tiết kiệm khi chọn B (38 × 12%)',
            correctAnswer: '4.56',
            explanation: '38 × 12% = 4.56 tỷ VND'
          }
        ]
      },
      {
        id: 5,
        name: 'Quản lý Rủi ro Chuỗi cung ứng',
        description: 'Nhận diện các yếu tố có thể làm gián đoạn hoạt động.',
        context: 'Cơn bão đang tiến vào Philippines – nơi cung cấp nguyên liệu dứa.',
        missions: [
          {
            id: 1,
            title: 'Đánh giá mức độ rủi ro',
            question: 'Xác định rủi ro nghiêm trọng nhất',
            options: ['Bão làm gián đoạn cảng', 'Nhà cung cấp thay đổi giá', 'Thiếu container rỗng'],
            correctAnswer: 0,
            explanation: 'Cả xác suất và tác động đều cao → mức độ rủi ro rất lớn.'
          },
          {
            id: 2,
            title: 'Lập kế hoạch ứng phó',
            question: 'Chọn phương án xử lý',
            options: ['Chuyển nguồn sang Thái Lan', 'Duy trì hiện tại', 'Tăng tồn kho an toàn +30%'],
            correctAnswer: 0,
            explanation: 'Chuyển nguồn giúp duy trì sản xuất.'
          },
          {
            id: 3,
            title: 'Tính thiệt hại nếu không hành động',
            question: 'Tính thiệt hại (20 ngày × 2 tỷ/ngày)',
            correctAnswer: '40',
            explanation: '20 × 2 = 40 tỷ VND'
          }
        ]
      }
    ]
  },

  5: {
    // PHÂN TÍCH DỮ LIỆU
    careerName: 'PHÂN TÍCH DỮ LIỆU',
    description: 'Thế giới của tư duy logic, mô hình hoá và ra quyết định dựa trên dữ liệu.',
    totalJobs: 5,
    totalMissions: 15,
    badge: 'Bậc thầy Phân tích Dữ liệu Kinh doanh',
    jobs: [
      {
        id: 1,
        name: 'Chuyên viên phân tích dữ liệu kinh doanh',
        description: 'Thu thập và xử lý dữ liệu để đưa ra các báo cáo và đề xuất.',
        context: 'Bạn là Business Data Analyst tại công ty VietShop.',
        missions: [
          {
            id: 1,
            title: 'Phân tích doanh thu theo sản phẩm',
            question: 'Chọn sản phẩm có doanh thu cao nhất',
            options: ['Tai nghe A', 'Loa B', 'Chuột C', 'Bàn phím D', 'Webcam E'],
            correctAnswer: 3,
            explanation: 'Bàn phím D: 2.07 tỷ VND'
          },
          {
            id: 2,
            title: 'Phân tích lợi nhuận & chi phí quảng cáo',
            question: 'Chọn sản phẩm có ROI cao nhất',
            options: ['Tai nghe A', 'Loa B', 'Chuột C', 'Bàn phím D', 'Webcam E'],
            correctAnswer: 2,
            explanation: 'Chuột C có ROI 7.81 (cao nhất)'
          },
          {
            id: 3,
            title: 'Đề xuất chiến lược tối ưu',
            question: 'Chọn chiến lược cho chiến dịch tiếp theo',
            options: ['Tăng ngân sách Chuột C', 'Giảm giá Bàn phím D', 'Tập trung Tai nghe A và Webcam E'],
            correctAnswer: 0,
            explanation: 'Chuột C có ROI cao nhất → đầu tư thêm sẽ vẫn sinh lời.'
          }
        ]
      },
      {
        id: 2,
        name: 'Data Engineer (Kỹ sư dữ liệu)',
        description: 'Xây dựng và duy trì hệ thống lưu trữ, xử lý và truyền tải dữ liệu.',
        context: 'Hệ thống đang chuẩn bị Dashboard doanh thu real-time.',
        missions: [
          {
            id: 1,
            title: 'Phát hiện lỗi trong dữ liệu',
            question: 'Xác định tất cả lỗi trong bảng dữ liệu',
            correctAnswer: 'Quantity âm, Price null, Sai định dạng ngày, Tháng 13',
            explanation: 'Có 4 lỗi cần sửa.'
          },
          {
            id: 2,
            title: 'Chuẩn hóa dữ liệu',
            question: 'Chuẩn hóa Order ID, Product name, Price',
            correctAnswer: 'Đồng nhất format',
            explanation: 'Chuẩn hóa giúp hệ thống đồng nhất.'
          },
          {
            id: 3,
            title: 'Tối ưu pipeline ETL',
            question: 'Chọn cách tối ưu pipeline',
            options: ['Incremental Load', 'Chia nhỏ file', 'Tăng validation'],
            correctAnswer: 0,
            explanation: 'Incremental Load nhanh hơn 5–10 lần.'
          }
        ]
      },
      {
        id: 3,
        name: 'Market Intelligence Analyst',
        description: 'Nghiên cứu xu hướng, đánh giá nhu cầu và theo dõi hành vi khách hàng.',
        context: 'Công ty TechNova chuẩn bị tung ra mẫu tai nghe mới.',
        missions: [
          {
            id: 1,
            title: 'Phân tích thị phần cạnh tranh',
            question: 'Xác định đối thủ lớn nhất',
            options: ['SoundPro (35%)', 'MegaAudio (25%)', 'AirBeat (20%)', 'SonicX (10%)'],
            correctAnswer: 0,
            explanation: 'SoundPro chiếm 35% thị trường.'
          },
          {
            id: 2,
            title: 'Định giá theo mức giá đối thủ',
            question: 'Tính giá trung vị',
            correctAnswer: '1550000',
            explanation: 'Trung vị = (1,500,000 + 1,600,000) / 2'
          },
          {
            id: 3,
            title: 'Xác định phân khúc khách hàng',
            question: 'Chọn nhóm mục tiêu',
            options: ['15-22 tuổi', '23-30 tuổi', '31-40 tuổi'],
            correctAnswer: 1,
            explanation: 'Nhóm 23-30: quan tâm cao nhất (80%), thu nhập tốt.'
          }
        ]
      },
      {
        id: 4,
        name: 'BI Developer',
        description: 'Thiết kế dashboard, báo cáo và hệ thống trực quan hóa dữ liệu.',
        context: 'Triển khai Dashboard doanh thu real-time cho 3 sàn TMĐT.',
        missions: [
          {
            id: 1,
            title: 'Chọn KPIs cốt lõi',
            question: 'Chọn KPI quan trọng nhất cho dashboard real-time',
            options: ['Số người thêm vào giỏ', 'Doanh thu theo giờ', 'Số người xem sản phẩm'],
            correctAnswer: 1,
            explanation: 'Revenue per hour là chuẩn cho dashboard real-time.'
          },
          {
            id: 2,
            title: 'Phân chia dữ liệu theo kênh',
            question: 'Tính tổng GMV',
            correctAnswer: '6400000000',
            explanation: 'GMV = 6.4 tỷ VND'
          },
          {
            id: 3,
            title: 'Chọn loại biểu đồ phù hợp',
            question: 'Chọn biểu đồ cho dữ liệu theo thời gian',
            options: ['Pie chart', 'Line chart', 'Stacked bar chart'],
            correctAnswer: 1,
            explanation: 'Dữ liệu theo thời gian → luôn ưu tiên line chart.'
          }
        ]
      },
      {
        id: 5,
        name: 'Product Data Specialist',
        description: 'Quản lý, phân tích và tối ưu dữ liệu liên quan đến sản phẩm.',
        context: 'Phụ trách quản lý dữ liệu 30,000 SKU.',
        missions: [
          {
            id: 1,
            title: 'Kiểm tra tính đầy đủ dữ liệu',
            question: 'Xác định SKU nào thiếu thông tin',
            correctAnswer: 'SKU 102, 103, 105',
            explanation: 'Ba SKU thiếu thông tin quan trọng.'
          },
          {
            id: 2,
            title: 'Chuẩn hóa danh mục sản phẩm',
            question: 'Chuẩn hóa danh mục theo hệ thống chuẩn',
            correctAnswer: 'Mapping đúng danh mục',
            explanation: 'Chuẩn hóa giúp tránh trùng lặp.'
          },
          {
            id: 3,
            title: 'Kiểm tra sự nhất quán của giá',
            question: 'Phát hiện giá bất thường',
            options: ['Tai nghe A (350k)', 'Tai nghe B (360k)', 'Tai nghe C (4.5M)'],
            correctAnswer: 2,
            explanation: 'Tai nghe C giá gấp 12 lần → outlier.'
          }
        ]
      }
    ]
  },

  6: {
    // NGOẠI GIAO & HỢP TÁC QUỐC TẾ
    careerName: 'NGOẠI GIAO & HỢP TÁC QUỐC TẾ',
    description: 'Thế giới của kết nối, đối thoại và phối hợp giữa các quốc gia.',
    totalJobs: 5,
    totalMissions: 15,
    badge: 'Nhà Ngoại giao Kinh tế',
    jobs: [
      {
        id: 1,
        name: 'Chuyên viên Quan hệ Quốc tế',
        description: 'Xây dựng và duy trì mối quan hệ với các tổ chức nước ngoài.',
        context: 'Trung tâm Hợp tác Quốc tế Việt – Nhật.',
        missions: [
          {
            id: 1,
            title: 'Xử lý dữ liệu hợp tác song phương',
            question: 'Tính tổng số hoạt động (12+4+3+8)',
            correctAnswer: '27',
            explanation: '12 + 4 + 3 + 8 = 27 hoạt động'
          },
          {
            id: 2,
            title: 'Xếp loại mức độ ưu tiên',
            question: 'Sắp xếp độ ưu tiên từ cao → thấp',
            correctAnswer: 'Trao đổi SV, Dự án NC, Hội thảo',
            explanation: 'Tác động lớn → ưu tiên cao.'
          },
          {
            id: 3,
            title: 'Soạn thảo thông điệp ngoại giao',
            question: 'Chọn đoạn mở đầu đúng chuẩn',
            options: ['A - Informal', 'B - Formal', 'C - Casual'],
            correctAnswer: 1,
            explanation: 'B là văn phong ngoại giao chuẩn.'
          }
        ]
      },
      {
        id: 2,
        name: 'Chuyên viên Hợp tác Phát triển',
        description: 'Quản lý các dự án hợp tác quốc tế trong lĩnh vực phát triển bền vững.',
        context: 'Dự án "Năng lượng sạch vùng cao" xin tài trợ.',
        missions: [
          {
            id: 1,
            title: 'Đánh giá tiêu chí dự án',
            question: 'Dự án có đạt yêu cầu không?',
            correctAnswer: 'Không đạt',
            explanation: 'Tài chính = 2/5 < 3/5 → không đủ điều kiện.'
          },
          {
            id: 2,
            title: 'Ước tính tác động môi trường',
            question: 'Dự án có đạt yêu cầu giảm CO₂?',
            correctAnswer: 'Đạt',
            explanation: '1,200 > 1,000 tấn → đủ tiêu chuẩn.'
          },
          {
            id: 3,
            title: 'Chọn chiến lược thuyết phục',
            question: 'Chọn phương án phù hợp',
            options: ['Nhấn mạnh môi trường', 'Giấu điểm yếu', 'Đổ lỗi địa phương'],
            correctAnswer: 0,
            explanation: 'Tận dụng điểm mạnh để thương lượng.'
          }
        ]
      },
      {
        id: 3,
        name: 'Chuyên viên Tổ chức Sự kiện Quốc tế',
        description: 'Lên kế hoạch và triển khai các sự kiện có yếu tố nước ngoài.',
        context: 'Diễn đàn Đối thoại Kinh tế Việt – EU với 300 khách.',
        missions: [
          {
            id: 1,
            title: 'Lập timeline sự kiện',
            question: 'Sắp xếp thứ tự hợp lý',
            correctAnswer: 'C → A → D → B',
            explanation: 'Gửi thư → Sắp diễn giả → Tài liệu → Hậu cần.'
          },
          {
            id: 2,
            title: 'Tính ngân sách tea break',
            question: 'Tính tổng (120k × 300 × 1.1)',
            correctAnswer: '39600000',
            explanation: '120,000 × 300 × 1.1 = 39.6M VND'
          },
          {
            id: 3,
            title: 'Xử lý khủng hoảng',
            question: 'Diễn giả hủy phút cuối, chọn cách xử lý',
            options: ['Hủy sự kiện', 'Mời diễn giả trong nước', 'Giữ diễn giả EU online'],
            correctAnswer: 2,
            explanation: 'Online giữ uy tín, là giải pháp tiêu chuẩn.'
          }
        ]
      },
      {
        id: 4,
        name: 'Chuyên viên Phân tích Chính sách Quốc tế',
        description: 'Nghiên cứu xu hướng địa chính trị và đánh giá tác động.',
        context: 'Đánh giá tác động thuế carbon EU (CBAM) lên xuất khẩu VN.',
        missions: [
          {
            id: 1,
            title: 'Tính mức tăng chi phí do thuế',
            question: 'Tính chi phí (0.5 × 80 × 10000)',
            correctAnswer: '400000',
            explanation: '0.5 × 80 × 10,000 = 400,000 EUR'
          },
          {
            id: 2,
            title: 'Xác định ngành chịu ảnh hưởng nặng',
            question: 'Chọn ngành bị ảnh hưởng nhất',
            options: ['Thép', 'Xi măng', 'Dệt may', 'Nông sản'],
            correctAnswer: 0,
            explanation: 'Thép có phát thải cao nhất.'
          },
          {
            id: 3,
            title: 'Chọn khuyến nghị cho Bộ',
            question: 'Chọn khuyến nghị phù hợp',
            options: ['Khuyến khích giảm phát thải', 'Phản đối EU', 'Đề nghị bỏ thuế'],
            correctAnswer: 0,
            explanation: 'Giảm phát thải là chiến lược bền vững.'
          }
        ]
      },
      {
        id: 5,
        name: 'Ngoại giao Doanh nghiệp',
        description: 'Đại diện doanh nghiệp trong hoạt động đối ngoại và quan hệ chính phủ.',
        context: 'Tập đoàn VN sắp ký hợp tác với đối tác Hàn Quốc.',
        missions: [
          {
            id: 1,
            title: 'Đánh giá thái độ truyền thông',
            question: 'Xác định mức độ rủi ro',
            correctAnswer: 'Trung bình',
            explanation: 'Điểm tích cực – tiêu cực cân bằng.'
          },
          {
            id: 2,
            title: 'Chọn thông điệp công bố',
            question: 'Chọn thông điệp phù hợp',
            options: ['Win-win', 'Lợi nhuận lớn', 'Không quan tâm dư luận'],
            correctAnswer: 0,
            explanation: 'Win-win phù hợp ngoại giao doanh nghiệp.'
          },
          {
            id: 3,
            title: 'Tính KPIs truyền thông',
            question: 'Tính % đạt mục tiêu (1.25M / 1M)',
            correctAnswer: '125',
            explanation: 'Đạt 125% mục tiêu'
          }
        ]
      }
    ]
  },

  7: {
    // KHỞI NGHIỆP & QUẢN TRỊ SÁNG TẠO
    careerName: 'KHỞI NGHIỆP & QUẢN TRỊ SÁNG TẠO',
    description: 'Thế giới của đổi mới, tư duy sáng tạo và phát triển mô hình kinh doanh mới.',
    totalJobs: 5,
    totalMissions: 15,
    badge: 'Nhà Sáng Lập Toàn Diện',
    jobs: [
      {
        id: 1,
        name: 'Chuyên viên Nghiên cứu Thị trường',
        description: 'Thu thập và phân tích dữ liệu về khách hàng, đối thủ và xu hướng.',
        context: 'Nghiên cứu thị trường cho sản phẩm đồ uống healthy.',
        missions: [
          {
            id: 1,
            title: 'Xác định insight khách hàng',
            question: 'Chọn insight sâu nhất',
            correctAnswer: 'Gen Z muốn healthy nhưng không đánh đổi trải nghiệm',
            explanation: 'Insight gắn cảm xúc & động cơ.'
          },
          {
            id: 2,
            title: 'Phân khúc thị trường',
            question: 'Chọn nhóm early adopter',
            options: ['Nhóm A', 'Nhóm B', 'Nhóm C'],
            correctAnswer: 1,
            explanation: 'Nhóm B có động cơ mua mạnh nhất.'
          },
          {
            id: 3,
            title: 'Dự báo thị trường',
            question: 'Tính quy mô năm 2025 (800 × 1.12)',
            correctAnswer: '896',
            explanation: '800 × 1.12 = 896 tỷ'
          }
        ]
      },
      {
        id: 2,
        name: 'Chuyên viên Design Thinking',
        description: 'Áp dụng tư duy thiết kế để khám phá nhu cầu và tạo giải pháp.',
        context: 'Sinh viên liên tục bỏ học lớp tự học.',
        missions: [
          {
            id: 1,
            title: 'Xác định Problem Statement',
            question: 'Viết problem statement chuẩn',
            correctAnswer: 'SV muốn học nhưng thiếu động lực vì không thấy lợi ích',
            explanation: 'Focus vào nhu cầu cốt lõi.'
          },
          {
            id: 2,
            title: 'Tạo ý tưởng giải pháp',
            question: 'Đề xuất 3 ý tưởng khác nhau',
            correctAnswer: 'Micro-learning, Gamify, Project-based',
            explanation: 'Tất cả giải đúng nhu cầu.'
          },
          {
            id: 3,
            title: 'Chấm ý tưởng bằng Matrix',
            question: 'Chọn ý tưởng tốt nhất',
            options: ['Micro-learning', 'Gamification', 'Project-based'],
            correctAnswer: 0,
            explanation: 'Tổng điểm cao nhất, thực thi nhanh.'
          }
        ]
      },
      {
        id: 3,
        name: 'Chuyên viên Xây Mô hình Kinh doanh',
        description: 'Thiết kế mô hình tạo ra giá trị và doanh thu bền vững.',
        context: 'Ứng dụng tìm cộng sự làm dự án cho sinh viên.',
        missions: [
          {
            id: 1,
            title: 'Xây Value Proposition',
            question: 'Viết value proposition',
            correctAnswer: 'Giúp SV tìm cộng sự phù hợp, hoàn thành dự án',
            explanation: 'Truyền tải giá trị cốt lõi.'
          },
          {
            id: 2,
            title: 'Chọn mô hình doanh thu',
            question: 'Chọn mô hình phù hợp giai đoạn đầu',
            options: ['Subscription', 'Thu phí theo dự án', 'Freemium'],
            correctAnswer: 2,
            explanation: 'Freemium dễ thu hút người dùng mới.'
          },
          {
            id: 3,
            title: 'Xây BMC mini',
            question: 'Hoàn thành Customer Segment',
            correctAnswer: 'Sinh viên năm 1-3 làm project',
            explanation: 'Nhóm nhu cầu mạnh nhất.'
          }
        ]
      },
      {
        id: 4,
        name: 'Chuyên viên Kiểm chứng Thị trường',
        description: 'Đánh giá mức độ phù hợp của sản phẩm với nhu cầu thật.',
        context: 'Test MVP ứng dụng "đồ uống healthy giá rẻ".',
        missions: [
          {
            id: 1,
            title: 'Chọn MVP phù hợp',
            question: 'Chọn MVP trong ngân sách 1 triệu',
            options: ['Landing page (200k)', 'Mini booth (900k)', 'Ads A/B (1.5M)'],
            correctAnswer: 0,
            explanation: 'Landing page phù hợp ngân sách.'
          },
          {
            id: 2,
            title: 'Đọc hiểu kết quả MVP',
            question: 'Tính conversion rate',
            correctAnswer: '20% email, 6.67% trial',
            explanation: '120/600 = 20%, 40/600 = 6.67%'
          },
          {
            id: 3,
            title: 'Quyết định tiếp tục hay dừng',
            question: 'MVP có vượt ngưỡng không?',
            correctAnswer: 'Có',
            explanation: 'Vượt cả 2 ngưỡng → tiếp tục.'
          }
        ]
      },
      {
        id: 5,
        name: 'Chuyên viên Gọi Vốn & Pitching',
        description: 'Tìm kiếm nhà đầu tư và thuyết trình về tiềm năng doanh nghiệp.',
        context: 'Ứng dụng kết nối sinh viên – mentor.',
        missions: [
          {
            id: 1,
            title: 'Viết Elevator Pitch 30 chữ',
            question: 'Viết pitch ngắn gọn',
            correctAnswer: 'Kết nối SV với mentor DN, giúp định hướng nghề nghiệp',
            explanation: 'Ngắn gọn, súc tích, truyền tải giá trị.'
          },
          {
            id: 2,
            title: 'Chọn Key Metrics',
            question: 'Startup giai đoạn đầu nên tập trung metrics nào?',
            options: ['DAU & NPS', 'MRR', 'Cost per Mentor'],
            correctAnswer: 0,
            explanation: 'Early stage cần chứng minh tính hữu dụng trước revenue.'
          },
          {
            id: 3,
            title: 'Định giá pre-seed',
            question: 'Tính valuation (500M / 10%)',
            correctAnswer: '5000000000',
            explanation: '500 triệu / 10% = 5 tỷ đồng'
          }
        ]
      }
    ]
  }
};

export default careersGameplayDataNew;
