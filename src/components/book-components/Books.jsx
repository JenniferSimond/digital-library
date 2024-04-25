/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, {useState, useEffect} from "react";
import BookCard from "./BookCard";
import { API_URL } from "../../API";
import styled from "styled-components";

const BookSection = styled.div`
   
   // 

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
   const fetchAllBooks = async () => {

      try {
         const response = await fetch(`${API_URL}/books`)
         const books = await response.json();
         console.log('Books >--->',books.books)
         return books.books
     } catch (error) {
         console.error('Error fetching Books', error);
     }
   

   }

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
          <BookCard key={singleBook.id} singleBook={singleBook} />
          ))}
          
       </BookShelf>
    </BookSection>
    


    </>
   );
}

export default Books