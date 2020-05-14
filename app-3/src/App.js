import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      words: ['alligator', 'butterfly', 'caterpillar', 'dandelion', 'elephant', 'fox', 'gorilla', 'hollyhock', 'iguana', 'juniper', 'kangaroo'],
      filteredWords: ''
    }
  }

  //what is the argument filter? why isn't it the event? and is returning filterString, so isn't this kind of an infinite loop? the are each other but they return each other....?
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
//can jsx only go in the render method?? could a custom method have jsx too? or is it best practice to put jsx stuff in the render to keep things organized and good flow? 
//and then knowing what to put in the return vs the render....

//what is the key={index} on the h2 doing??