import React from "react";

import './BookCard.css'

const BookCard = ({singleBook}) => {

    return(
        <div className="book-card">
            <div className="inside-card" style={{ backgroundImage: `url(${singleBook.coverimage})` }}>
            
                {/* <img className="background-img" src={singleBook.coverimage} alt="" /> */}
            </div>
            <div>
            <button className="details-button">View Book</button>
                {/* <div className="title-div">
                    <p className="book-title">{singleBook.title}</p>
                </div> */}
            </div>
        </div>
    );
}

export default BookCard