import './App.css';

import { Title } from './components/PageTitle/Title';
import { Subtitle } from './components/Subtitle/Subtitle';
import { MainPanel } from './components/MainPanel/MainPanel';
import { FBTCTA } from './components/FBTCTA/FBTCTA';

function App() {
  return (
    <div className="body">
      <Title title="Too many guitars!" />
      <Subtitle title="I bought too many guitars, and now I have to document them for posterity." />
      <FBTCTA />
      <MainPanel />
    </div>
  );
}

export default App;
