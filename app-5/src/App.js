import React, { Component } from 'react';
import './App.css';
import Image from './Image';
import Login from './Login';
import Text from './Text';

class App extends Component{
  render(){
    return (
      <div className='App'>
      <Image url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/veg-garden-1525260021.jpg"}/>

      <Login/>

      <Text/>
    </div>
    )
//just a note: i was messing around with how the page looked and added a login and some text just for fun    
  }
}

export default App;

//when should we put a className on something and when shouldn't we? 

//so this is the parent because it is importing Image. Image is it's child because it is giving App information via a prop
