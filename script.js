const wikiSearchTerms = {
  'Hồ Chí Minh': 'Ho Chi Minh',
  'Tiểu sử': 'Ho Chi Minh biography',
  'Tên khai sinh: Nguyễn Sinh Cung': 'Nguyen Sinh Cung',
  'Phương pháp Nghệ thuật': 'Vietnamese literature',
  'Văn chính luận': 'Vietnamese political writing',
  'Tuyên ngôn độc lập': 'Vietnamese Declaration of Independence',
  'Thơ ca': 'Vietnamese poetry',
  'Nhật ký trong tù': 'Prison Diary Ho Chi Minh',
  'Di sản văn học': 'Vietnamese literary heritage'
};

const detailedContent = {
  'Hồ Chí Minh': {
    description: 'Chủ tịch nước Việt Nam Dân chủ Cộng hòa, Anh hùng giải phóng dân tộc',
    details: 'Hồ Chí Minh (1890-1969) là lãnh tụ vĩ đại của dân tộc Việt Nam, người sáng lập Đảng Cộng sản Việt Nam và nước Việt Nam Dân chủ Cộng hòa. Người là Anh hùng giải phóng dân tộc, Danh nhân văn hóa thế giới được UNESCO công nhận.'
  },
  'Tiểu sử': {
    description: 'Cuộc đời và sự nghiệp cách mạng',
    details: 'Sinh năm 1890 tại Kim Liên, Nghệ An. Năm 1911 ra đi tìm đường cứu nước, trải qua 30 năm hoạt động cách mạng ở nhiều quốc gia. Năm 1941 về nước lãnh đạo cách mạng, năm 1945 đọc Tuyên ngôn Độc lập.'
  },
  'Tên khai sinh: Nguyễn Sinh Cung': {
    description: 'Sinh năm 1890 tại Kim Liên, Nghệ An',
    details: 'Tên thật là Nguyễn Sinh Cung, sau đổi thành Nguyễn Tất Thành. Trong cuộc đời hoạt động cách mạng, Người đã sử dụng hơn 50 bí danh khác nhau như Nguyễn Ái Quốc, Lý Thụy, Tống Văn Sơ...'
  },
  'Người sinh ra trong gia đình nhà nho yêu nước': {
    description: 'Xuất thân từ gia đình nhà nho có truyền thống yêu nước',
    details: 'Cha là Nguyễn Sinh Sắc, cử nhân, từng làm quan huyện doãn. Gia đình có truyền thống yêu nước, chống Pháp. Môi trường gia đình đã ảnh hưởng sâu sắc đến tư tưởng cách mạng của Người.'
  },
  'Quê: Kim Liên, Nam Đàn, Nghệ An': {
    description: 'Vùng đất có truyền thống yêu nước, cách mạng',
    details: 'Kim Liên là làng quê nghèo ở Nghệ An, vùng đất có truyền thống đấu tranh yêu nước. Nơi đây đã sinh ra nhiều nhà yêu nước, cách mạng. Quê hương luôn là nguồn cảm hứng trong thơ văn của Người.'
  },
  '1911 ra đi tìm đường cứu nước': {
    description: 'Khởi đầu hành trình 30 năm tìm đường cứu nước',
    details: 'Năm 1911, Người lên tàu Amiral Latouche Tréville rời Việt Nam. Đây là bước ngoặt quan trọng, mở đầu cho hành trình 30 năm đi tìm con đường giải phóng dân tộc. Người đã đi qua nhiều châu lục, học tập kinh nghiệm cách mạng.'
  },
  'Tham gia nhiều tổ chức CM': {
    description: 'Hoạt động cách mạng quốc tế',
    details: 'Người tham gia Đảng Cộng sản Pháp (1920), sáng lập Hội Việt Nam Cách mạng Thanh niên (1925). Đây là những bước đi quan trọng trong quá trình hình thành tư tưởng cách mạng và chuẩn bị lực lượng cho cách mạng Việt Nam.'
  },
  '2/1941 Người về nước lãnh đạo CM': {
    description: 'Trở về sau 30 năm tìm đường cứu nước',
    details: 'Tháng 2/1941, sau 30 năm hoạt động ở nước ngoài, Người về nước trực tiếp lãnh đạo cách mạng. Đây là thời điểm quan trọng, đánh dấu bước chuyển từ chuẩn bị sang thực hiện cách mạng giải phóng dân tộc.'
  },
  '2/9/1945 Người đọc Tuyên ngôn độc lập': {
    description: 'Khoảnh khắc lịch sử tại Quảng trường Ba Đình',
    details: 'Ngày 2/9/1945, tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa. Đây là sự kiện có ý nghĩa lịch sử vô cùng to lớn.'
  },
  'Phương pháp Nghệ thuật': {
    description: 'Đặc điểm nghệ thuật trong văn chương',
    details: 'Văn chương Hồ Chí Minh mang phong cách độc đáo, kết hợp giữa truyền thống dân tộc và hiện đại. Ngôn ngữ giản dị nhưng sâu sắc, có sức thuyết phục mạnh mẽ.'
  },
  'Ngắn gọn, xúc tích': {
    description: 'Văn chương đi thẳng vào vấn đề',
    details: 'Phong cách viết của Người rất ngắn gọn, súc tích, không rườm rà. Mỗi câu văn đều có giá trị, đi thẳng vào vấn đề cần nói. Đây là đặc điểm nổi bật trong văn chương Hồ Chí Minh.'
  },
  'Tinh thần chiến đấu mạnh mẽ': {
    description: 'Thể hiện ý chí kiên cường, khát vọng độc lập',
    details: 'Văn chương của Người luôn thể hiện tinh thần chiến đấu mạnh mẽ, ý chí kiên cường không khuất phục. Khát vọng độc lập, tự do cho dân tộc là chủ đề xuyên suốt trong các tác phẩm.'
  },
  'Hăm sức, uyển thâm': {
    description: 'Sử dụng nhiều biện pháp tu từ, lời văn sắc bén',
    details: 'Người sử dụng nhiều biện pháp tu từ như ẩn dụ, nhân hóa, so sánh. Lời văn vừa hăm sức, sắc bén vừa uyển thâm, sâu sắc. Đây là sự kết hợp hài hòa giữa nghệ thuật và nội dung.'
  },
  'Hiện đại - cổ điển': {
    description: 'Kết hợp hài hòa giữa truyền thống và hiện đại',
    details: 'Văn chương Hồ Chí Minh kết hợp hài hòa giữa yếu tố truyền thống cổ điển và hiện đại. Người vừa kế thừa tinh hoa văn học dân tộc, vừa tiếp thu những yếu tố tiến bộ của văn học thế giới.'
  },
  'Văn chính luận': {
    description: 'Các tác phẩm chính luận quan trọng',
    details: 'Bao gồm "Bản án chế độ thực dân Pháp" (1925), "Tuyên ngôn Độc lập" (1945), và nhiều lời kêu gọi có ý nghĩa lịch sử.'
  },
  'Bản án chế độ thực dân Pháp': {
    description: 'Tố cáo tội ác thực dân, vạch trần bản chất bóc lột',
    details: 'Tác phẩm viết năm 1925, tố cáo những tội ác của thực dân Pháp ở Đông Dương. Đây là văn kiện quan trọng, vạch trần bản chất bóc lột, áp bức của chủ nghĩa thực dân.'
  },
  'Tuyên ngôn độc lập': {
    description: 'Văn kiện lịch sử ngày 2/9/1945',
    details: 'Tuyên ngôn Độc lập do Hồ Chí Minh viết và đọc tại Quảng trường Ba Đình. Văn kiện khẳng định chân lý bất diệt về quyền con người, tuyên bố độc lập của dân tộc Việt Nam.'
  },
  'Lời kêu gọi': {
    description: 'Kêu gọi toàn dân kháng chiến, xây dựng đất nước',
    details: 'Các lời kêu gọi của Người có sức động viên mạnh mẽ, thúc đẩy toàn dân tham gia kháng chiến chống thực dân, xây dựng đất nước. Đây là những văn kiện có ý nghĩa lịch sử to lớn.'
  },
  'Truyện và ký': {
    description: 'Các tác phẩm truyện và ký sự',
    details: 'Bao gồm các bài viết trên báo Paria, các bài ký sự, và Nhật ký trong tù. Đây là những tác phẩm phản ánh hiện thực sống động, có giá trị văn học và lịch sử.'
  },
  'Bài viết trên báo Paria': {
    description: 'Tố cáo chế độ thực dân, tuyên truyền cách mạng',
    details: 'Các bài viết trên báo Paria (Paris) tố cáo tội ác của thực dân Pháp, tuyên truyền tư tưởng cách mạng. Đây là những bài viết có giá trị tư tưởng và nghệ thuật cao.'
  },
  'Các bài ký sự': {
    description: 'Ghi lại những gì chứng kiến trong cuộc sống',
    details: 'Các bài ký sự của Người ghi lại những gì chứng kiến trong cuộc sống, phản ánh hiện thực xã hội sống động. Phong cách viết chân thực, giản dị nhưng sâu sắc.'
  },
  'Thơ ca': {
    description: 'Di sản thơ ca phong phú',
    details: 'Tập "Nhật ký trong tù" với 134 bài thơ chữ Hán là đỉnh cao nghệ thuật thơ ca của Người. Thơ Hồ Chí Minh thể hiện ý chí kiên cường, tình yêu quê hương.'
  },
  'Nhật ký trong tù': {
    description: '134 bài thơ viết trong tù (1942-1943)',
    details: 'Viết trong thời gian bị giam giữ ở Trung Quốc. Tập thơ gồm 134 bài thơ chữ Hán, thể thơ Đường luật bảy chữ, phản ánh cuộc sống trong tù và tình yêu quê hương sâu sắc.'
  },
  'Ngắm trăng': {
    description: 'Thơ nhớ quê hương, gia đình khi ở trong tù',
    details: 'Bài thơ thể hiện nỗi nhớ quê hương, gia đình khi Người bị giam giữ. Hình ảnh trăng là biểu tượng cho quê hương, cho tình yêu thương sâu sắc với đất nước.'
  },
  'Rằm tháng Giêng': {
    description: 'Thơ viết dịp Tết trong tù, giữ tinh thần lạc quan',
    details: 'Bài thơ viết nhân dịp Tết Nguyên đán khi đang bị giam giữ. Dù trong hoàn cảnh khó khăn nhưng Người vẫn giữ tinh thần lạc quan, tin tưởng vào tương lai tươi sáng.'
  },
  'Di sản văn học': {
    description: 'Giá trị văn học to lớn',
    details: 'Văn chương Hồ Chí Minh là di sản văn học quý báu của dân tộc. UNESCO công nhận Người là Danh nhân văn hóa thế giới. Tác phẩm của Người có giá trị cả về nội dung lẫn nghệ thuật.'
  },
  'Giá trị nội dung': {
    description: 'Tư tưởng cách mạng, tình yêu quê hương sâu sắc',
    details: 'Nội dung văn chương Hồ Chí Minh thể hiện tư tưởng cách mạng tiến bộ, tình yêu quê hương đất nước sâu sắc. Đây là giá trị cốt lõi, xuyên suốt trong các tác phẩm của Người.'
  },
  'Giá trị nghệ thuật': {
    description: 'Phong cách độc đáo, ngôn ngữ giản dị dễ hiểu',
    details: 'Nghệ thuật văn chương Hồ Chí Minh có phong cách độc đáo, ngôn ngữ giản dị nhưng sâu sắc. Người sử dụng nhiều biện pháp tu từ, tạo nên sức hấp dẫn nghệ thuật cao.'
  },
  'Ảnh hưởng': {
    description: 'Văn học Việt Nam, giáo dục thế hệ trẻ',
    details: 'Văn chương Hồ Chí Minh có ảnh hưởng sâu rộng đến văn học Việt Nam, là tấm gương sáng cho các thế hệ. Tác phẩm của Người được sử dụng trong giáo dục, góp phần giáo dục thế hệ trẻ.'
  },
  'Quan điểm sáng tác': {
    description: 'Quan điểm văn nghệ cách mạng',
    details: 'Hồ Chí Minh quan niệm văn nghệ là vũ khí chiến đấu, phải phục vụ cách mạng và nhân dân. Văn nghệ phải chân thực, mang bản sắc dân tộc, phù hợp với đối tượng tiếp cận.'
  },
  'Văn nghệ là vũ khí chiến đấu phụng sự CM': {
    description: 'Văn nghệ phải phục vụ cách mạng, phục vụ nhân dân',
    details: 'Người quan niệm văn nghệ không chỉ là nghệ thuật thuần túy mà còn là vũ khí chiến đấu phục vụ cách mạng. Văn nghệ phải gắn liền với cuộc sống, phục vụ nhân dân lao động.'
  },
  'Chú trọng tính chân thực và tính dân tộc': {
    description: 'Phản ánh đúng hiện thực, mang bản sắc dân tộc',
    details: 'Người nhấn mạnh văn nghệ phải chân thực, phản ánh đúng hiện thực cuộc sống. Đồng thời phải mang đậm bản sắc dân tộc, kế thừa và phát huy truyền thống văn hóa dân tộc.'
  },
  'Căn cứ vào đối tượng tiếp cận': {
    description: 'Linh hoạt nội dung và hình thức theo đối tượng',
    details: 'Người chủ trương văn nghệ phải linh hoạt về nội dung và hình thức tùy theo đối tượng tiếp cận. Phải dễ hiểu, gần gũi với nhân dân, phù hợp với trình độ và hoàn cảnh của người đọc.'
  }
};

