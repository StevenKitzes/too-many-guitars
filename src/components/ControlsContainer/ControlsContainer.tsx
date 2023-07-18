import React from 'react'

import { data } from '../../guitar-data'

import './ControlsContainer.css'

function buildUrlAndNavigate() {
  const guitarsSelect: HTMLSelectElement = document.getElementById('guitars') as HTMLSelectElement
  let guitarsValue: number = parseInt(guitarsSelect.value)

  const brandsSelect: HTMLSelectElement = document.getElementById('brands') as HTMLSelectElement
  const brandsValue: string = brandsSelect.value

  if (brandsValue !== "All brands" && data[guitarsValue].brand !== brandsValue) {
    let guitar = 0
    while (data[guitar].brand !== brandsValue) {
      guitar++
    }
    guitarsValue = guitar
  }

  const proto: string = (new URL(window.location.toString())).protocol;
  const host: string = (new URL(window.location.toString())).host;

  const params = new URLSearchParams()
  params.set('id', guitarsValue.toString())
  params.set('brand', brandsValue)
  
  window.location.href = `${proto}//${host}?${params.toString()}`
}

export type ControlsContainerProps = {
  selectedBrand: string,
  selectedId: number,
}

export const ControlsContainer: React.FC<ControlsContainerProps> = ({
  selectedBrand,
  selectedId
}) => {
  const brands: string[] = Array.from(new Set(data.map(guitar => guitar.brand || "Unknown")));

  return (
    <div className="controls-container">
      Guitars:&nbsp;
      <select
        name="guitars"
        id="guitars"
        onChange={() => {
          buildUrlAndNavigate()
        }}
        value={selectedId}
      >
        {data.filter(d => d.brand === selectedBrand || "All brands" === selectedBrand).map(guitar => {
          const year = guitar.year ? `${guitar.year} ` : ''
          const brand = guitar.brand ? `${guitar.brand} ` : ''
          const model = guitar.model || 'Unknown Guitar'

          return (
            <option value={guitar.id} key={guitar.id}>{`${year}${brand}${model}`}</option>
          )
        })}
      </select>
      &nbsp;
      Filter by brand:&nbsp;
      <select
        name="brands"
        id="brands"
        onChange={() => {
          buildUrlAndNavigate()
        }}
        value={selectedBrand}
      >
        <option value={"All brands"} key={"All brands"}>All brands</option>
        {brands.map(brand => <option value={brand} key={brand}>{brand}</option>)}
      </select>
    </div>
  )
}
