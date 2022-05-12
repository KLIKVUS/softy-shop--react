import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main/Main';
import MainCatalog from './components/Main/MainCatalog';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import "./sass/style.scss";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/main" />} />

          <Route path="/main" element={ [ <Header key={1} />, <Main key={2} /> ] } />
          <Route path="/catalog" element={[
            <Header key={1} classNameForNav="header--catalog" searchClassName="header__search--catalog" />,
            <MainCatalog key={2} />
          ]} />

          <Route path="/auth">
            <Route path="login" element={ <div>Это авторизация</div> } />
            <Route path="registration" element={ <div>Это регистрация</div> } />
          </Route>

          <Route path="favorites" element={ <div>Это избранное</div> } />
          <Route path="basket" element={ <div>Это корзина</div> } />
        </Routes>
      </Router>

      <Footer />
    </React.Fragment>
  );
}

export default App;
