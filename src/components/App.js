import React from "react";
import { HashRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Footer from "./footer";
import Header from "./Header";

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
