import React, { Component } from 'react';

import classes from'./App.css';
import Char from './Char/Char'
import Person from './Person/Person';
import Validation from './Validation/Validation'

class App extends Component {
  state = {
    persons: [
      { id: 'alskdjla', name: 'Justin Beiber', age: 27, username: 'Cassie' },
      { id: 'iweuroiu', name: 'Cardi B', age: 26, username: 'Wallace' },
      { id: 'pmmnxcbm', name: 'DJ Khaled', age: 86, username: 'DJK' }
    ],
    showPersons: false,
    input: '',
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
    this.setState( {input: input} );
  }

  deleteCharacterHandler = (index) => {
    const text = this.state.input.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({input: updatedText});
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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

      style.backgroundColor = 'red';
    }

    // if (this.state.persons.length <= 2) {
    //   classes.push('red');
    // }
    // if (this.state.persons.length <= 1) {
    //   classes.push('bold');
    // }
    
    const charList = this.state.input.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        click={() => this.deleteCharacterHandler(index)} />;
    });

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
            See/Hide Persons
        </button>
        {persons}
        <p>
          <input 
            type="text"
            value={this.state.input}
            onChange={(event) => this.inputChangedHandler(event)}>
          </input>
        </p>
        <p>{this.state.inputLength}</p>
        <Validation inputLength={this.state.input.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
