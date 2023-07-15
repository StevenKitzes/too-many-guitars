import React from 'react'
import './GuitarFrame.css'

export type GuitarFrameProps = {
  imageUrl: string|null
}

const fallback = 'img/missing-guitar.jpg'

export const GuitarFrame: React.FC<GuitarFrameProps> = ({ imageUrl }) => {
  return (
    <div className="guitar-frame-container">
      <a href={imageUrl || fallback}>
        <img className="guitar-frame" src="img/frame-original.png" />
      </a>
      <div className="guitar-image-with-shadow" style={{ backgroundImage: `url("${imageUrl || fallback}")` }} />
    </div>
  )
}
