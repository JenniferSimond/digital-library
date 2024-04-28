import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//BookCard --> is essentially the book that go on my digital book shelf in my book shop
/* I CODED THIS BASED ON THE THOUGHT THAT EACH CARD IS A Unique ECOSYSTEM---> Button press will go to a uniquely rendered page that Navigates based on button click that page will rendered based on card information */

const BookCardDiv = styled.div`
    width: 268px;
    height: 378px;
    flex-shrink: 0;
    border-radius: 5px;
    background-color: #272727;
`;

const InsideCard = styled.div`

    margin: 20px 25px 0px 25px;
    width: 218px;
    height: 268px;
    align-items: center;
    background-size: cover;  /* Cover the entire div */
    background-position: center;  /* Center the background image */
    border-radius: 5px; 
`;

const DetailsButton = styled.button`
    margin:  21px 76px 20px 76px;
    padding: 0px 29px;          
    font-size: 12px;     
    background-color: #E2B170; 
    color: rgb(0, 0, 0);       
    border: none;        
    border-radius: 30px; 
    cursor: pointer;     
    text-align: center; 
    line-height: 26px;   
    z-index: 0;
`;


const BookCard = ({singleBook}) => {
    const navigate = useNavigate() //Hook USED TO UPDATE URL PROGRAMMATICALLY


    const handleButtonClick = () => {
      
        navigate(`/books/${singleBook.id}`) 
        console.log('Button Click', singleBook)  
    }
    return(
        <BookCardDiv className="book-card">
            {/* //Dynamic link to update book cover based on book ID. */}
            <InsideCard className="inside-card" style={{ backgroundImage: `url(${singleBook.coverimage})` }}> 
            </InsideCard>
            <div>
            <DetailsButton className="details-button" onClick={handleButtonClick}>View Book</DetailsButton>
            </div>
        </BookCardDiv>
    );
}

export default BookCard