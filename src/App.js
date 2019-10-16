import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import CharComponent from './CharComponent/CharComponent'
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {
  state = {
    persons: [
      { id: 'alskdjla', name: 'Justin Beiber', age: 27, username: 'Cassie' },
      { id: 'iweuroiu', name: 'Cardi B', age: 26, username: 'Wallace' },
      { id: 'pmmnxcbm', name: 'DJ Khaled', age: 86, username: 'DJK' }
    ],
    showPersons: false,
    input: null,
    inputLength: null,
    inputCharacters: null,
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  inputChangedHandler = event => {
    const input = event.target.value;
    const inputLength = input.length;
    const inputCharacters = input.split('');

    this.setState( {
      input: input, 
      inputLength: inputLength, 
      inputCharacters: inputCharacters
    } );
  }

  deleteCharacterHandler = (characterIndex) => {
    const inputCharacters = [...this.state.inputCharacters];
    inputCharacters.splice(characterIndex, 1);

    const input = inputCharacters.join('')

    this.setState({
      input: input, 
      inputCharacters: inputCharacters
    })
  }

  render () {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id} />
          })}
        </div> 
      );
    }
    
    let inputCharacters = null;
    
    if (this.state.inputCharacters) {
      inputCharacters = (
        <div>
          {this.state.inputCharacters.map((character, index) => {
            return <CharComponent 
            character={character} 
            click={() => this.deleteCharacterHandler(index)} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
            See/Hide Persons
        </button>
        { persons }
        <p>
          <input 
            type="text"
            value={this.state.input}
            onChange={(event) => this.inputChangedHandler(event)}>
          </input>
        </p>
        <p>{this.state.inputLength}</p>
        <ValidationComponent inputLength={this.state.inputLength}/>
        { inputCharacters }
      </div>
    );
  }
}

export default App;
