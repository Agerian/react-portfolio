import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
//import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Portfolio />} />
            </Routes>
          </main>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
