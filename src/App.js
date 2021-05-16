import './App.css';
import NavbarContainerFrame from './components/DropDownNavbarExample/NavbarContainerFrame';
import NeomorphismIconFrame from './components/NeomorphismIconExample/NeomorphismIconFrame';

import ScrollProgressBarFrame from './components/ScrollProgressExample/ScrollProgressBarFrame';
import SearchBarFrame from './components/SearchBarExample/SearchBarFrame';

import SideBarFrame from './components/SideBarExample/SideBarFrame';

// Box Shadow Examples
// https://getcssscan.com/css-box-shadow-examples

function App() {
  return (
    <div className="App">
      <ScrollProgressBarFrame />
      <SideBarFrame />
      <NeomorphismIconFrame />
      <NavbarContainerFrame />

      <SearchBarFrame />

    </div>
  );
}

export default App;
