import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
