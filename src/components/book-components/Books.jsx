/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, {useState, useEffect} from "react";
import BookCard from "./BookCard";
import { fetchAllBooks } from "../../API";
import styled from "styled-components";

//BOOKS ==> is essentially a bookshelf in the book store that holds all the unique books. 
const BookSection = styled.div`
   // width: 100%; 
`;

const BookShelf = styled.div`
   // padding-top: 10px;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 30px;
   justify-content: flex-start;  // Aligns items to the left
   align-content: flex-start;
   width: 80%;  // Adjustable as per design needs
   max-height: 770px;
   overflow-y: auto;
   margin: 0 auto;  // Centers the BookShelf in the BookSection
`;


const Books = () => {
   const [bookList, setBookList] = useState([])
 
   useEffect(() => {
      const getBooks = async () => {
         
         const libraryBooks = await fetchAllBooks()
         console.log(libraryBooks)
         setBookList(libraryBooks)
      }
      getBooks();
   }, [])
   
   return(
    <>
    <BookSection >
          
       <BookShelf>
          {bookList.map(singleBook => ( 
            /* SEND SINGLE BOOK INFO TO PLAYER CARD 
            * singleBook is sending playerCard the data needed to set URL path dynamically 
            * which allows singleBook URL to update dynamically*/
          <BookCard key={singleBook.id} singleBook={singleBook} /> 
          ))}
          
       </BookShelf>
    </BookSection>
    


    </>
   );
}

export default Books