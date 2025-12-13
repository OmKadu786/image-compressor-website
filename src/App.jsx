import { useState } from 'react'
import ImageUploader from './components/ImageUploader'
import ImagePreview from './components/ImagePreview'
import CompressionControls from './components/CompressionControls'
import './App.css'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [originalFile, setOriginalFile] = useState(null)
  const [compressedImage, setCompressedImage] = useState(null)
  const [targetSizeKB, setTargetSizeKB] = useState(100)
  const [isCompressing, setIsCompressing] = useState(false)

  const handleImageSelect = (file) => {
    setOriginalFile(file)
    setCompressedImage(null)
    
    const reader = new FileReader()
    reader.onload = (e) => {
      setSelectedImage({
        url: e.target.result,
        name: file.name,
        size: file.size,
        sizeKB: (file.size / 1024).toFixed(2)
      })
      // Set initial target size to 50% of original
      setTargetSizeKB(Math.floor((file.size / 1024) * 0.5))
    }
    reader.readAsDataURL(file)
  }

  const handleCompress = async () => {
    if (!originalFile) return

    setIsCompressing(true)
    
    try {
      const imageCompression = (await import('browser-image-compression')).default
      
      const originalSizeKB = originalFile.size / 1024
      const compressionRatio = targetSizeKB / originalSizeKB
      
      // Calculate quality based on target size
      const quality = Math.max(0.1, Math.min(1, compressionRatio))
      
      const options = {
        maxSizeMB: targetSizeKB / 1024,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: quality
      }

      const compressed = await imageCompression(originalFile, options)
      
      const reader = new FileReader()
      reader.onload = (e) => {
        setCompressedImage({
          url: e.target.result,
          name: compressed.name,
          size: compressed.size,
          sizeKB: (compressed.size / 1024).toFixed(2),
          blob: compressed
        })
      }
      reader.readAsDataURL(compressed)
    } catch (error) {
      console.error('Compression error:', error)
      alert(`Failed to compress image: ${error.message || 'Please try again with a different image or target size.'}`)
    } finally {
      setIsCompressing(false)
    }
  }

  const handleDownload = () => {
    if (!compressedImage) return

    const link = document.createElement('a')
    link.href = compressedImage.url
    link.download = `compressed_${selectedImage.name}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleReset = () => {
    setSelectedImage(null)
    setOriginalFile(null)
    setCompressedImage(null)
    setTargetSizeKB(100)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#fff"/>
            <path d="M20 10L30 18V30H10V18L20 10Z" fill="#667eea"/>
            <circle cx="15" cy="22" r="2" fill="#fff"/>
            <path d="M10 28L16 22L20 26L26 20L30 24V30H10V28Z" fill="#764ba2"/>
          </svg>
          <h1>Image Compressor</h1>
        </div>
        <p className="tagline">Compress your images while maintaining quality</p>
      </header>

      <main className="main-content">
        {!selectedImage ? (
          <ImageUploader onImageSelect={handleImageSelect} />
        ) : (
          <div className="compression-workspace">
            <ImagePreview
              originalImage={selectedImage}
              compressedImage={compressedImage}
            />
            
            <CompressionControls
              originalSizeKB={selectedImage.sizeKB}
              targetSizeKB={targetSizeKB}
              maxSizeKB={parseFloat(selectedImage.sizeKB)}
              onTargetSizeChange={setTargetSizeKB}
              onCompress={handleCompress}
              onDownload={handleDownload}
              onReset={handleReset}
              isCompressing={isCompressing}
              hasCompressed={!!compressedImage}
              compressedSizeKB={compressedImage?.sizeKB}
            />
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2024 Image Compressor. Compress images quickly and easily.</p>
      </footer>
    </div>
  )
}

export default App
