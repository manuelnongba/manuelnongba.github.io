import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Footer from "./footer";
import Header from "./Header";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
