import React, { Component } from 'react'; //does this usually automatically update when you make a class with extends Component??!!
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      words: ['duck', 'duck', 'goose']
    }
  }

  render(){
      let wordsToDisplay = this.state.words.map((element, index) => {
        return <h2 key={index}>{element}</h2>
      });
      return <div className='App'>{wordsToDisplay}</div>
  }
}


export default App;

//so render is a function, that means you can have all sorts of functionality in it before you even get to a return

//questions about binding: when do you know you need to bind? in this one, how does wordsToDisplay know that this.state.words is referring up to the words array in the constructor function of the class? >> follow up thought: so actually render is a method on the App object (class), so everything in render would also have the context of the class, right? It's only when we're using props and jumping from component to component that we need to make sure our context is bound before we pass on information. 

//also kind of bonus: but all of the words in my words array are showing up in a column right down the middle of the screen. in the App.css would you put in styling properties to manipulate these in similar ways to what we have done already with CSS styling? 

//whats the difference between the public folder and the src (source?) folder? why are they separated? 

//there is an html.file in the public folder-- would you also use this file in tandem with the css file to do styling like we've already learned? 