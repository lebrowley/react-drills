import React, { Component } from 'react';
import './App.css';
import Login from './Login';

class App extends Component{
  render(){
    return (
      <div className='App'>
        <Login/>
      </div>
    )
  }
}

export default App;


//i guess the constructor function is optional because having state is optional too- classes don't have to have state, but if they do, they have to have a constructor

//so the <div>Login</div> is a placeholder of sorts that is bringing in all the information that we wrote up in our Login.js? This file App.js is the parent that is using props (the onChange={the functions} bits on the input and button in Login.js) to bring in this info and functionality from its child Login.js?? 
