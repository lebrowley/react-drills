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
//and then knowing what to put in the return vs the render.....
//you can chain on array methods???..... mind blown 
//what is the key={index} on the h2 doing??

// handleChange(value){
//   let words = this.state.words;
//   let filteredWords = []

//   for(let i=0; i < words.length; i++){
//     if(words[i].includes(value)){
//       filteredWords.push(words[i])
//     }
//   }
//   this.setState({filteredWords: filteredWords})
// }

// render(){
//   return(
//     <div className='App'>
//       <input onChange={e => this.handleChange(e.target.value)} type='text'/>
//       <p>{this.state.filteredWords}</p>
//     </div>
//   )
// }