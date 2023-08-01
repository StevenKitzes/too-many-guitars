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
    year: guitar.year || "Unknown",
    imageFront: guitar.imageFront,
    imageBack: guitar.imageBack,
    history: guitar.history || "No history has been recorded for this guitar."
  }))
  const fallbackGuitar: GuitarData = data[0]

  const [imageUrl, setImageUrl] = useState<string>("")
  const [history, setHistory] = useState<string>(fallbackGuitar.history)
  const [selectedId, setSelectedId] = useState<string>(fallbackGuitar.id)
  const [rear, setRear] = useState<boolean>(false)
  const [selectedType, setSelectedType] = useState<string>("All types")
  const [localhostPrefix, setLocalhostPrefix] = useState<string>("")

  // parse url params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const { host } = window.location
    const newUrlPrefix = host.indexOf('localhost') > -1 ? "too-many-guitars/" : ""
    
    let face: string = 'front';
    if (params.has('rear')) {
      const r = params.get('rear')
      if (r === 'true') {
        face = 'back'
      }
      else {
        face = 'front'
      }
    }
    
    let guitarImage: string = fallbackGuitar.imageFront
      ? `${newUrlPrefix}img/front/${fallbackGuitar.imageFront}.jpg`
      : `${newUrlPrefix}img/missing-guitar.jpg`
    let guitarHistory: string = fallbackGuitar.history
    let guitarId: string = fallbackGuitar.id

    if (params.has('id')) {
      const idParam = params.get('id')
      if (idParam === null) {
        // id var exists but no value, don't change away from fallback guitar
        guitarImage = `${newUrlPrefix}img/missing-guitar.jpg`
        guitarHistory = 'No guitar ID provided.'
      } else if (isNaN(parseInt(idParam))) {
        guitarImage = `${newUrlPrefix}img/missing-guitar.jpg`
        guitarHistory = 'Invalid ID provided.'
      }

      const guitar = data.find(g => g.id === idParam) || fallbackGuitar
      if (face === 'front') {
        guitarImage = guitar.imageFront
          ? `${newUrlPrefix}img/front/${guitar.imageFront}.jpg`
          : `${newUrlPrefix}img/missing-guitar.jpg`
      } else {
        guitarImage = guitar.imageBack
          ? `${newUrlPrefix}img/back/${guitar.imageBack}.jpg`
          : `${newUrlPrefix}img/missing-guitar.jpg`
      }
      guitarHistory = guitar.history
      guitarId = idParam || fallbackGuitar.id
    }
    
    let newType: string = "All types"
    if (params.has('type')) {
      const typeParam:string|null = params.get('type')
      if (typeParam === null) newType = "All types"
      else newType = typeParam
    }

    // set all actual react hook managed items
    setLocalhostPrefix(newUrlPrefix)
    setRear(face === 'back')
    setImageUrl(guitarImage)
    setHistory(guitarHistory)
    setSelectedId(guitarId)
    setSelectedType(newType)
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
      <GuitarFrame
        imageUrl={imageUrl}
        localhostPrefix={localhostPrefix}
      />
      <HistoryBlurb copy={history} />
    </div>
  )
}