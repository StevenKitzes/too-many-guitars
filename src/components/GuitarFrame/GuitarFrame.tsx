import React from 'react'
import './GuitarFrame.css'

export type GuitarFrameProps = {
  imageUrl: string|null,
  localhostPrefix: string,
}

export const GuitarFrame: React.FC<GuitarFrameProps> = ({ imageUrl, localhostPrefix }) => {
  const fallback = `${localhostPrefix}img/missing-guitar.jpg`

  return (
    <div className="guitar-frame-container">
      <a href={imageUrl || fallback}>
        <img
          alt="Golden frame"
          className="guitar-frame"
          src={`${localhostPrefix}img/frame-original.png`}
        />
      </a>
      <div className="guitar-image-with-shadow" style={{ backgroundImage: `url("${imageUrl || fallback}")` }} />
    </div>
  )
}
