import React, { Component } from 'react';
import BookCard from './BookCard';

class Books extends Component {
  state = {
    bookName : 'Akram'
  }
  handleChange = () => {
    this.setState(
      {
        bookName : 'Shaker'
      }
    );
    console.log(this.state.bookName);
  }
    render() {
      return (
        <div>
          <h3>Books List</h3>
          <p>Testing out put</p>
          <button onClick={this.handleChange}>Change name</button>
          <hr/>
          <div className='card-group'>
          <BookCard title={this.state.bookName} />
          <BookCard title='Book 2' click={this.handleChange} />
          <BookCard title='Book 3'/>
          <BookCard title='Book 4'/>
          <BookCard title='Book 5'/>
          <BookCard title='Book 6'/>
          </div>
        </div>
      );
    }
  }
  
  export default Books;
  