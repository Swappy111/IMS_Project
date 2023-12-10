import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Html from './Pages/Html';
import Css from './Pages/Css';
import Reactquestion from './Pages/Reactquestion';
import Javascript from './Pages/Javascript';

function App() {
 
  const [javascriptPoint, setJavascriptPoint] = useState(0);
  const [htmlPoint, setHtmlPoint] = useState(0);
  const [cssPoint, setCssPoint] = useState(0);
  const [reactPoint, setReactPoint] = useState(0);
 
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/regis'} element={<Registration/>} />
        <Route path={'/login'} element={<Login/>} />

        <Route path={'/dashboard'} element={<Dashboard 
          javascriptPoint={javascriptPoint}
          htmlPoint={htmlPoint}
          cssPoint={cssPoint}
          reactPoint={reactPoint}
          setCssPoint={setCssPoint}
          setHtmlPoint={setHtmlPoint}
          setReactPoint={setReactPoint}
          setJavascriptPoint={setJavascriptPoint}
        />} />
        
        <Route path={'/html'} element={<Html/>} />
        <Route path={'/css'} element={<Css/>} />
        <Route path={'/react'} element={<Reactquestion/>} />
        <Route path={'/javascript'} element={<Javascript/>} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
