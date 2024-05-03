import React, { useEffect, useState } from "react";
import { getUserDetails } from "../../API";  
import AccountBookCard from "./AccountBookCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
   max-height: 670px;
   overflow-y: auto;
   margin: 0 auto;  // Centers the BookShelf in the BookSection
`;
const LoginPromptWrapper = styled.div`
width: 95%;
display: flex;
justify-content: center;
align-items: center;

`;

const LoginPromptDiv = styled.div`
   display: flex;
   align-self: center;
   justify-content: center;
   margin:  100px 0px 0px 0px;
  
   width: 100%;

   p{
    font-size: 15px;
    text-align: center;
    font-weight: 550;
    color: #BF4E30;
   }
`;

  
 

const UserBooks = ({ token }) => {
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState(null);
    const [pageRefresh, setPageRefresh] = useState(false)
    const navigate = useNavigate();

    
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
       navigate('/login')
       return null //null here (in components render) means don't render this on screen
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
                                <AccountBookCard key={book.id} book={book} token={token} refresh={refreshHandler} />
                            ))}
                        </BookShelf>
                   
                </BookSection>
            ) : (
                <p>No user account found.</p>
            )}
        </div>
    );
}

export default UserBooks;
