
import {useEffect, useState} from "react" 
import { fetchSingleBook } from "../../API";
import { useParams, useNavigate } from "react-router-dom"; //Mail-man --> the useParams lets me acceess the dynamicUrl (iD)



/*SingleBook --> this is section esentially my digital book cover ----> it going to allow my users pick up a book, check out cover, read details, and take to check out counter if they like it*/

const SingleBook = () => {
//set up state and useParams >---> useParams will destructure dynamic URL so state can use the ID
const [book, setBook] = useState()
const {bookId} = useParams()

//useEffect to await fetch from url --> the dependancy of the this using my effect is going to be in the bookId changes in state 


    useEffect(() => {
       

        const GetBookById = async () => {
            const book = await fetchSingleBook(bookId);
            console.log('Book from Id >--->', book);
            console.log('Book Id',bookId)
            setBook(book);
            console.log('book--->', book)
        }
        GetBookById();
    }, [bookId])
    
    

    //if state changes fetch and return information

    
    return (
        <h2>Single Book</h2>

        //RENDER BOOK DATA

        //CREATE BUTTON ---->  if user has TOKEN checkout---> IF NO-Token  prompt user to log in.
    );


}

export default SingleBook