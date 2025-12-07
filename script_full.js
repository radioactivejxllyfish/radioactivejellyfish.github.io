const detailedContent = {
  'H? Chí Minh': {
    description: 'Ch? t?ch nu?c Vi?t Nam Dân ch? C?ng hòa',
    details: 'H? Chí Minh (1890-1969) là lãnh t? vi d?i c?a dân t?c Vi?t Nam, ngu?i sáng l?p Ð?ng C?ng s?n Vi?t Nam và nu?c Vi?t Nam Dân ch? C?ng hòa.',
    wiki: 'Ho_Chi_Minh'
  },
  'Ti?u s?': {
    description: 'Cu?c d?i và s? nghi?p cách m?ng',
    details: 'Sinh nam 1890 t?i Kim Liên, Ngh? An. Nam 1911 ra di tìm du?ng c?u nu?c, nam 1945 d?c Tuyên ngôn Ð?c l?p.',
    wiki: 'Ho_Chi_Minh'
  },
  'Tuyên ngôn d?c l?p': {
    description: 'Van ki?n l?ch s? 2/9/1945',
    details: 'Tuyên ngôn Ð?c l?p do H? Chí Minh d?c t?i Qu?ng tru?ng Ba Ðình, tuyên b? nu?c Vi?t Nam Dân ch? C?ng hòa ra d?i.',
    wiki: 'Vietnamese_Declaration_of_Independence'
  },
  'Nh?t ký trong tù': {
    description: '134 bài tho vi?t trong tù',
    details: 'T?p tho g?m 134 bài tho ch? Hán vi?t trong th?i gian b? giam gi? ? Trung Qu?c (1942-1943).',
    wiki: 'Prison_Diary'
  }
};

const markdown = `# H? Chí Minh

## Ti?u s?
### Tên khai sinh: Nguy?n Sinh Cung
- Sinh nam 1890 t?i Kim Liên, Ngh? An
### Ngu?i sinh ra trong gia dình nhà nho yêu nu?c
- Cha là Nguy?n Sinh S?c
### Quê: Kim Liên, Nam Ðàn, Ngh? An
- Vùng d?t có truy?n th?ng yêu nu?c
### 1911 ra di tìm du?ng c?u nu?c
- Lên tàu Amiral Latouche Tréville
### Tham gia nhi?u t? ch?c CM
- Ð?ng C?ng s?n Pháp (1920)
### 2/1941 Ngu?i v? nu?c lãnh d?o CM
- Tr? v? sau 30 nam
### 2/9/1945 Ngu?i d?c Tuyên ngôn d?c l?p
- T?i Qu?ng tru?ng Ba Ðình

## Phuong pháp Ngh? thu?t
### Ng?n g?n, xúc tích
- Van chuong di th?ng vào v?n d?
### Tinh th?n chi?n d?u m?nh m?
- Th? hi?n ý chí kiên cu?ng
### Ham s?c, uy?n thâm
- S? d?ng nhi?u bi?n pháp tu t?
### Hi?n d?i - c? di?n
- K?t h?p hài hòa

## Van chính lu?n
### B?n án ch? d? th?c dân Pháp
- T? cáo t?i ác th?c dân
### Tuyên ngôn d?c l?p
- Van ki?n l?ch s?
### L?i kêu g?i
- Kêu g?i toàn dân kháng chi?n

## Truy?n và ký
### Bài vi?t trên báo Paria
- T? cáo ch? d? th?c dân
### Các bài ký s?
- Ghi l?i nh?ng gì ch?ng ki?n
### Nh?t ký trong tù
- Ghi l?i cu?c s?ng trong tù

## Tho ca
### Nh?t ký trong tù
- 134 bài tho vi?t trong tù
### Ngâm trang
- Tho nh? quê huong
### R?m tháng Giêng
- Tho vi?t d?p T?t trong tù

## Di s?n van h?c
### Giá tr? n?i dung
- Tu tu?ng cách m?ng
### Giá tr? ngh? thu?t
- Phong cách d?c dáo
### ?nh hu?ng
- Van h?c Vi?t Nam

## Quan di?m sáng tác
### Van ngh? là vu khí chi?n d?u
- Van ngh? ph?i ph?c v? cách m?ng
### Chú tr?ng tính chân th?c
- Ph?n ánh dúng hi?n th?c
### C?n c? vào d?i tu?ng ti?p c?n
- Linh ho?t n?i dung và hình th?c`;

