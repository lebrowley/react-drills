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


//Login here is like a stepping stone so we can step down into the level of Login, the child of this component
//App is the parent, Login is the child
