import React from 'react';

import './signinup.styles.scss';

import SignIn from "../../components/signin/signin.component";
import SignUp from '../../components/signup/signup.component';

const SignInUp =()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/> 
    </div>
)

export default SignInUp;