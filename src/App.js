import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main/Main';
import MainCatalog from './components/Main/MainCatalog';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import "./sass/style.scss";
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/main" />} />

        <Route path="/main" element={ [ <Header key={1} />, <Main key={2} />, <Footer key={3} /> ] } />
        <Route path="/catalog" element={[
          <Header key={1} classNameForNav="header--catalog" searchClassName="header__search--catalog" />,
          <MainCatalog key={2} />, <Footer key={3} />
        ]} />

        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>

        <Route path="favorites" element={ <div>Это избранное</div> } />
        <Route path="basket" element={ <div>Это корзина</div> } />
      </Routes>
    </Router>
  );
}

export default App;
