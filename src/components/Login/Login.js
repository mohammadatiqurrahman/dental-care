import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle,signInWithGithub,handleEmail,handlePassword,signInUsingEmailPassword} = useAuth()

    return (
        <div>
            <h3>Please Login</h3>

           <div className="container">
           <Form onSubmit={signInUsingEmailPassword} className="w-25 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
           </div>
           <br />
           <p>or</p>
            <button onClick={signInWithGoogle}>Google Sign in</button>
            <button onClick={signInWithGithub}>Github login</button>
            <br /><br />
            <p>New User?<Link to="/register">Create Account</Link></p>
        </div>
    );
};

export default Login;