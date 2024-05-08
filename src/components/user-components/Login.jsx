/* TODO - add your code to create a functional React component that renders a login form */
import React, {useState} from "react";
import {API_URL} from "../../API";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginDivWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 100px 0;

    h2 {
        font-size: 30px;
    }

    button {
        margin-top: 10px;
        margin-left: 2px;
        padding: 2px 20px; 
        font-weight: 600;
        font-size: 12px;     
        background-color:  #272727; 
        color: #E2B170;
        border: none;
        border-radius: 30px;
        text-align: center;
        line-height: 26px;
        cursor: pointer;
        box-shadow: 0 4px 11px rgba(63, 62, 61, 0.4), 0 1px 3px rgba(93, 100, 148, 0.2);
        transition: all 0.2s ease-out;

        &:hover {
            box-shadow: 0 8px 22px rgba(63, 62, 61, 0.5), 0 4px 6px rgba(42, 47, 61, 0.5);
            transform: scale(1.05);
        }
    }

    
`;


const InputDivs = styled.div`
   display: flex;
   flex-direction: column;
  margin: 0px 0px 15px 0px;
`;

const Input = styled.input`
   max-width: 240px;
   padding: 10px 5px;
   border: 2px solid #E2B170;
   border-radius: 5px;
`;

const Login = ({setToken}) => {
    const navigate = useNavigate();
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
               navigate('/mybooks') //auto navigate to profile
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
                <h2>Account Login 🔐</h2>
                <form  onSubmit={handleSubmit}>
                    <InputDivs>
                        <Input name="email" type="text" onChange={handleChange} value={loginFormData.email} placeholder="Username" />
                    </InputDivs>
                    <InputDivs>
                        <Input name="password" type="password" onChange={handleChange} value={loginFormData.password} placeholder="Password" minLength={8}/>
                    </InputDivs>
                    <button type="submit">Submit</button>
                </form>
                <p>{userMassage}</p>
            </LoginDiv>
        </LoginDivWrapper>
        
    );
}

export default Login