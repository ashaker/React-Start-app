import React from 'react';

const BookCard = (props) =>
{
    return(
        <div className="col-sm-3 shadow p-2 mb-3 mr-3 bg-white rounded">
        <button
        onClick={props.deleteClick} 
        type="button" 
        className="close"
        aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
       
        <div className="card">
        {/* <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/41GDo2kZwEL._AA210_.jpg" alt=""/> */}
            <div className="card-body">
              <h2>{props.title}</h2>
           </div>
        </div>
        <button 
        onClick={props.favouriteClick} 
        type="button" 
        className="close" 
        aria-label="Close">
            <span aria-hidden="true">&hearts;</span>
        </button>
        <button 
        type="button" 
        className="close" 
        aria-label="Close">
            <span aria-hidden="true">&oplus;</span>
        </button>
        <button 
        type="button" 
        className="close" 
        aria-label="Close">
            <span aria-hidden="true">&hellip;</span>
        </button>
    </div>
    );
}
export default BookCard;