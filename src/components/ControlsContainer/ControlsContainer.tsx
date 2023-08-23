import React from 'react'

import { GuitarData } from '../../types/types'

import './ControlsContainer.css'

export type ControlsContainerProps = {
  data: GuitarData[],
  fallbackGuitar: GuitarData,
  rear: boolean,
  selectedId: string,
  selectedType: string,
}

export const ControlsContainer: React.FC<ControlsContainerProps> = ({
  data,
  fallbackGuitar,
  rear,
  selectedId,
  selectedType
}) => {
  function buildUrlAndNavigate() {
    // get guitar select html element and value
    const guitarsSelect: HTMLSelectElement = document.getElementById('guitars') as HTMLSelectElement
    let guitarsValue: number = parseInt(guitarsSelect.value)
    
    // get rear view checkbox element and value
    const rearCheckbox: HTMLInputElement = document.getElementById('rear') as HTMLInputElement
    const rearValue: boolean = rearCheckbox.checked
    
    // get types select html element and value
    const typesSelect: HTMLSelectElement = document.getElementById('types') as HTMLSelectElement
    let typesValue: string = typesSelect.value
    
    // if guitar in current view doesn't match selected type
    if (typesValue !== "All types" && data[guitarsValue].type !== typesValue) {
      guitarsValue = parseInt(
        (data.find(d => d.type === typesValue) || fallbackGuitar).id
      )
    }
  
    const protocol: string = (new URL(window.location.toString())).protocol;
    const host: string = (new URL(window.location.toString())).host;
    const path: string = (new URL(window.location.toString())).pathname;
    const params: URLSearchParams = new URLSearchParams(window.location.search)

    params.set('id', guitarsValue.toString())
    params.set('type', typesValue)
    params.set('rear', rearValue.toString())

    window.location.href = `${protocol}//${host}${path}?${params.toString()}`
  }

  const types: string[] = Array.from(new Set(data.map(guitar => guitar.type)));

  return (
    <div className="controls-container">
      <div className="guitar-selector-container">
        <div className="guitar-selector-label">
          Guitars:
        </div>
        <div className="guitar-selector-element">
          <select
            name="guitars"
            id="guitars"
            onChange={() => {
              buildUrlAndNavigate()
            }}
            value={selectedId}
          >
            {data
              .filter(d => selectedType === "All types" || selectedType === d.type)
              .sort((a, b) => {
                if (a.brand < b.brand) return -1;
                if (a.brand > b.brand) return 1;
                if (a.model < b.model) return -1;
                return 1;
              })
              .map(guitar => {
                const brand = `${guitar.brand} - `
                const model = guitar.model
                const year = guitar.year === 'Unknown' ? ' (year unknown)' : ` (${guitar.year})`

                return (
                  <option value={guitar.id} key={guitar.id}>{`${brand}${model}${year}`}</option>
                )
              }
            )}
          </select>
        </div>
      </div>
      <div className="rear-flag-container">
        <div className="rear-flag-label">
          Rear view:
        </div>
        <div className="rear-flag-element">
          <input
            id="rear"
            onChange={() => {
              buildUrlAndNavigate()
            }}
            type="checkbox"
            checked={rear}
          />
        </div>
      </div>
      <div className="filter-selector-container">
        <div className="filter-selector-label">
          Filter by type:
        </div>
        <div className="filter-selector-element">
          <select
            name="types"
            id="types"
            onChange={() => {
              buildUrlAndNavigate()
            }}
            value={selectedType}
          >
            <option value={"All types"} key={"All types"}>All types</option>
            {types.map(type => <option value={type} key={type}>{type}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}
