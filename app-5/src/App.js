import React, { Component } from 'react';
import './App.css';
import Image from './Image';
import Login from './Login';

class App extends Component{
  render(){
    return (
      <div className='App'>
      <Image url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/veg-garden-1525260021.jpg"}/>

      <Login/>

      <h3>Garden Go!</h3>
    </div>
    )    
  }
}

export default App;



// className’s are pretty strictly used for styling. Whatever value you give your className is what you need to use in your css files.

//this is the parent component for Login and so that is why the url goes here. the parent passes this information down to the child (Image) so it can do stuff with it