const markdown = `# Hồ Chí Minh

## Tiểu sử
### Tên khai sinh: Nguyễn Sinh Cung
- Sinh năm 1890 tại Kim Liên, Nghệ An
### Người sinh ra trong gia đình nhà nho yêu nước
- Cha là Nguyễn Sinh Sắc - cử nhân, quan huyện doãn
### Quê: Kim Liên, Nam Đàn, Nghệ An
- Vùng đất có truyền thống yêu nước, cách mạng
### 1911 ra đi tìm đường cứu nước
- Lên tàu Amiral Latouche Tréville, bắt đầu hành trình 30 năm
### Tham gia nhiều tổ chức CM
- Đảng Cộng sản Pháp (1920)
- Hội Việt Nam Cách mạng Thanh niên (1925)
### 2/1941 Người về nước lãnh đạo CM
- Trở về sau 30 năm tìm đường cứu nước
### 2/9/1945 Người đọc Tuyên ngôn độc lập
- Tại Quảng trường Ba Đình, Hà Nội

## Phương pháp Nghệ thuật
### Ngắn gọn, xúc tích
- Văn chương đi thẳng vào vấn đề, không rườm rà
### Tinh thần chiến đấu mạnh mẽ
- Thể hiện ý chí kiên cường, khát vọng độc lập
### Hăm sức, uyển thâm
- Sử dụng nhiều biện pháp tu từ, lời văn sắc bén
### Hiện đại - cổ điển
- Kết hợp hài hòa giữa truyền thống và hiện đại

## Văn chính luận
### Bản án chế độ thực dân Pháp
- Tố cáo tội ác thực dân, vạch trần bản chất bóc lột
### Tuyên ngôn độc lập
- Văn kiện lịch sử, tuyên bố nước VNDCCH ra đời
### Lời kêu gọi
- Kêu gọi toàn dân kháng chiến, xây dựng đất nước

## Truyện và ký
### Bài viết trên báo Paria
- Tố cáo chế độ thực dân, tuyên truyền cách mạng
### Các bài ký sự
- Ghi lại những gì chứng kiến trong cuộc sống
### Nhật ký trong tù
- Ghi lại cuộc sống trong tù, thể hiện ý chí kiên cường

## Thơ ca
### Nhật ký trong tù
- 134 bài thơ viết trong tù (1942-1943)
### Ngắm trăng
- Thơ nhớ quê hương, gia đình khi ở trong tù
### Rằm tháng Giêng
- Thơ viết dịp Tết trong tù, giữ tinh thần lạc quan

## Di sản văn học
### Giá trị nội dung
- Tư tưởng cách mạng, tình yêu quê hương sâu sắc
### Giá trị nghệ thuật
- Phong cách độc đáo, ngôn ngữ giản dị dễ hiểu
### Ảnh hưởng
- Văn học Việt Nam, giáo dục thế hệ trẻ

## Quan điểm sáng tác
### Văn nghệ là vũ khí chiến đấu phụng sự CM
- Văn nghệ phải phục vụ cách mạng, phục vụ nhân dân
### Chú trọng tính chân thực và tính dân tộc
- Phản ánh đúng hiện thực, mang bản sắc dân tộc
### Căn cứ vào đối tượng tiếp cận
- Linh hoạt nội dung và hình thức theo đối tượng`;

