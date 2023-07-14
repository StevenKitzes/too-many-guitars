import React from 'react'
import './Title.css'

export type TitleProps = {
  title: string
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="title">{title}</div>
  )
}
