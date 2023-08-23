import React from 'react';

import './FBTCTA.css';

// FBT: Fret Board Trainer - CTA: Call to Action
export const FBTCTA: React.FC = () => {
  return (
    <div className='fbt-cta-container'>
      <div className='cta-area'>
        Interested in learning your way around the fretboard?  Check out my trainer and audio flashcards!
      </div>
      <div className='cta-area-mobile'>
        Interested in learning the fretboard?  Check out my free training tools!
      </div>
      <div className='button-area'>
        <a href="https://stevenkitzes.github.io/fretboard-trainer/">
          <div className='button'>Let's train!</div>
        </a>
      </div>
      <hr className="separator" />
    </div>
  );
}