let mm;

async function fetchWikipediaImage(searchTerm) {
    try {
        const response = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTerm)}`
        );
        const data = await response.json();
        return {
            image: data.thumbnail?.source || data.originalimage?.source,
            extract: data.extract,
            url: data.content_urls?.desktop?.page
        };
    } catch (error) {
        console.error('Wikipedia fetch error:', error);
        return null;
    }
}

async function showModal(title, content) {
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    const modalImage = document.getElementById('modalImage');
    const modalImageContainer = document.getElementById('modalImageContainer');
    const wikiLink = document.getElementById('wikiLink');
    const imageLoader = modalImageContainer.querySelector('.image-loader');
    
    modalTitle.textContent = title;
    modalDescription.textContent = content.description;
    modalDetails.textContent = content.details;
    
    modalImage.style.display = 'none';
    imageLoader.style.display = 'block';
    modalImageContainer.style.display = 'flex';
    wikiLink.style.display = 'none';
    
    modal.style.display = 'flex';
    
    if (title === 'Hồ Chí Minh') {
        const searchTerm = wikiSearchTerms[title] || title;
        const wikiData = await fetchWikipediaImage(searchTerm);
        
        if (wikiData) {
            if (wikiData.image) {
                modalImage.src = wikiData.image;
                modalImage.onload = () => {
                    imageLoader.style.display = 'none';
                    modalImage.style.display = 'block';
                };
            } else {
                modalImageContainer.style.display = 'none';
            }
            
            if (wikiData.url) {
                wikiLink.href = wikiData.url;
                wikiLink.style.display = 'flex';
            }
        } else {
            modalImageContainer.style.display = 'none';
        }
    } else {
        modalImageContainer.style.display = 'none';
    }
}

setTimeout(() => {
    if (!window.markmap || !window.markmap.Transformer) {
        alert("Markmap not loaded!");
        return;
    }
    
    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);
    const svg = document.querySelector('#mindmap');
    
    mm = Markmap.create(svg, {
        duration: 0,
        maxWidth: 500,
        paddingX: -15,
        spacingVertical: 50,
        spacingHorizontal: 400,
        autoFit: false,
        fitRatio: 1,
        initialExpandLevel: -1,
        color: (node) => {
            if (node.depth === 0) return '#3b82f6';
            if (node.depth === 1) return '#06b6d4';
            if (node.depth === 2) return '#10b981';
            return '#8b5cf6';
        }
    }, root);
    
    setTimeout(() => {
        const nodes = svg.querySelectorAll('.markmap-node');
        
        nodes.forEach((node, index) => {
            node.style.cursor = 'pointer';
            
            // Add white background to rect/circle elements
            const rect = node.querySelector('rect');
            const circle = node.querySelector('circle');
            const foreignObj = node.querySelector('foreignObject');
            
            if (rect) {
                rect.style.fill = 'rgba(255, 255, 255, 0.95)';
                rect.style.filter = 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))';
            }
            if (circle) {
                circle.style.fill = 'rgba(255, 255, 255, 0.95)';
                circle.style.filter = 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))';
            }
            if (foreignObj) {
                const div = foreignObj.querySelector('div');
                if (div) {
                    div.style.background = 'white';
                    div.style.padding = '14px 24px';
                    div.style.borderRadius = '12px';
                    div.style.boxShadow = 'inset 10px 0 0 0 white, inset -10px 0 0 0 white, inset 0 10px 0 0 white, inset 0 -10px 0 0 white, 0 3px 10px rgba(0, 0, 0, 0.2)';
                    div.style.position = 'relative';
                    div.style.marginLeft = '20px';
                    div.style.marginRight = '5px';
                    div.style.marginTop = '5px';
                    div.style.marginBottom = '5px';
                    div.style.minWidth = '150px';
                }
                // Move foreignObject to end to render on top
                node.appendChild(foreignObj);
            }
            
            // Try multiple ways to get text
            let text = '';
            const textEl = node.querySelector('text');
            
            if (textEl) {
                text = textEl.textContent.trim();
            } else if (foreignObj) {
                text = foreignObj.textContent.trim();
            } else {
                text = node.textContent.trim();
            }
            
            node.addEventListener('click', async (e) => {
                // Check if click is on circle (collapse/expand button)
                if (e.target.tagName === 'circle') {
                    return;
                }
                
                e.preventDefault();
                e.stopPropagation();
                
                // Try multiple ways to get text
                let text = '';
                const textEl = node.querySelector('text');
                const foreignObj = node.querySelector('foreignObject');
                
                if (textEl) {
                    text = textEl.textContent.trim();
                } else if (foreignObj) {
                    text = foreignObj.textContent.trim();
                } else {
                    text = node.textContent.trim();
                }
                
                if (detailedContent[text]) {
                    await showModal(text, detailedContent[text]);
                }
            });
        });
    }, 800);
    
    document.getElementById('fitBtn').onclick = () => mm.fit();
    document.getElementById('zoomInBtn').onclick = () => mm.rescale(1.25);
    document.getElementById('zoomOutBtn').onclick = () => mm.rescale(0.8);
    
    setTimeout(() => mm.fit(), 100);
}, 500);

function initParallax() {
    const portraitContainer = document.getElementById('portraitContainer');
    const bgImage = document.querySelector('.bg-image');
    
    if (!portraitContainer) return;
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 30;
        const moveY = (mouseY - 0.5) * 30;
        
        portraitContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        
        if (bgImage) {
            const bgMoveX = (mouseX - 0.5) * 15;
            const bgMoveY = (mouseY - 0.5) * 15;
            bgImage.style.transform = `translate(${bgMoveX}px, ${bgMoveY}px)`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    
    const modal = document.getElementById('infoModal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = 'none';
    }
    
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
});
