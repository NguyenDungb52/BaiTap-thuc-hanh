import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './website/homePage';

function App() {

  function dung(){
    console.log("dung")
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      R
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
