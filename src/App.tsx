import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';


function App() {
  return (
    <div>
    
       <AppTitle /> 
       <Accordion title={"Меню"}/>
       <Accordion title={"Не Меню"}/>
       Article 1
       <Rating value={3} /> 
       Article 2 
       <Rating value={2} />
       Article 3
       <Rating value={1} />
       Article 4 
       <Rating value={4} />
       Article 5 
       <Rating value={5} />
       Article 6 
       <Rating value={6} />
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
