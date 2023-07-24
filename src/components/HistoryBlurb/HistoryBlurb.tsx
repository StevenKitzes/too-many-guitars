import React from 'react'

import './HistoryBlurb.css'

export type HistoryBlurbProps = {
  copy: string|null
}

const fallback = "This guitar doesn't have a historical record on file."

export const HistoryBlurb: React.FC<HistoryBlurbProps> = ({ copy }) => {
  return (
    <div className="history-blurb">
      {`${copy || fallback}`}
    </div>
  )
}
