import React from 'react';

import './ScrollToTop.css';

export type ScrollToTopProps = {
  visible: boolean;
};

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ visible }) => {
  return (
    <a
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      href="https://stevenkitzes.github.io/too-many-guitars/"
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        document.getElementsByClassName('controls-container')[0].scrollIntoView();
      }}
    >
      <div className='content'>
        ↑
      </div>
    </a>
  );
}
