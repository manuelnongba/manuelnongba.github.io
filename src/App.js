import React from 'react';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <div>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
