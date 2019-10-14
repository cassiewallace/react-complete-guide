import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    persons: [
      { name: 'Cassie', age: 28, username: 'Cassie' },
      { name: 'Wallace', age: 29, username: 'Wallace' },
      { name: 'DJ Khalid', age: 26, username: 'DJK' }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  usernameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Cassie', age: 28, username: 'CWALLACE' },
        { name: 'Wallace', age: 29, username: event.target.value },
        { name: 'DJ Khaled', age: 26, username: 'DJKHALED' }
      ]
    } )
  }

  render () {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Cassie')}>
            Switch Name
        </button>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <UserInput 
          username={this.state.persons[1].username}
          changed={this.usernameChangedHandler} 
        />
        <UserOutput 
          username={this.state.persons[1].username}
        />
      </div>
    );
  }
}

export default App;
