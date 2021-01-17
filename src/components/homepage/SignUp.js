import React, { useState } from 'react';
import axios from 'axios';

const successMessage = "Sign up successful!";

export default function SignUp(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('NORMAL_USER');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const clearForm = () => {
        setEmail('');
        setPassword('');
        setUserType('NORMAL_USER');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let roles = new Set();
        // As every user is a normal user
        roles.add({role: "NORMAL_USER"});
        roles.add({role: userType});
        let payload = {
            userName: email,
            password: password,
            roles: Array.from(roles)
        };
        axios.post(`${process.env.REACT_APP_API_URL}/signup`,payload)
        .then((res)=> {
            setShowSuccess(true);
            clearForm();
        })
        .catch((error) => {
            if(error.response){
                setShowError(true);
                setErrorMessage(error.response.data.detail);
            }
            else{
                setShowError(true);
                setErrorMessage('Server Error');
            }
            clearForm();
        });
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={onSubmit}>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />  
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" 
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Which type of user are you?</label>
                        <select className="form-control"
                        name="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        >
                            <option value="RESEARCHER">Researcher</option>
                            <option value="NORMAL_USER">Normal User</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <br></br>
                    {
                        showError && (
                            <p className="errorText">
                                {errorMessage}
                            </p>
                        )
                    }
                    {
                        showSuccess && (
                            <p className="successText">
                                {successMessage}
                            </p>
                        )
                    }
                </form>
            </div>
        </div>
    );
}