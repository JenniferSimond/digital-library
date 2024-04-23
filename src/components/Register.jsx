/* TODO - add your code to create a functional React component that renders a registration form */
import React, {useState} from "react";
import styled from "styled-components";
import { API_URL } from "../API";

const SignUpDiv = styled.div`
margin: 50px 90px;
   display: flex;
   flex-direction: column;
   
  
`;

const InputDivs = styled.div`
   display: flex;
   flex-direction: column;
  margin: 15px 0px;
`;

const Input = styled.input`
   max-width: 200px;
`;


const Register = ({setToken}) => {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''

   });
   

   const handleChange = (event) => {
      const {name, value} = event.target
    
      setFormData(prevState => ({
         ...prevState,
         [name]: value
      }));
   };

   const handleSubmit = async (event) => {
      console.log('Sign up form!')
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
         console.log('data >--->', data)
         console.log('message:', data.message)
         setToken(data.token)
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

 

   return (
      <SignUpDiv>
     
      <h2>Create an Account 🖊️</h2>
      <p></p>
      <form onSubmit={handleSubmit}>
         
         <InputDivs>
            <Input name="firstName" id="first-name" type="text"  onChange={handleChange} value={formData.firstName} placeholder="First Name" />
         </InputDivs>
         <InputDivs>
            <Input name="lastName" id="last-name" type="text" onChange={handleChange} value={formData.lastName} placeholder="Last Name"/>
         </InputDivs>
         <InputDivs>
            <Input name="email" id="email" type="text" onChange={handleChange} value={formData.email} placeholder="Email"/>
         </InputDivs>
         <InputDivs>
            <Input name="password" id="password" type="password" onChange={handleChange} value={formData.password} placeholder="Password" minLength={8}/>
         </InputDivs>
         <button type="submit" >Sign-up</button>
      </form>

      </SignUpDiv>
      

   );
}

export default Register