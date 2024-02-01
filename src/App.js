import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<ShowList />} />
      <Route exact path="/details/:id" element={<ShowDetails />} />
    </Routes>
  </Router>
);
}

export default App;