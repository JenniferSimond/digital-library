import React, { useEffect, useState } from "react";
import { getUserDetails } from "../../API";  
import MyBookCard from "./MyBookCard";
import styled from "styled-components";

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
   max-height: 570px;
   overflow-y: auto;
   margin: 0 auto;  // Centers the BookShelf in the BookSection
`;


const MyBooks = ({ token }) => {
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState(null);
    const [pageRefresh, setPageRefresh] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                setError('No token provided. Please login.');
                return; //return if no Token
            }
            //if token set loading state & fetch
            setLoading(true);
            try {
                const fetchedUser = await getUserDetails(token);
                setUserDetails(fetchedUser);
                setError(''); 
            } catch (error) {
                console.error('Failed to fetch user details:', error);
                setError('Failed to load user details');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [token, pageRefresh]); 

    //TOGGLE REGRESH TO RE_LOAD THE PAGE WHEN BOOK DELETED --> PASS to MyBookCard
   const refreshHandler = () => {
        setPageRefresh(!pageRefresh)  //toggle opposite value
    }

    if (!token) {
        return <p>Please log in to view your account.</p>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
//IMPORTANT! ---> finish styling
    return (
        <div>
            <h1>My Books 📚</h1>
            {userDetails ? (
                <BookSection>
                    <p>User: {userDetails.email}</p>
                    <h2>My Books:</h2>
                   
                        <BookShelf>
                            {userDetails.books.map(book => (
                                <MyBookCard key={book.id} book={book} token={token} refresh={refreshHandler} />
                            ))}
                        </BookShelf>
                   
                </BookSection>
            ) : (
                <p>No user account found.</p>
            )}
        </div>
    );
}

export default MyBooks;
