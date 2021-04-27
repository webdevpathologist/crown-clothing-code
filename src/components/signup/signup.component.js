import React from 'react';
import FormInput from '../form-input/form.input.component';
import CustomButton from '../custom-button/custom.button.component';

import {auth,createUserProfDoc} from '../firebase/firebase.utils';

import './signup.styles.scss';

class SignUp extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            displayname:'',
            email:'',
            password:'',
            confirmpassword:''
        }
    }

    handleSubmit=async event=>{

        event.preventDefault();
        const {displayname,email,password,confirmpassword}=this.state;
        if (password!==confirmpassword){
            alert('Passwords do not Match, Try again');
            return;
        }

        try{
            const {user} =await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfDoc(user,{displayname});
            this.setState={
                displayname:'',
                email:'',
                password:'',
                confirmpassword:''
            }

        }
        catch(error){
            console.log(error.message);
        }

    }

    handleChange=event=>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayname' type='text' label='Display Name' value={this.state.displayname} handleChange={this.handleChange} required/>
                    <FormInput name='email' type='email' label='Email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name='password' type='password' label='Password' value={this.state.password} handleChange={this.handleChange} required/>
                    <FormInput name='confirmpassword' type='password' label='Confirm Password' value={this.state.confirmpassword} handleChange={this.handleChange} required/>
                    <CustomButton type='submit'>sign up</CustomButton>
                </form>
            </div>
        )
    }
    
}


export default SignUp;