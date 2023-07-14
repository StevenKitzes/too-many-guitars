import React from 'react'
import './GuitarFrame.css'

export type GuitarFrameProps = {
  imageUrl: string,
}

export const GuitarFrame: React.FC<GuitarFrameProps> = ({ imageUrl }) => {
  return (
    <div className="guitar-frame-container">
      <img className="guitar-frame" src="img/frame-original.png" />
      <div className="guitar-image-with-shadow" style={{ backgroundImage: `url("${imageUrl}")` }} />
    </div>
  )
}
