
import {useEffect, useState} from "react" 
import { fetchSingleBook } from "../../API";
import { useParams } from "react-router-dom"; //Mail-man --> the useParams lets me access the dynamicUrl (iD)

/*SingleBook --> this section is essentially my digital book cover ----> it allows my users pick up a book, check out cover, read details, and take to check out counter if they like it*/

const SingleBook = () => {
//set up state and useParams >---> useParams will destructure dynamic URL so state can use the ID
const [book, setBook] = useState()
const {bookId} = useParams() //this change is managed by but†on click // its †he dynamic URL

//useEffect to await fetch from url --> the dependency of the this (using my effect) is going to be in the bookId changes in state 


    useEffect(() => {
       

        const getBookById = async () => {
            
            const fetcheBook = await fetchSingleBook(bookId); //fetched book is what we are getting back from fetch
            console.log('BookId-->',bookId)
           console.log('single Book --> ',book)
            setBook(fetcheBook); //setting state to the fe†ched book
        
        }
       getBookById()
       
    }, []) //watching for change in state
    

    //if state changes fetch and return information
    
    return (
        
        <div>
            <h2>Single Book</h2>
            {console.log(book)}
        </div>

        //RENDER BOOK DATA

        //CREATE BUTTON ---->  if user has TOKEN checkout---> IF NO-Token  prompt user to log in.
    );


}

export default SingleBook