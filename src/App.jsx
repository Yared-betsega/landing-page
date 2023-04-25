import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navbar/navbar';
import Image from './components/Image/image';

import Features from './components/features/Features';
import Explore from './components/explore/Explore';
import Pricing from './components/pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Image></Image>
      <Features></Features>
      <Explore></Explore>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
