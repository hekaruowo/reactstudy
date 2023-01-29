import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';


function App() {
  return (
    <div>
    
       <AppTitle /> 
       Article 1
       <Rating value={3} /> 
       <Accordion />
       Article 2 
       <Rating value={2} />
    </div>
  );
}

function AppTitle() {
  return (
    <div> 
      This is APP component
    </div>
  )
}

function sum(a: number, b: number) {
  return a + b;
}




export default App;
