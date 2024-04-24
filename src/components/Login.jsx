/* TODO - add your code to create a functional React component that renders a login form */
import React, {useState} from "react";
import {API_URL} from "../API";





const Login = ({setToken}) => {
    const [userMassage, setUserMessage] = useState('')
   
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Login form >--->')

        try {
            const response = await fetch(`${API_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginFormData)
            });

            const userData = await response.json();
            console.log('UserData >--->', userData)
            setUserMessage(userData.message)
            
            if (userData.token) {
                localStorage.setItem('loginToken', userData.token)
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
        console.log('Event >--->', event.target.value)
        console.log(loginFormData)
        setLoginFormData(prevState => ({
            ...prevState, 
            [name]: value
        }));
    };


    return (
        <div>
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
        </div>
        
    );
}

export default Login