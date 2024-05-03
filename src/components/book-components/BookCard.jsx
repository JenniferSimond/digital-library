import React from "react";
import { useNavigate } from "react-router-dom";
import ReusableCard from "../reusable-components/ReuseableCard";

//Each BookCard --> is essentially a book that go on my digital book shelf in my book shop
// returning reusable card component and passing it unique props

const BookCard = ({singleBook}) => {
    const navigate = useNavigate() //Hook USED TO UPDATE URL PROGRAMMATICALLY


    const handleButtonClick = () => {
      
        navigate(`/books/${singleBook.id}`) 
    }
    return <ReusableCard book={singleBook} buttonText='View Details' handleClick={handleButtonClick} />
}

export default BookCard