import React from 'react';
import { HashRouter } from 'react-router-dom';
import PagesRoutes from './components/PagesRoutes';
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
          <PagesRoutes />
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
