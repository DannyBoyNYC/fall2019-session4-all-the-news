import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Stories from './components/Stories';
import navItems from './components/navItems';

function App() {
  return (
    <>
      <Header siteTitle='All the News That Fits We Print' />
      <Nav navItems={navItems} />
      <Stories />
    </>
  );
}

export default App;
