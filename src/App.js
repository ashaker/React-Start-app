import React, { Component } from 'react';
import './App.css';
import Books from './Books/BooksList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Book Genie
        </header>
          <Books />
      </div>
    );
  }
}

export default App;
