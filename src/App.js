import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import Dashboard from './components/Dashboard';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
<BrowserRouter basename="Dashboard-EV"><App/></BrowserRouter>

export default App;