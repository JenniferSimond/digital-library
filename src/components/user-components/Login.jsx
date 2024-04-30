/* TODO - add your code to create a functional React component that renders a login form */
import React, {useState} from "react";
import {API_URL} from "../../API";
import styled from "styled-components";

const LoginDivWrapper = styled.div`
width: 95%;
display: flex;
justify-content: center;
align-items: center;
`;
const LoginDiv = styled.div`
display: flex;
flex-direction: column;
   align-self: center;
   gap: 10px;
   justify-content: center;
   margin:  100px 0px 0px 0px;

  
  
   div{
    margin-bottom: 10px;
   }

   button{
    margin:  10px 0px 0px 0px;
    padding: 0px 20px;          
    font-size: 12px;     
    background-color: #E2B170; 
    color: rgb(0, 0, 0);       
    border: none;        
    border-radius: 30px; 
    cursor: pointer;     
    text-align: center; 
    line-height: 26px;   
    z-index: 0;
   }

   input{
    padding: 5px;
     width: 100%;
     border: 1px solid #E2B170;
     border-radius: 5px;
   }
`;

const Login = ({setToken}) => {
    const [userMassage, setUserMessage] = useState('')
   
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });
//Abstract API stuff to API folder 
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${API_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginFormData)
            });

            const userData = await response.json();
            setUserMessage(userData.message)
            
            if (userData.token) {
                // localStorage.setItem('loginToken', userData.token)
                //TRY USING THIS INSTEAD OF STATE
               setToken(userData.token)
            } else {
                console.error('Error logging in')
            }

        } catch (error) {
            console.error('There was an error logging in!', error)
        }

        setLoginFormData({
            email: '',
            password: ''
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setLoginFormData(prevState => ({
            ...prevState, 
            [name]: value
        }));
    };
//IMPORTANT! ---> finish styling
    return (
        <LoginDivWrapper>
            <LoginDiv>
                <h2>Login 🔐</h2>
                <form  onSubmit={handleSubmit}>
                    <div>
                        <input name="email" type="text" onChange={handleChange} value={loginFormData.email} placeholder="Username" />
                    </div>
                    <div>
                        <input name="password" type="password" onChange={handleChange} value={loginFormData.password} placeholder="Password" minLength={8}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <p>{userMassage}</p>
            </LoginDiv>
        </LoginDivWrapper>
        
    );
}

export default Login