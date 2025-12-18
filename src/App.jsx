import React from 'react';
import './styles/variables.css';
import Hero from './components/layout/hero/hero';
import Header from './components/layout/header/header';
import TopHeader from './components/layout/header/topHeader';
import About from './components/layout/about/about'

function App() {
  return (
    <main>
      <div className="main-wrapper">
        <div className="navigation-group" style={{ position: 'relative', width: '100%', zIndex: 100 }}>
          <TopHeader />
          <Header />
        </div>
        <Hero />
        <About />
      </div>
    </main>
  );
}


export default App;