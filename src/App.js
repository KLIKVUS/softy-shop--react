import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import $ from 'jquery';

import Header from './components/Header';
import Main from './components/Main/Main';
import MainCatalog from './components/Main/MainCatalog';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import "./sass/style.scss";
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';


function App() {
  const [popupToogle, setPopupToogle] = useState(false);

  const coolScroll = (anchor="#root", marginTop=0, speed=400) => {
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - marginTop
    }, speed)
  }

  const createLinksWithCoolScroll = (marginTop=0) => {
    $("a.scroll-to").on("click", function(){
      var anchor = $(this).attr('href').match("#[a-zA-Z-]+")[0];
      coolScroll(anchor, marginTop);
    })
  }

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/main" />} />

        <Route path="/main" element={[
          <Header key={1} />,
          <Main key={2} createLinksWithCoolScroll={createLinksWithCoolScroll} coolScroll={coolScroll} />,
          <Footer key={3} />
        ]} />
        <Route path="/catalog" element={[
          <Header key={1} classNameForNav="header--catalog" searchClassName="header__search--catalog" />,
          <MainCatalog key={2} createLinksWithCoolScroll={createLinksWithCoolScroll} coolScroll={coolScroll} />, <Footer key={3} />
        ]} />

        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>

      {}
    </Router>
  );
}

export default App;
