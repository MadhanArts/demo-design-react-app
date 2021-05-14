import './App.css';
import NeomorphismIconFrame from './components/NeomorphismIconExample/NeomorphismIconFrame';

import ScrollProgressBarFrame from './components/ScrollProgressExample/ScrollProgressBarFrame';

import SideBarFrame from './components/SideBarExample/SideBarFrame';

function App() {
  return (
    <div className="App">
      <ScrollProgressBarFrame />
      <SideBarFrame />
      <NeomorphismIconFrame />
    </div>
  );
}

export default App;
