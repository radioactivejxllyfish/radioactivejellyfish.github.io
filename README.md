# Hồ Chí Minh - Interactive Mind Map

An interactive, visually stunning mind map website showcasing the life, literary legacy, and revolutionary contributions of Hồ Chí Minh.

## Features

- 🎨 **Beautiful UI**: Modern gradient design with smooth animations
- 🔄 **Interactive**: Click nodes to expand/collapse and view detailed information
- 📱 **Responsive**: Fully optimized for both desktop and mobile devices
- 🎯 **Curved Connections**: Smooth curved lines connecting related concepts
- 🔍 **Zoom & Pan**: Navigate the mind map with intuitive zoom and pan controls
- 📖 **Detailed Content**: Rich information about Hồ Chí Minh's biography and literary works

## Technologies Used

- **D3.js**: For interactive visualizations and smooth animations
- **HTML5/CSS3**: Modern web standards
- **Vanilla JavaScript**: No framework dependencies
- **Google Fonts**: Playfair Display & Inter for beautiful typography

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub (e.g., `ho-chi-minh-mindmap`)
2. Upload all files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Go to repository Settings → Pages
4. Under "Source", select `main` branch and `/ (root)` folder
5. Click Save
6. Your site will be available at: `https://[your-username].github.io/ho-chi-minh-mindmap/`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
cd ho-chi-minh-mindmap
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Interactive Hồ Chí Minh mind map"

# Add remote repository
git remote add origin https://github.com/[your-username]/ho-chi-minh-mindmap.git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages
# Go to repository Settings → Pages → Select main branch → Save
```

## Local Development

Simply open `index.html` in a modern web browser. For best results, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Then open http://localhost:8000 in your browser
```

## Usage

- **Click nodes**: View detailed information in a modal
- **Hover nodes**: See quick descriptions in tooltips
- **Drag**: Pan around the mind map
- **Scroll**: Zoom in/out
- **Reset View**: Return to default zoom level
- **Expand All**: Show all nodes
- **Collapse All**: Hide child nodes

## Content Structure

The mind map covers:

1. **Tiểu sử** (Biography): Life journey from 1890-1969
2. **Phương pháp Nghệ thuật** (Artistic Methods): Writing style and techniques
3. **Văn chính luận** (Political Essays): Major political writings
4. **Truyện và ký** (Stories & Memoirs): Narrative works
5. **Thơ ca** (Poetry): Poetic legacy including "Nhật ký trong tù"
6. **Di sản văn học** (Literary Legacy): Cultural impact and recognition
7. **Quan điểm sáng tác** (Creative Philosophy): Views on literature and art

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## License

This project is created for educational purposes.

## Credits

Created with ❤️ for Vietnamese literature education
