
import React, {useState} from "react";
import styled from "styled-components";
import { API_URL } from "../../API";
import { Navigate } from "react-router-dom";

const SignUpDivWrapper = styled.div`

width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const SignUpDiv = styled.div`
   margin: 50px 140px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin: 100px 0;
   
   h2 {
      font-size: 30px;
   }


   button{
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
  max-width: 290px;
   padding: 10px 5px;
   border: 2px solid #E2B170;
   border-radius: 5px;
`;

const Register = ({setToken}) => {
   const [userMassage, setUserMessage] = useState('')
  
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''

   });

   //Abstract API stuff to API folder 
   
   const handleChange = (event) => {
      const {name, value} = event.target
      setFormData(prevState => ({
         ...prevState,
         [name]: value
      }));
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
         });
         const data = await response.json();
         setUserMessage(data.message)
         
       
         if (data.token) {
         
            setToken(data.token)
            
         } else {
            console.error('No registration token received');
         }

      } catch (error) {
         console.error('There was an error signing up!', error)
         
      }

      setFormData({
         firstName: '',
         lastName: '',
         email: '',
         password: ''
      });
    
   };
//IMPORTANT! ---> finish styling
   return (
      <SignUpDivWrapper>
         <SignUpDiv>
            <h2>Create an Account 🖊️</h2>
            <form onSubmit={handleSubmit}>
         
               <InputDivs>
                  <Input name="firstName" type="text"  onChange={handleChange} value={formData.firstName} placeholder="First Name" />
               </InputDivs>
               <InputDivs>
                  <Input name="lastName"  type="text" onChange={handleChange} value={formData.lastName} placeholder="Last Name"/>
               </InputDivs>
               <InputDivs>
                  <Input name="email"  type="text" onChange={handleChange} value={formData.email} placeholder="Email"/>
               </InputDivs>
               <InputDivs>
                  <Input name="password"  type="password" onChange={handleChange} value={formData.password} placeholder="Password" minLength={8}/>
               </InputDivs>
               <button type="submit" >Sign-up</button>
            </form>
            <p>{userMassage}</p>
         </SignUpDiv>
      </SignUpDivWrapper>
      

   );
}

export default Register