let mm;

async function fetchWiki(term) {
    try {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${term}`);
        const data = await res.json();
        return {
            image: data.thumbnail?.source,
            url: data.content_urls?.desktop?.page
        };
    } catch (e) {
        return null;
    }
}

function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 50 },
            color: { value: '#3b82f6' },
            opacity: { value: 0.3 },
            size: { value: 3 },
            line_linked: { enable: true, color: '#3b82f6', opacity: 0.2 },
            move: { enable: true, speed: 1 }
        }
    });
}

function animateTree(svg, root) {
    const nodes = svg.querySelectorAll('.markmap-node');
    const links = svg.querySelectorAll('.markmap-link');
    
    nodes.forEach((n, i) => {
        n.style.opacity = '0';
        anime({
            targets: n,
            opacity: [0, 1],
            translateY: [20, 0],
            delay: i * 200,
            duration: 800,
            easing: 'easeOutElastic(1, .6)'
        });
    });
    
    links.forEach((l, i) => {
        const len = l.getTotalLength();
        l.style.strokeDasharray = len;
        l.style.strokeDashoffset = len;
        anime({
            targets: l,
            strokeDashoffset: [len, 0],
            delay: i * 200 + 400,
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    });
}

async function showModal(title, content) {
    const modal = document.getElementById('infoModal');
    const img = document.getElementById('modalImage');
    const imgContainer = document.getElementById('modalImageContainer');
    const loader = imgContainer.querySelector('.image-loader');
    
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = content.description;
    document.getElementById('modalDetails').textContent = content.details;
    
    img.style.display = 'none';
    loader.style.display = 'block';
    modal.style.display = 'flex';
    
    anime({
        targets: '.modal-content-info',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutElastic(1, .6)'
    });
    
    if (content.wiki) {
        const data = await fetchWiki(content.wiki);
        if (data?.image) {
            img.src = data.image;
            img.onload = () => {
                loader.style.display = 'none';
                img.style.display = 'block';
                anime({ targets: img, opacity: [0, 1], duration: 600 });
            };
        }
        if (data?.url) {
            const link = document.getElementById('wikiLink');
            link.href = data.url;
            link.style.display = 'flex';
        }
    }
}

setTimeout(() => {
    if (!window.markmap) {
        alert('Markmap failed to load');
        return;
    }
    
    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);
    const svg = document.querySelector('#mindmap');
    
    mm = Markmap.create(svg, {
        color: (n) => ['#3b82f6', '#06b6d4', '#10b981', '#8b5cf6'][n.depth] || '#8b5cf6',
        duration: 500,
        maxWidth: 300,
        paddingX: 20,
        spacingVertical: 15,
        spacingHorizontal: 100
    }, root);
    
    const w = svg.clientWidth, h = svg.clientHeight;
    const zoom = d3.zoom()
        .scaleExtent([0.2, 3])
        .translateExtent([[-w*2, -h*2], [w*3, h*3]])
        .on('zoom', (e) => svg.querySelector('g').setAttribute('transform', e.transform));
    d3.select(svg).call(zoom);
    
    svg.addEventListener('click', (e) => {
        const node = e.target.closest('.markmap-node');
        if (node) {
            const text = node.querySelector('text')?.textContent.trim();
            if (text && detailedContent[text]) {
                showModal(text, detailedContent[text]);
            }
        }
    });
    
    document.getElementById('fitBtn').onclick = () => mm.fit();
    document.getElementById('zoomInBtn').onclick = () => mm.rescale(1.25);
    document.getElementById('zoomOutBtn').onclick = () => mm.rescale(0.8);
    
    setTimeout(() => {
        mm.fit();
        animateTree(svg, root);
    }, 100);
}, 2000);

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    
    const modal = document.getElementById('infoModal');
    const close = document.querySelector('.modal-close');
    
    if (close) {
        close.onclick = () => {
            anime({
                targets: '.modal-content-info',
                scale: [1, 0.8],
                opacity: [1, 0],
                duration: 300,
                complete: () => modal.style.display = 'none'
            });
        };
    }
    
    modal.onclick = (e) => {
        if (e.target === modal) close.click();
    };
});
