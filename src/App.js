import React from 'react';
import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

import "./styles/sass/style.scss"


function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
