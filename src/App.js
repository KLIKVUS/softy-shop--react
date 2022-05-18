import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import $ from 'jquery';

import "./sass/style.scss";

import Header from './components/Header';
import Main from './components/Main/Main';
import MainCatalog from './components/Main/MainCatalog';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Popup from './components/Popup/Popup';
import Basket from './components/Popup/Basket';
import NotFound from './components/NotFound';
import { popupBasketToggleAction, popupFavoutitesToggleAction } from './store/appConfigReducer';


function App() {
  const appConfig = useSelector((state) => state.appConfig);

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

  const dispatch = useDispatch();
  const openPopup = (popupType) => {
    document.body.classList.toggle("clip");
    switch (popupType) {
        case ("basket"): return dispatch(popupBasketToggleAction());
        case ("favourites"): return dispatch(popupFavoutitesToggleAction());
        default: return dispatch(popupBasketToggleAction());
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/main" />} />

        <Route exact path="/main" element={[
          <Header key={1} headerToggleInfo={appConfig.headerToggle} openPopup={openPopup} />,
          <Main key={2} createLinksWithCoolScroll={createLinksWithCoolScroll} coolScroll={coolScroll} />,
          <Footer key={3} />
        ]} />
        <Route path="/catalog" element={[
          <Header key={1} classNameForNav="header--catalog" searchClassName="header__search--catalog" headerToggleInfo={appConfig.headerToggle} openPopup={openPopup} />,
          <MainCatalog key={2} createLinksWithCoolScroll={createLinksWithCoolScroll} coolScroll={coolScroll} />, <Footer key={3} />
        ]} />

        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>

      {/* {appConfig.popup.favouritesOpen && <Favorites />} */}
      {appConfig.popup.basketOpen && <Popup content={<Basket />} popupType={"basket"} openPopup={openPopup} />}
    </Router>
  );
}

export default App;
