# Image Compressor Website

A modern, responsive web application for compressing images while maintaining quality. Built with React and Vite.

## Features

- **Drag & Drop Upload**: Easily upload images by dragging them into the browser or browsing from your computer
- **Adjustable Compression**: Use an intuitive slider to set target file size
- **Live Preview**: View original and compressed images side-by-side
- **File Size Comparison**: See the original size, target size, and actual compressed size
- **Download Compressed Images**: One-click download of compressed images
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Multiple Format Support**: Supports JPG, PNG, WEBP, and GIF formats

## Installation

1. Clone the repository:
```bash
git clone https://github.com/OmKadu786/image-compressor-website.git
cd image-compressor-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Upload an Image**: Drag and drop an image or click "Browse Files" to select from your computer
2. **Adjust Target Size**: Use the slider to set your desired file size
3. **Compress**: Click "Compress Image" to start the compression process
4. **Download**: Once compressed, download your optimized image
5. **Start Over**: Click "New Image" to compress another file

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Technologies Used

- **React 18**: Modern UI framework
- **Vite**: Fast build tool and development server
- **browser-image-compression**: Client-side image compression library
- **CSS3**: Modern styling with gradients and animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.