import React from 'react'

import './ControlsContainer.css'

import { GuitarData } from '../../types/types';

export type ControlsContainerProps = {
  data: GuitarData[],
  selectedIndex: number,
  setSelectedIndex: (n: number) => void;
  setImageUrl: (s: string) => void;
  setHistory: (s: string) => void;
}

export const ControlsContainer: React.FC<ControlsContainerProps> = ({
  data,
  selectedIndex,
  setSelectedIndex,
  setImageUrl,
  setHistory
}) => {
  return (
    <div className="controls-container">Controls Container</div>
  )
}
