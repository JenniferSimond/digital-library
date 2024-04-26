import React from "react";
import { useNavigate } from "react-router-dom";
import './BookCard.css'

const BookCard = ({singleBook}) => {
    const navigate = useNavigate() //sets dynamic route


    const handleButtonClick = () => {
      
        navigate(`/books/${singleBook.id}`) //this is the dynamic value set in singleBook path  // not sure if i need to put : here or on path
        console.log('Button Vlick', singleBook)
    }
    return(
        <div className="book-card">
            <div className="inside-card" style={{ backgroundImage: `url(${singleBook.coverimage})` }}>
            
                {/* <img className="background-img" src={singleBook.coverimage} alt="" /> */}
            </div>
            <div>
            <button className="details-button" onClick={handleButtonClick}>View Book</button>
                {/* <div className="title-div">
                    <p className="book-title">{singleBook.title}</p>
                </div> */}
            </div>
        </div>
    );
}

export default BookCard