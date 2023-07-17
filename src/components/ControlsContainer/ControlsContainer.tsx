import React from 'react'

import { data } from '../../guitar-data'

import './ControlsContainer.css'

export type ControlsContainerProps = {
  selectedId: number,
}

export const ControlsContainer: React.FC<ControlsContainerProps> = ({
  selectedId
}) => {
  return (
    <div className="controls-container">
      Guitars:&nbsp;
      <select
        name="guitars"
        id="guitars"
        onChange={(event) => {
          const newId = event.target.value
          const proto = (new URL(window.location.toString())).protocol;
          const host = (new URL(window.location.toString())).host;
          const params = new URLSearchParams()
          params.set('id', newId)
          window.location.href = `${proto}//${host}?${params.toString()}`
        }}
        value={selectedId}
      >
        {data.map((guitar, id) => {
          const year = guitar.year ? `${guitar.year} ` : ''
          const brand = guitar.brand ? `${guitar.brand} ` : ''
          const model = guitar.model || 'Unknown Guitar'

          return (
            <option value={id} key={id}>{`${year}${brand}${model}`}</option>
          )
        })}
      </select>
    </div>
  )
}
