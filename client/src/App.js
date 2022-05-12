
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCoins from './components/AllCoins';
import NewCoin from './components/NewCoin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllCoins />}/>
          <Route path='/coins/create' element={<NewCoin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
