import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../images/googleIcon.png';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);
    const [token] = useToken(googleUser);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (googleError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message}</p>
    }
    if (googleUser) {
        navigate('/home')
        // navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='flex align-middle'>
                <div style={{ height: '1px' }} className='w-50 bg-dark mt-4'></div>
                <p className='px-2 m-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-dark mt-4'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='submit-btn w-50 d-flex  mx-auto p-2 rounded'>
                <img style={{ width: '20px' }} src={google} alt="" />
                <span className='ms-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;