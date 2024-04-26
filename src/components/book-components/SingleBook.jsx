/* 1. The ID for Book was created in all Books w/ .map()

    2. A single Books details is being sent to the 'See Details' button 
   that is in the BookCard component. ---> 
   
   2A. BookCard Component the 'See Details onClick which holds Dynamic URL--> (singleBook.id) 
   
   3. The URL Param Created Here Needs to be set as a parameter to Fetch single Book, Routes, and Nav Links

   4. Routes are in App component and Nav Links are in Navigation Component. 
   */

import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"

// All SingleBook DOES IS CHANGE URL FOR DYNAMIC ROUTING & RENDER DETAILS DYNAMICALLY (what page will look like for each book)
const SingleBook = () => {
    const [bookSelection, setBookSelection] = useState(''); // using state to track change in book selection
    return (
        <h2>Single Book</h2>
    );

//Fetch single user unique id then create dynamic URL then return user details

}

export default SingleBook