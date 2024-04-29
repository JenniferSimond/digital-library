import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { deleteBookReservation } from "../../API";

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
    padding: 0px 20px;          
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


const MyBookCard = ({book, token, refresh}) => {
//SUPER IMPORTANT >----> add book deletion on button click

    const handleBookReturn = async () => {
      console.log(book.id)
      
            try {
                const result = await deleteBookReservation(book.id, token);
                console.log("Book returned:", result);
                refresh();
                // Additional UI update logic here if necessary
            } catch (error) {
                console.error("Failed to return the book:", error);
            }
        };
         
   

    return(
        <BookCardDiv >
            
            <InsideCard  style={{ backgroundImage: `url(${book.coverimage})` }}> 
            </InsideCard>
            <div>
            <DetailsButton onClick={handleBookReturn}>Return Book</DetailsButton>
            </div>
        </BookCardDiv>
    );

}
export default MyBookCard