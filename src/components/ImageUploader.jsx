import { useState } from 'react'
import './ImageUploader.css'

function ImageUploader({ onImageSelect }) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      onImageSelect(files[0])
    } else {
      alert('Please drop a valid image file')
    }
  }

  const handleFileInput = (e) => {
    const files = e.target.files
    if (files.length > 0) {
      onImageSelect(files[0])
    }
  }

  return (
    <div className="uploader-container">
      <div
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" stroke="#667eea" strokeWidth="4" strokeDasharray="8 8"/>
            <path 
              d="M40 25V55M25 40H55" 
              stroke="#667eea" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2>Drop your image here</h2>
        <p>or click to browse from your computer</p>
        <p className="supported-formats">Supports: JPG, PNG, WEBP, GIF</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="file-input"
          id="file-input"
        />
        <label htmlFor="file-input" className="browse-button">
          Browse Files
        </label>
      </div>

      <div className="instructions">
        <h3>How to use:</h3>
        <ol>
          <li>Upload an image by dragging it here or clicking &quot;Browse Files&quot;</li>
          <li>Adjust the target file size using the slider</li>
          <li>Click &quot;Compress Image&quot; to start compression</li>
          <li>Download your compressed image</li>
        </ol>
      </div>
    </div>
  )
}

export default ImageUploader
