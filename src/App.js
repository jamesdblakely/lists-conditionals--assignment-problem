import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state = {
    userInput : ''
  }



  textCounter = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  removeCharacter = (index) => {
    let charArray = this.state.userInput.split('');
    charArray.splice(index, 1);
    const updatedText = charArray.join('');
    this.setState({userInput: updatedText});
  }

  render() {
  let characterBox = null
  if(this.state.userInput.length > 0){
    let characterArray = this.state.userInput.split('');
    characterBox = (
      <div>
      {
        characterArray.map((char, index) => {
          return <CharComponent char={char} key={index} clicked={() => this.removeCharacter(index)}/>
        })
      }
      </div>
    )
  }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" onChange={(event) => this.textCounter(event)} />
        <p>{this.state.userInput}</p>
        <ValidationComponent length={this.state.userInput.length}/>
        {characterBox}
      </div>
    );
  }
}

export default App;
