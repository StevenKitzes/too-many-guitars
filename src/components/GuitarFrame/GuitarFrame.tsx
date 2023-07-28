import React from 'react'
import './GuitarFrame.css'

export type GuitarFrameProps = {
  imageUrl: string|null
}

const fallback = 'too-many-guitars/img/missing-guitar.jpg'

export const GuitarFrame: React.FC<GuitarFrameProps> = ({ imageUrl }) => {
  return (
    <div className="guitar-frame-container">
      <a href={imageUrl || fallback}>
        <img
          alt="Golden frame"
          className="guitar-frame"
          src="too-many-guitars/img/frame-original.png"
        />
      </a>
      <div className="guitar-image-with-shadow" style={{ backgroundImage: `url("${imageUrl || fallback}")` }} />
    </div>
  )
}
