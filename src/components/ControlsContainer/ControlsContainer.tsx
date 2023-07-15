import React, { useEffect, useState } from 'react'

import './ControlsContainer.css'

import { GuitarData } from '../../types/types';

export type ControlsContainerProps = {
  data: GuitarData[],
  selectedIndex: number,
  setSelectedIndex: (n: number) => void
}

export const ControlsContainer: React.FC<ControlsContainerProps> = ({
  data,
  selectedIndex,
  setSelectedIndex
}) => {
  const [selected, setSelected] = useState<number>(0)

  useEffect(() => {
    setSelected(selectedIndex)
    const selectElement: HTMLSelectElement = document.getElementById('guitars') as HTMLSelectElement
    if (!selectElement) return
    selectElement.value = selectedIndex.toString()
  }, [selectedIndex])

  return (
    <div className="controls-container">
      <select
        name="guitars"
        id="guitars"
        onChange={(event) => {
          const newIndex = event.target.value
          setSelectedIndex(parseInt(newIndex))
          window.location.hash = `#${newIndex}`
        }}
        value={selected}
      >
        {data.map((guitar, index) => {
          const year = guitar.year ? `${guitar.year} ` : ''
          const brand = guitar.brand ? `${guitar.brand} ` : ''
          const model = guitar.model || 'Unknown Guitar'

          return (
            <option value={index} key={index}>{`${year}${brand}${model}`}</option>
          )
        })}
      </select>
    </div>
  )
}
