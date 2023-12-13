import React from 'react';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <HashRouter>
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
