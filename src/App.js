import "./App.css";
import {useEffect} from "react";

import ScrollProgressBarFrame from "./components/ScrollProgressExample/ScrollProgressBarFrame";
import SideBarFrame from "./components/SideBarExample/SideBarFrame";
import NeomorphismIconFrame from "./components/NeomorphismIconExample/NeomorphismIconFrame";
import NavbarContainerFrame from "./components/DropDownNavbarExample/NavbarContainerFrame";
import SearchBarFrame from "./components/SearchBarExample/SearchBarFrame";
import TypeWriterEffectFrame from "./components/TypeWriterEffectExample/TypeWriterEffectFrame";
import AnimateOnScrollFrame from "./components/AnimateOnScrollExample/AnimateOnScrollFrame";
import ButtonsFrame from "./components/ButtonsExample/ButtonsFrame";
import NotificationFrame from "./components/NotificationExample/NotificationFrame";
import NavBar from "./components/Navbar/NavBar";
import PerfectAvatarFrame from "./components/PerfectAvatarExample/PerfectAvatarFrame";
// import CustomToggleSwitch from "./components/ToggleSwitchExample/CustomToggleSwitch";

// Box Shadow Examples
// https://getcssscan.com/css-box-shadow-examples

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("preloader").classList.remove("visible");
    }, 100);
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <ScrollProgressBarFrame />
      <SideBarFrame />
      <NeomorphismIconFrame />
      <NavbarContainerFrame />
      <SearchBarFrame />
      <TypeWriterEffectFrame />
      <AnimateOnScrollFrame />
      <ButtonsFrame />
      <NotificationFrame />
      <PerfectAvatarFrame />
    </div>
  );
}

export default App;
