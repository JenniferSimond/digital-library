import React from "react";
import { useNavigate } from "react-router-dom";
import './BookCard.css'

//BookCard --> is essentially the book that go on my digital book shelf in my book shop
/* I CODED THIS BASED ON THE THOUGHT THAT EACH CARD IS A Unique ECOSYSTEM---> Button press will go to a uniquely rendered page that Navigates based on button click that page will rendered based on card information */

const BookCard = ({singleBook}) => {
    const navigate = useNavigate() //Hook USED TO UPDATE URL PROGRAMMATICALLY


    const handleButtonClick = () => {
      
        navigate(`/books/${singleBook.id}`) 
        console.log('Button Click', singleBook)  
    }
    return(
        <div className="book-card">
            {/* //Dynamic link to update book cover based on book ID. */}
            <div className="inside-card" style={{ backgroundImage: `url(${singleBook.coverimage})` }}> 
            </div>
            <div>
            <button className="details-button" onClick={handleButtonClick}>View Book</button>
            </div>
        </div>
    );
}

export default BookCard