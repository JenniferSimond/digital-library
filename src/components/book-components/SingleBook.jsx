import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBook, bookCheckOutReservation } from "../../API";


import styled from "styled-components";

const SingleView = styled.div`
margin-top: 25px
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;

const InsideView = styled.div`
// background-color: #272727;
margin-top: 10px;
height: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
gap: 15px;
align-items: center;
 h2{
    padding-bottom: 10px;
 }
`;

const BookCover = styled.img`
 margin: 20px 0px 30px 0px;
    max-width: auto;
    max-height: 350px;
    border-radius: 5px;
`;

const DetailsDiv = styled.div`

display: flex;
flex-direction: column;
gap: 10px;
max-width: 500px;
// background-color: #E2B170; 
    p{
      
        padding: 2px 0px 10px 0px;
    }

    span{
        color: #BF4E30;
    }
.book-summary {
    overflow: auto;
    max-height: 90px
    overflow: auto;
}
      
`;

const DetailsSpan = styled.span`
    font-weight: 750;
    display: block;
    padding-bottom: 2px;
    
`;

const Button = styled.button`
padding: 0px 29px;          
font-size: 12px;     
background-color: #E2B170; 
color: rgb(0, 0, 0);       
border: none;        
border-radius: 30px; 
cursor: pointer;     
text-align: center; 
line-height: 26px;  
`;

const SingleBook = ({token}) => {
    const [loadingState, setLoading] = useState(false);
    const [book, setBook] = useState('');
    const { bookId } = useParams(); // Get the bookId from the URL
    // const [reservation, setReservation] = useState('')

    console.log('Single Token-->',token)

    useEffect(() => {
        const getBookById = async () => {
            setLoading(true); // set Loading state before API fetch
            try {
                const fetchedBook = await fetchSingleBook(bookId);
                setBook(fetchedBook); // Set the fetched book in state
                console.log('bookId -->',bookId)
                console.log('Fetched Book -->',fetchedBook)
                setLoading(false); // if fetch successful reset loading state --> loading state needs to be false to get data or else you get loading state
            } catch (error) {
                // RESET state if error
                setBook(''); 
                setLoading(false); 
                console.error('Failed to fetch book:', error);
            }
        };
        //if there is valid bookId call func
        if (bookId) {
            getBookById(); 
        }
    }, [bookId]);
    //can also use ternary operator...will refactor if this works
    // Display loadingState is true display loadidng state div
    if (loadingState) {
        return <div>Book Loading...</div>; 
    }
  // Display this message if no book was fetched --> ex error fetching
    if (!book) {
        // STYLE LATER
        return <div>No book found</div>; 
    }

    const handleCheckOut = async () => {
        if (!token) {
            alert('Please login or register to check out!');
            return;
        }

       try {
        //Don't need to store or pass, the book id is used during book reservation cancellation, just needed this to get the reservation in database
        const checkOutStat = await bookCheckOutReservation(bookId, token);
        alert(`check out successful,${book.title} is now awailable in My Books`);
        // setReservation(checkOutStat);
        console.log('CheckoutStat',checkOutStat)
       } catch (error) {
        console.error('Checkout failed:', error);
        alert('Checkout failed. Please try again.');
       }
    }

    return (
        <SingleView className="single-view">
            <InsideView>
                <h2>{book.title}</h2>
                <div>
                <BookCover className="book-cover" src={book.coverimage} alt={`${book.ttile} cover`}/>
                </div>
                <div><Button onClick={handleCheckOut}>Check Out</Button></div>
                <DetailsDiv>
                    <p><DetailsSpan>Author: </DetailsSpan> {book.author}</p>
                    <p className="book-summary"><DetailsSpan>Summary: </DetailsSpan>{book.description}</p>
                </DetailsDiv>
            </InsideView>
        </SingleView>
    );
}

export default SingleBook;
