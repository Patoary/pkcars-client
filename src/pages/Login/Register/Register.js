import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [agree, setAgerr] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigateLogin = event => {
        navigate('/login')
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        if (user) {
            navigate('/home');
        }

    }

    return (
        <div className='form sm:w-10/12  md:w-3/4 lg:w-1/2'>
            <h3 className='fs-3 mb-3'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setAgerr(!agree)} className={` ${agree ? ' ' : 'text-danger'}`} label="Accept all terms and conditions" />
                </Form.Group>
                <Button
                    disabled={!agree}
                    className='submit-btn'
                    variant="border-0 d-block mx-auto mb-2"
                    type="submit">
                    Register
                </Button>
            </Form>
            <p><span style={{ cursor: 'pointer', color: '#116466' }} className='fs-4 font-bold' onClick={navigateLogin}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;