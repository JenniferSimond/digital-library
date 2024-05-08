import React, { useEffect, useState } from "react";
import { getUserDetails } from "../../API";  
import AccountBookCard from "./AccountBookCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const BookSection = styled.div`
    width: 100%; 
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
   max-height: 680px;
   overflow-y: auto;
   margin: 0 auto;  // Centers the BookShelf in the BookSection
`;

const UserInfo = styled.div`

    margin: 20px 0px 20px 165px;
    display: flex;
    flex-direction: column;
    padding: 10px;
   gap: 5px;

   p {
    font-weight: 500;
    color: #bf4e30;
    font-size: 15px;
   }

   span {
    
    font-style: italic;
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
       navigate('/login');
       return null //return null ---> don't render on screen --> only way it worked here
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
//IMPORTANT! ---> finish styling
    return (
        <MainDiv>
            <h2>My Books 📚</h2>
            {userDetails ? (
                <BookSection>
                    <UserInfo>
                    
                        <span>
                            <p>User: {userDetails.email}</p>
                        </span>
                        <p>Resereved Books:</p>
                    </UserInfo>
                   
                        <BookShelf>
                            {userDetails.books.map(book => (
                                <AccountBookCard key={book.id} book={book} token={token} refresh={refreshHandler} />
                            ))}
                        </BookShelf>
                   
                </BookSection>
            ) : (
                <p>No user account found.</p>
            )}
        </MainDiv>
    );
}

export default UserBooks;
