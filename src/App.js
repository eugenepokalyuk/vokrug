import React from 'react';

import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'

import './App.css';

import Header from './Components/Header.js';
import HeaderSlide from './Components/HeaderSlide.js';
import TalkAbout from './Components/TalkAbout.js';
import ChatBlock from './Components/ChatBlock.js';
import MeatingBlock from './Components/MeatingBlock.js';
import Heading from './Components/Heading.js';
import ListGroup from './Components/ListGroup.js';
import FAQs from './Components/FAQs.js';
import Advertising from './Components/Advertising.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="uk-container">
      <Header />
      <HeaderSlide />
      <TalkAbout />
      <ChatBlock />
      <MeatingBlock />
      <Heading />
      <ListGroup />
      <FAQs />
      <Advertising />
      <Footer />
    </div>
  );
}

export default App;
