/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { API_URL } from "../../API"

const SingleBook = () => {

const fetchSingleBook = async () => {
const [book, setBook] = useState();

try {
    const response = await fetch(`${API_URL}/${book.id}`)
    const fetchedBook = await response.json();
    console.log('Fetched Book', fetchedBook)
    if(!fetchedBook) throw new Error(`No data returned for player`)
    setBook(book)
} catch (error) {
   console.error('Error fetching book', error);
}

}
/*Render -> useEffect -> so React knows to only do this when state (the book) changes.
* --The dependancy array is used because useEffect is dependent of State changing. 
* in our app the side effect, or reason we USE the code with-in useEffect, is state changing.
*/

return(
    <h1>Book</h1>
);

}

export default SingleBook