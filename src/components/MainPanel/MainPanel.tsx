import React, { useEffect, useState } from 'react'

import './MainPanel.css'

import { GuitarFrame } from '../GuitarFrame/GuitarFrame'
import { HistoryBlurb } from '../HistoryBlurb/HistoryBlurb'
import { ControlsContainer } from '../ControlsContainer/ControlsContainer'

import { data } from '../../guitar-data'

export const MainPanel: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string|null>(`img/front/${data[0].imageName}.jpg`)
  const [history, setHistory] = useState<string|null>(data[0].history)
  const [selectedId, setSelectedId] = useState<number>(0)
  const [selectedBrand, setSelectedBrand] = useState<string>("Unknown")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    if (params.has('id')) {
      const idParam = params.get('id')
      if (idParam === null) {
        setImageUrl('img/missing-guitar.jpg')
        setHistory('No guitar ID provided.')
        return
      }
      const id: number = parseInt(idParam)
      if (isNaN(id)) {
        setImageUrl('img/missing-guitar.jpg')
        setHistory('Invalid ID provided.')
        return
      }
      setImageUrl(`img/front/${data[id].imageName}.jpg`)
      setHistory(data[id].history)
      setSelectedId(id)
    }

    if (params.has('brand')) {
      const brandParam = params.get('brand')
      if (brandParam === null) {
        setSelectedBrand("Unknown")
        return
      }
      setSelectedBrand(brandParam)
    }
  }, [])

  return (
    <div className="main-panel">
      <ControlsContainer
        selectedBrand={selectedBrand}
        selectedId={selectedId}
      />
      <GuitarFrame imageUrl={imageUrl} />
      <HistoryBlurb copy={history} />
    </div>
  )
}