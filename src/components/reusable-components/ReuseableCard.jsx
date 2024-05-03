// CREATE REUSABLE BOOK CARD
import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    width: 268px;
    height: 368px;
    flex-shrink: 0;
    border-radius: 5px;
    background-color: #272727;
    box-shadow: 16px 14px 26px -12px rgba(0,0,0,0.25),
0px 10px 10px 0px rgba(0,0,0,0.22);
`;

const InsideCard = styled.div`

    margin: 20px 25px 0px 25px;
    width: 218px;
    height: 268px;
    align-items: center;
    background-size: cover;  /* Cover the entire div */
    background-position: center;  /* Center the background image */
    border-radius: 5px; 
    box-shadow: 0px 50px 100px -20px rgba(0,0,0,0.25),
0px 30px 60px -30px rgba(0,0,0,0.3),
0px -2px 6px 0px rgba(0,0,0,0.35) inset;



`;

const Button = styled.button`
    margin:  25px 70px 20px 70px;
    padding: 2px 29px; 
    font-weight: 560;         
    font-size: 12px;     
    background-color: #E2B170; 
    color: rgb(0, 0, 0);       
    border: solid 1px rgba(35, 62, 61, 0.5) ;        
    border-radius: 30px; 
    cursor: pointer;     
    text-align: center; 
    line-height: 26px;   
    z-index: 0;
    box-shadow: rgba(255, 255, 255, 0.2) 0 1px 0 0 inset;
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