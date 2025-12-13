import './ImagePreview.css'

function ImagePreview({ originalImage, compressedImage }) {
  return (
    <div className="preview-container">
      <h2>Image Preview</h2>
      
      <div className="preview-grid">
        {/* Original Image */}
        <div className="preview-card">
          <div className="preview-label">Original</div>
          <div className="image-wrapper">
            <img src={originalImage.url} alt="Original" />
          </div>
          <div className="image-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value" title={originalImage.name}>
                {originalImage.name.length > 20 
                  ? originalImage.name.substring(0, 20) + '...' 
                  : originalImage.name}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Size:</span>
              <span className="info-value">{originalImage.sizeKB} KB</span>
            </div>
          </div>
        </div>

        {/* Compressed Image */}
        {compressedImage ? (
          <div className="preview-card">
            <div className="preview-label compressed">Compressed</div>
            <div className="image-wrapper">
              <img src={compressedImage.url} alt="Compressed" />
            </div>
            <div className="image-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value" title={compressedImage.name}>
                  {compressedImage.name.length > 20 
                    ? compressedImage.name.substring(0, 20) + '...' 
                    : compressedImage.name}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Size:</span>
                <span className="info-value">{compressedImage.sizeKB} KB</span>
              </div>
              <div className="info-item compression-ratio">
                <span className="info-label">Reduction:</span>
                <span className="info-value success">
                  {((1 - compressedImage.size / originalImage.size) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="preview-card placeholder">
            <div className="preview-label">Compressed</div>
            <div className="image-wrapper placeholder-content">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path 
                  d="M40 20L60 35V60H20V35L40 20Z" 
                  stroke="#cbd5e0" 
                  strokeWidth="3" 
                  fill="none"
                />
                <circle cx="30" cy="42" r="4" stroke="#cbd5e0" strokeWidth="2" fill="none"/>
                <path 
                  d="M20 55L30 45L38 53L48 43L60 55" 
                  stroke="#cbd5e0" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Compressed image will appear here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImagePreview
