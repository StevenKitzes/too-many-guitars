import React from 'react';

import './ScrollToTop.css';

export type ScrollToTopProps = {
  visible: boolean;
};

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ visible }) => {
  return (
    <a
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      href={undefined}
      onClick={(event) => {
        event.stopPropagation();
        document.getElementsByClassName('controls-container')[0].scrollIntoView();
      }}
    >
      <div className='content'>
        ↑
      </div>
    </a>
  );
}
