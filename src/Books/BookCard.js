import React from 'react';

const BookCard = (props) =>
{
    return(
        <div className="col-sm-3 shadow p-3 mb-5 mr-3 bg-white rounded" onClick={props.click}>
        <div className="card">
        <div className="card-body">
        <h1>{props.title}</h1>
    </div>
    </div>
    </div>
    );
}
export default BookCard;