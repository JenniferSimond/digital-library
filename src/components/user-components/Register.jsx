
import React, {useState} from "react";
import styled from "styled-components";
import { API_URL } from "../../API";

const SignUpDivWrapper = styled.div`
width: 95%;
display: flex;
justify-content: center;
align-items: center;
`;

const SignUpDiv = styled.div`
margin: 50px 90px;
   display: flex;
   flex-direction: column;

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
`;

const InputDivs = styled.div`
   display: flex;
   flex-direction: column;
  margin: 10px 0px 10px 0px;
`;

const Input = styled.input`
   max-width: 200px;
   padding: 5px;
   border: 1px solid #E2B170;
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