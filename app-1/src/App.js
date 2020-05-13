import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      message: ''
    }
  }
  handleChange(value){
    this.setState({message: value})
  }

  render(){
    return(
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        <p>{this.state.message}</p>
      </div>
    )
  }
}


export default App;

/*writing out the arrow function in the input onChange
onChange= {function(e){
  this.handleChange(e.target.value)
}}

so this is an event that upon a change (enacted by the user) the function/method called handleChange on our 
App class gets fired with the value on the target object which is also an object on the event object gets passed in

why do you have to pass in an argument (the e.target.value) when it is rendered? why couldn't you just call the function in the render
() => this.handleChange() which would then start up handleChange in the object and then pass in your argument so it would look like
handleChange(e.target.value){
  this.setState({message: e.target.value})
}
in your object

is onChange a prop?? or an event handler? is there a difference? 
*/
