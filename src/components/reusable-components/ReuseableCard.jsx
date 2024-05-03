// CREATE REUSABLE BOOK CARD
import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
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

const Button = styled.button`
    margin:  21px 76px 20px 76px;
    padding: 0px 24px;          
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