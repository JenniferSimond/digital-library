/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import { Link } from "react-router-dom"

import styled from 'styled-components'

const UL = styled.ul`
list-style-type: none;
`;

const LI = styled.li`
  font-size: 20px;
  display: inline;
  margin: 15px;

  a {
    font-family: "Work Sans", sans-serif;
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    color: #272727; 
  }
`;

const Navigation = () =>  {
   
    
        return (
                <nav >

                    <UL >
                        
                        <LI>
                            <Link to='/books'>Home</Link>
                        </LI>
                        <LI>
                            <Link to='/mybooks'>My Books</Link>
                        </LI>
                        <LI>
                            <Link to='/login'>Login</Link>
                        </LI>
                        <LI>
                            <Link to='/register'>Sign-up</Link>
                        </LI>
                    </UL>
                   
                </nav>
               );
           
        
        
}

export default Navigation