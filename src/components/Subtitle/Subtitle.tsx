import React from 'react'
import './Subtitle.css'

export type SubtitleProps = {
  title: string,
}

export const Subtitle: React.FC<SubtitleProps> = ({ title }) => {
  return (
    <div className="subtitle">{title}</div>
  )
}
