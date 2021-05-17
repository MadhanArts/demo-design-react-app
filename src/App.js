import './App.css';

import ScrollProgressBarFrame from './components/ScrollProgressExample/ScrollProgressBarFrame';
import SideBarFrame from './components/SideBarExample/SideBarFrame';
import NeomorphismIconFrame from './components/NeomorphismIconExample/NeomorphismIconFrame';
import NavbarContainerFrame from './components/DropDownNavbarExample/NavbarContainerFrame';
import SearchBarFrame from './components/SearchBarExample/SearchBarFrame';
import TypeWriterEffectFrame from './components/TypeWriterEffectExample/TypeWriterEffectFrame';
import AnimateOnScrollFrame from './components/AnimateOnScrollExample/AnimateOnScrollFrame';


// Box Shadow Examples
// https://getcssscan.com/css-box-shadow-examples

function App() {
  return (
    <div className="App">
      {/* <ScrollProgressBarFrame />
      <SideBarFrame />
      <NeomorphismIconFrame />
      <NavbarContainerFrame />
      <SearchBarFrame /> 
      <TypeWriterEffectFrame /> */}

      <AnimateOnScrollFrame />

    </div>
  );
}

export default App;
