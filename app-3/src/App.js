import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      words: ['alligator', 'butterfly', 'caterpillar', 'dandelion', 'elephant', 'fox', 'gorilla', 'hollyhock', 'iguana', 'juniper', 'kangaroo'],
      filterString: ''
    }
  }

  handleChange(filter){
    this.setState({filterString: filter})
  }
 
  render(){
    let wordsToDisplay = this.state.words.filter((element, index) => {
      return element.includes(this.state.filterString)
    }).map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return(
      <div className='App'>
        <input onChange={ e => this.handleChange(e.target.value)} type='text'/>
        {wordsToDisplay}
      </div>
    )
  }
}

export default App;



//when to know to put things in the render method vs making a whole new custom method on the object
//as in where is the best place to solve the "toy problem" bit? in the render? in a custom method....?
//and then knowing what to put in the return vs the render....

// Any complex functionality you will want to put in a custom method. Then you should just reference that custom method in the render for whatever onClick event that needs to trigger that more complex functionality.
 
// The event generated is passed to the callback function.

// In the case of () => this.handleChange() the arrow function is the callback function and this.handleChange() is a second separate function that is being returned by the anonymous arrow function.


//what is the key={index} on the h2 doing??