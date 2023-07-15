import React, { useEffect, useState } from 'react'

import './MainPanel.css'

import { GuitarFrame } from '../GuitarFrame/GuitarFrame'
import { HistoryBlurb } from '../HistoryBlurb/HistoryBlurb'
import { ControlsContainer } from '../ControlsContainer/ControlsContainer'

import { data } from '../../guitar-data'

export const MainPanel: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string|null>(`img/front/${data[0].imageName}.jpg`)
  const [history, setHistory] = useState<string|null>(data[0].history)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  useEffect(() => {
    let index:number = 0
    if (window.location.hash) {
      const hashedPart:string = window.location.hash.split('#')[1]
      const hashedNumber:number = parseInt(hashedPart)
      if (isNaN(hashedNumber)) index = 0
      index = hashedNumber
    }
    setSelectedIndex(index)
  }, [])

  useEffect(() => {
    setImageUrl(`img/front/${data[selectedIndex].imageName}.jpg`)
    setHistory(data[selectedIndex].history)
  }, [selectedIndex])

  return (
    <div className="main-panel">
      <ControlsContainer
        data={data}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <GuitarFrame imageUrl={imageUrl} imageIndex={selectedIndex}/>
      <HistoryBlurb copy={history} />
    </div>
  )
}