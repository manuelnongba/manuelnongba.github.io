import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Writings from '../pages/Writings';
import RLWriting from '../pages/RLWriting';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/experience" exact element={<Experience />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/writings" exact element={<Writings />} />
        <Route
          path="/writings/reinforcement-learning-david-silver"
          exact
          element={<RLWriting />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
