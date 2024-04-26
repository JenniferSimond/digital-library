// import React from "react";
import { useNavigate } from "react-router-dom";
import './BookCard.css'

const BookCard = ({singleBook}) => {
    const navigate = useNavigate()
    const handleButtonClick = () => {
        //setting the URL dynamically 
        navigate(`/books/${singleBook.id}`)
        console.log('Details Button >---->', singleBook.id)
    }
    return(
        <div className="book-card">
            <div className="inside-card" style={{ backgroundImage: `url(${singleBook.coverimage})` }}>
            
              
            </div>
            <div>
            <button className="details-button" onClick={handleButtonClick}>View Book</button>
              
            </div>
        </div>
    );
}

export default BookCard