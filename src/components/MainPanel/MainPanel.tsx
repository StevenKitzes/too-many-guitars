import React, { useState } from 'react'

import './MainPanel.css'

import { GuitarFrame } from '../GuitarFrame/GuitarFrame'
import { HistoryBlurb } from '../HistoryBlurb/HistoryBlurb'
import { ControlsContainer } from '../ControlsContainer/ControlsContainer'

import { data } from '../../guitar-data'

export type MainPanelProps = {}

export const MainPanel: React.FC<MainPanelProps> = ({}) => {
  const [imageUrl, setImageUrl] = useState<string|null>(`img/front/${data[0].imageName}.jpg`)
  const [history, setHistory] = useState<string|null>(data[0].history)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  return (
    <div className="main-panel">
      <ControlsContainer
        data={data}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setImageUrl={setImageUrl}
        setHistory={setHistory}
      />
      <GuitarFrame imageUrl={imageUrl} />
      <HistoryBlurb copy={history} />
    </div>
  )
}