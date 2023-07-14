import React from 'react';
import './App.css';

import { Title } from './components/PageTitle/Title';
import { Subtitle } from './components/Subtitle/Subtitle';
import { GuitarFrame } from './components/GuitarFrame/GuitarFrame';

function App() {
  return (
    <div className="body">
      <Title title="Too many guitars!" />
      <Subtitle title="I bought too many guitars, and now I have to document them for posterity." />
      <GuitarFrame imageUrl='img/squier-front.jpg' />
    </div>
  );
}

export default App;
