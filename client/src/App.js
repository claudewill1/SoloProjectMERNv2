
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCoins from './components/AllCoins';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllCoins />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
