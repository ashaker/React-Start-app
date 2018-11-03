import React, { Component } from 'react';

class BookFilter extends Component {
state = {
    inputName : ''
}
handleTextBox = (event) => {
this.setState(
    {
        inputName : event.target.value 
    }
);
}
    render()
    {
        return(
            <div> 
                <button onClick={this.props.showCard}>Show Cards</button>
                <input type='text' onChange={this.handleTextBox} value={this.state.inputName}/>
                <button onClick={() => this.props.searchHandler(this.state.inputName)}>Search</button>
            </div>
        )
    }
}

export default BookFilter;