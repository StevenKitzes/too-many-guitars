import React, { useEffect, useState } from 'react'

import './MainPanel.css'

import { GuitarData } from '../../types/types'

import { GuitarFrame } from '../GuitarFrame/GuitarFrame'
import { HistoryBlurb } from '../HistoryBlurb/HistoryBlurb'
import { ControlsContainer } from '../ControlsContainer/ControlsContainer'

import { rawData } from '../../guitar-data'

export const MainPanel: React.FC = () => {
  const data: GuitarData[] = rawData.map((guitar, index) => ({
    id: index.toString(),
    type: guitar.type || "Unknown type",
    model: guitar.model || "Unknown model",
    brand: guitar.brand || "Unknown brand",
    year: guitar.year || "Unknown year",
    imageName: guitar.imageName || "missing",
    history: guitar.history || "No history has been recorded for this guitar."
  }))
  const fallbackGuitar: GuitarData = data[0]

  const [imageUrl, setImageUrl] = useState<string>(`img/front/${fallbackGuitar.imageName}.jpg`)
  const [history, setHistory] = useState<string>(fallbackGuitar.history)
  const [selectedId, setSelectedId] = useState<string>(fallbackGuitar.id)
  const [rear, setRear] = useState<boolean>(false)
  const [selectedType, setSelectedType] = useState<string>("All types")

  // parse url params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    let face: string = 'front';
    if (params.has('rear')) {
      const r = params.get('rear')
      if (r === 'true') {
        face = 'back'
        setRear(true)
      }
      else {
        face = 'front'
        setRear(false)
      }
    }

    if (params.has('id')) {
      const idParam = params.get('id')
      if (idParam === null) {
        // id var exists but no value, default to first available guitar
        setImageUrl('img/missing-guitar.jpg')
        setHistory('No guitar ID provided.')
        return
      }
      if (isNaN(parseInt(idParam))) {
        setImageUrl('img/missing-guitar.jpg')
        setHistory('Invalid ID provided.')
        return
      }
      const guitar: GuitarData = data.find(g => g.id === idParam) || fallbackGuitar
      setImageUrl(`img/${face}/${guitar.imageName}.jpg`)
      setHistory(guitar.history)
      setSelectedId(idParam)
    }

    if (params.has('type')) {
      const typeParam = params.get('type')
      if (typeParam === null) setSelectedType("All types")
      else setSelectedType(typeParam)
    }
  }, [data, fallbackGuitar])

  return (
    <div className="main-panel">
      <ControlsContainer
        data={data}
        fallbackGuitar={fallbackGuitar}
        rear={rear}
        selectedId={selectedId}
        selectedType={selectedType}
      />
      <GuitarFrame imageUrl={imageUrl} />
      <HistoryBlurb copy={history} />
    </div>
  )
}