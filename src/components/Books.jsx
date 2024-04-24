/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, {useState, useEffect} from "react";
import { API_URL } from "../API";

const Books = () => {

   const fetchAllBooks = async () => {

      try {
         const response = await fetch(`${API_URL}/books`)
         const books = await response.json();
         console.log(books)
     } catch (error) {
         console.error('Error fetching Books', error);
     }

     
   }

   return(
    <>
    <section className="book-section">
       <div >
          <h2>Books 📚 </h2>
       </div>
    </section>
    


    </>
   );
}

export default Books