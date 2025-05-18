import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Navbar from './components/Navbar/Navbar.js';
import PromotionalCards from './components/PromotionalCards/PromotionalCards.js';
// Comment out or remove imports for components that don't exist yet
// import QuickLinks from './components/QuickLinks/QuickLinks.js';
// import MainSlider from './components/MainSlider/MainSlider.js';
// import ElektronikFirsatlar from './components/ElektronikFirsatlar/ElektronikFirsatlar.js';
// import SanaOzelOneriler from './components/SanaOzelOneriler/SanaOzelOneriler.js';
// import GezilenUrunler from './components/GezilenUrunler/GezilenUrunler.js';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        
        <main className="main-content">
          <section className="promotional-section">
            <PromotionalCards />
          </section>
        </main>
        
        {/* Comment out sections for components that don't exist yet */}
        {/*
        <section className="quick-links-section">
          <QuickLinks />
        </section>
        
        <section className="slider-firsat-wrapper">
          <MainSlider />
          <ElektronikFirsatlar />
        </section>
        
        <section className="oneriler-section">
          <SanaOzelOneriler />
        </section>
        
        <section className="gezilen-urunler-section">
          <GezilenUrunler />
        </section>
        */}
      </div>
    </Provider>
  );
}

export default App;