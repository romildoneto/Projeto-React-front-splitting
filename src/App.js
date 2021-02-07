import React from 'react';
import logo from './img/segSol.jpg';
import './App.css';
import{lazy,Suspense} from 'react';

// import Slogan from './code-splitting/Slogan';
// import Rodape from './code-splitting/Rodape';
const Slogan = lazy (() =>import('./code-splitting/Slogan'));
const Rodape = lazy (() =>import('./code-splitting/Rodape'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <Suspense fallback={<p>Quem acredita sempre alcança!</p>}>
         <Slogan />
       </Suspense>
      
       <Suspense fallback={<p>Foco, Força e Fé!</p>}>
         <Rodape />
       </Suspense>
      
       
      </header>
    </div>
  );
}

export default App;
