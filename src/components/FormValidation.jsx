import React, { Component } from 'react';
import '../App.css';




class FormValidation extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }
    }


    valid = () => {
        if (!this.state.email.includes('@') && (this.state.password.length < 5)) {
            this.setState({
                emailError: 'Invalid Email',
                passwordError: 'Password length should be more than 5'
            })
        }
        else if (!this.state.email.includes('@')) {
            this.setState({
                emailError: 'Invalid Email'
            })
        }
        else if ((this.state.password.length < 5)) {
            this.setState({
                passwordError: 'Password length should be more than 5'
            })
        }
        else {
            return true
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        if (this.valid()) {
            alert("Form has been submitted successfully!!")
        }
        e.preventDefault()
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='form'>
                <h1>React Form</h1>
                <form>
                    <br />
                    <input type="text" placeholder='Enter your Email address' name='email'
                        onChange={this.handleChange} value={this.state.email} /><br />
                    <p style={{ color: 'red', fontSize: '14pc' }}>{this.state.emailError}</p>
                    <br />
                    <input type="password" placeholder='Enter your Password' name='password'
                        onChange={this.handleChange} value={this.state.password} /><br />
                    <p style={{ color: 'red' }}>{this.state.passwordError}</p>
                    <br />
                    <button onSubmit={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}


export default FormValidation;