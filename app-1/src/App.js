import React, { Component } from 'react';
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

// why do you have to pass in an argument (the e.target.value) when it is rendered? why couldn't you just call the function in the render
// () => this.handleChange() which would then start up handleChange in the object and then pass in your argument so it would look like
// handleChange(e.target.value){
//   this.setState({message: e.target.value})
// }
// in your object??

