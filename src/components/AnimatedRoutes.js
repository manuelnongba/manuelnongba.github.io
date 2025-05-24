import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/experience" exact element={<Experience />} />
        <Route path="/projects" exact element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
