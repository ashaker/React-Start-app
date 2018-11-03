import React, { Component } from 'react';
import BookCard from './BookCard';
import BookFilter from './BookFilter';

class Books extends Component {
  state = {
    books : [
      {title : 'Book 1', isbn: "1", author:'Akram'},
      {title : 'Book 2', isbn: "2", author:'Akram'},
      {title : 'Book 3', isbn: "3", author:'Shaker'},
      {title : 'Book 4', isbn: "4", author:'Akram'},
      {title : 'Book 5', isbn: "5", author:'Shaker'}
    ],
    userName : 'Akram',
    showBooks : false,
    favouriteList : []
  }

  handleFavourite = (isbn) =>
  {
    console.log(isbn);
    const newBooks = [...this.state.books];
    const selectedBook = newBooks.find(b =>  b.isbn === isbn);
    const newFavouriteList = [...this.state.favouriteList];
    newFavouriteList.push(selectedBook.title);
    this.setState(
      {
        favouriteList : newFavouriteList
      }
    );
    console.log(isbn, selectedBook, newFavouriteList);
  }

  handleDeleteBook = (bookIndex) =>
  {
    console.log(bookIndex);
    const newBooks = [...this.state.books];
    // const bookIndex = newBooks.findIndex(b =>  b.isbn === isbn);
    newBooks.splice(bookIndex, 1);
    this.setState(
      {
        books : newBooks
      }
    );
    console.log(newBooks);
  }

  handleNameChange = (inputText) => {
    this.setState(
      {
        userName : inputText
      }
    );
    console.log(this.state.userName);
  }

  toggleVisible = () => {
    const doesShow = this.state.showBooks;
    this.setState(
      {
        showBooks : !doesShow
      }
    );
    console.log(this.state.showBooks);
  }
  
  handleTextSearch = (inputText) => {
    console.log(inputText);
    const newBooks = [...this.state.books];
    const newSearchList = newBooks.filter((b) => (b.author === inputText));
    this.setState(
      {
        books : newSearchList,
        showBooks : true
      }
    );
    console.log(inputText, newSearchList);
  }

    render() {
      let books = null;
      if (this.state.showBooks) 
      {
        books = 
        (
          <div className='card-group'>
            {
              this.state.books.map((book, index) =>
                <BookCard 
                key={book.isbn} 
                title={book.title}
                favouriteClick={() => this.handleFavourite(book.isbn)}
                deleteClick={() => this.handleDeleteBook(index)}
                />
                )
            }
          </div>
        )
      }
      return (
        <div>
          <div className="container">
           <div className="row">
            <div className='col-sm-6'><h3>Books List</h3></div>
            <div className='col-sm-6'><p>{this.state.userName}</p></div>
           </div>
          </div>
          {
          <div className="container">
            <div className="row">
                <ul className="card-group">
                {
                    this.state.favouriteList.map(
                  (f, index) =>
                    <div className="card"  key={index}>
                      <div className="card-body">
                      {f}
                      </div>
                    </div>
                  )
                }
                </ul>
            </div>
          </div>
          }
          <hr/>
            <BookFilter 
            userName={this.state.userName}
            showCard={this.toggleVisible}
            searchHandler={(inputText) => this.handleTextSearch(inputText)}
            nameChangeHandler={(inputText) => this.handleNameChange(inputText)}
            />
          <hr/>
          { books }
        </div>
      );
    }
  }
  
  export default Books;
  