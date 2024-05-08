// CREATE REUSABLE BOOK CARD
import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    width: 268px;
    height: 378px;
    flex-shrink: 0;
    border-radius: 5px;
    background-color: #272727;
    box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.25),
    8px 13px 10px -23px rgba(0,0,0,0.22);
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

const Button = styled.button`
    margin: 21px 70px 20px 70px;
    padding: 0px 28px; 
    font-weight: 600;  /* Adjusted to standard weight */
    font-size: 12px;     
    background-color: #E2B170; 
    color: rgb(0, 0, 0);       
    border: none;        
    border-radius: 30px;     
    text-align: center; 
    line-height: 26px;   
    cursor: pointer;
    box-shadow: 0 4px 11px rgba(63, 62, 61, 0.4), 0 1px 3px rgba(93, 100, 148, 0.2);
    transition: all 0.2s ease-out;
    &:hover {
        box-shadow: 0 8px 22px rgba(63, 62, 61, 0.5), 0 4px 6px rgba(42, 47, 61, 0.5);
        transform: scale(1.05);
    }
`;



const ReusableCard = ({book, buttonText, handleClick}) => {

    const handleButtonClick = () => {
        handleClick(book.id);
    };

return (
 <CardDiv>
    <InsideCard style={{backgroundImage: `url(${book.coverimage})`}}/>
    <div>
        <Button onClick={handleButtonClick}>{buttonText}</Button>
    </div>
 </CardDiv>
);

}

export default ReusableCard