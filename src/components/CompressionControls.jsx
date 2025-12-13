import './CompressionControls.css'

function CompressionControls({
  originalSizeKB,
  targetSizeKB,
  maxSizeKB,
  onTargetSizeChange,
  onCompress,
  onDownload,
  onReset,
  isCompressing,
  hasCompressed,
  compressedSizeKB
}) {
  const handleSliderChange = (e) => {
    onTargetSizeChange(parseFloat(e.target.value))
  }

  return (
    <div className="controls-container">
      <div className="size-control">
        <div className="size-header">
          <h3>Target File Size</h3>
          <div className="size-display">
            <span className="size-value">{targetSizeKB}</span>
            <span className="size-unit">KB</span>
          </div>
        </div>
        
        <div className="slider-container">
          <input
            type="range"
            min="10"
            max={maxSizeKB}
            step="1"
            value={targetSizeKB}
            onChange={handleSliderChange}
            className="slider"
            disabled={isCompressing}
          />
          <div className="slider-labels">
            <span>10 KB</span>
            <span>{maxSizeKB.toFixed(0)} KB</span>
          </div>
        </div>

        <div className="size-comparison">
          <div className="comparison-item">
            <span className="comparison-label">Original Size:</span>
            <span className="comparison-value">{originalSizeKB} KB</span>
          </div>
          {hasCompressed && (
            <div className="comparison-item">
              <span className="comparison-label">Compressed Size:</span>
              <span className="comparison-value success">{compressedSizeKB} KB</span>
            </div>
          )}
        </div>
      </div>

      <div className="action-buttons">
        {!hasCompressed ? (
          <button
            className="compress-button"
            onClick={onCompress}
            disabled={isCompressing}
          >
            {isCompressing ? (
              <>
                <span className="spinner"></span>
                Compressing...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path 
                    d="M10 2L15 7H11V13H9V7H5L10 2Z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M3 15V17H17V15H3Z" 
                    fill="currentColor"
                  />
                </svg>
                Compress Image
              </>
            )}
          </button>
        ) : (
          <div className="action-buttons-group">
            <button className="download-button" onClick={onDownload}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path 
                  d="M10 2V13M10 13L15 8M10 13L5 8" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M3 15V17H17V15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
              Download
            </button>
            <button className="reset-button" onClick={onReset}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path 
                  d="M4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C7.79086 16 5.85503 14.7996 4.83268 13" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <path 
                  d="M2 13H5V10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              New Image
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CompressionControls
