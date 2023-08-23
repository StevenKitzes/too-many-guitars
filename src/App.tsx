import React, { useEffect, useState } from 'react';

import './App.css';

import { Title } from './components/PageTitle/Title';
import { Subtitle } from './components/Subtitle/Subtitle';
import { MainPanel } from './components/MainPanel/MainPanel';
import { FBTCTA } from './components/FBTCTA/FBTCTA';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowScrollToTop(window.scrollY >= 300);
    });
  }, [])

  return (
    <div className="body" id="body">
      <Title title="Too many guitars!" />
      <Subtitle title="I bought too many guitars, and now I have to document them for posterity." />
      <FBTCTA />
      <MainPanel />
      <ScrollToTop visible={showScrollToTop} />
    </div>
  );
}

export default App;
