// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
initializeAuthentication();
const Register = () => {
    const {signInWithGoogle,signInWithGithub,handleEmail,handlePassword,createNewUser,updateNameChange,error} = useAuth();
    return (
        <div>
            <h3>Please Register</h3>

           <div className="container">
           <Form onSubmit={createNewUser} className="w-25 mx-auto">
               <input onBlur={updateNameChange} type="name" placeholder="Enter Your Name" />
               <br /><br />
                <input onBlur={handleEmail} type="email" placeholder="Enter Email" />
                <br /><br />
                <input onBlur={handlePassword} type="password" placeholder="password" />
                <br />
                <p>{error}</p>
                <br /><br />
                <input type="submit" value="Register" />
            </Form>
           </div>
           <br />
           <p>or</p>
            <button onClick={signInWithGoogle}>Google Sign in</button>
            <button onClick={signInWithGithub}>Github login</button>
            <br /><br />
            <p>Already Have an Account?<Link to="/login">Please Login</Link></p>
        </div>
    );
};

export default Register;