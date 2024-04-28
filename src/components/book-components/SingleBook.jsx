import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBook } from "../../API";

import styled from "styled-components";

const SingleView = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;

const InsideView = styled.div`
height: 100%;
max-width: 800px;
display: flex;
flex-direction: column;
gap: 55px;
align-items: center;

`;

const BookCover = styled.img`
    max-width: 250px;
    max-height: auto;
    border-radius: 5px;
`;

const DetailsSpan = styled.span`
    font-weight: 550;
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

const SingleBook = () => {
    const [loadingState, setLoading] = useState(false);
    const [book, setBook] = useState(null);
    const { bookId } = useParams(); // Get the bookId from the URL

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
                setBook(null); 
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
    // Display loadingState is true display loadidng state
    if (loadingState) {
        return <div>Book Loading...</div>; 
    }
  // Display this message if no book was fetched --> ex error fetching
    if (!book) {
        // STYLE LATER
        return <div>No book found</div>; 
    }

    return (
        <SingleView className="single-view">
            <InsideView>
                <h2>{book.title}</h2>
                <div>
                <BookCover className="book-cover" src={book.coverimage} alt={`${book.ttile} cover`}/>
                </div>
                <div>
                    <p><DetailsSpan>Author: </DetailsSpan> {book.author}</p>
                    <p><DetailsSpan>Summary: </DetailsSpan>{book.description}</p>
                    <p><DetailsSpan>Book Status: </DetailsSpan> {book.available ? 'available' : 'reserved'}</p>
                </div>
                <div><Button>Checkout</Button></div>
            </InsideView>
        </SingleView>
    );
}

export default SingleBook;
