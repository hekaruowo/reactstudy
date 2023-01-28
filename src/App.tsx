import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';


function App() {
  return (
    <div>
    
       <AppTitle /> 
       <Rating /> 
       <Accordion /> 
       <Rating />
    </div>
  );
}

function AppTitle() {
  return (
    <> 
      This is APP component
    </>
  )
}

function sum(a: number, b: number) {
  return a + b;
}




export default App;
