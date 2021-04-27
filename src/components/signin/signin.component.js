import React from 'react';

import './signin.styles.scss';

import FormInput from '../form-input/form.input.component';
import CustomButton from '../custom-button/custom.button.component';
import {auth,signinwithGoogle} from '../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();

        const {email,password}=this.state;

        try {

            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
            
        } catch (error) {
            alert('please enter valid credentials');
            console.log(error.message);
            
        }

        
    
    }

    handleChange=event=>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span>Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name='password' type='password' label='Password' value={this.state.password} handleChange={this.handleChange} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>sign in</CustomButton>
                        <CustomButton onClick={signinwithGoogle} isGoogleSignin>sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignIn;