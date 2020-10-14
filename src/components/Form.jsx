import React,{Component} from 'react';
import '../App.css';


class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
        fullname : '',
        password : '',
        email : '',
        number : '',
        message : ''
        }
    }
  
    handleChange = (e) => {
        this.setState({
        [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        // alert(`My name is ${this.state.fullname}`)
        alert(JSON.stringify(this.state))   // to convert JS object into strings
      e.preventDefault()
    }

    render(){
        return(
            <div className='form'>
                <h1>Contact Us</h1>
                <p>Got a question? We'd love to hear from you</p>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Full Name</label> */}
                    <br/>
                    <input type="text" placeholder='Name' name='fullname' onChange={this.handleChange} value={this.state.fullname}/><br/>
                    {/* <label>Password</label> */}
                    <br/>
                    <input type="password" placeholder='Password' name='password' onChange={this.handleChange} value={this.state.password}/><br/>
                    {/* <label>Email</label> */}
                    <br/>
                    <input type="email" placeholder='Email' name='email' onChange={this.handleChange} value={this.state.email}/><br/>
                    {/* <label>Phone Number</label> */}
                    <br/>
                    <input type="number" placeholder='Mobile Number' name='number' onChange={this.handleChange} value={this.state.number}/><br/>
                    {/* <label>Message</label> */}
                    <br/>
                    <textarea id="msg" name='message' onChange={this.handleChange} cols="40" rows="10" value={this.state.message}></textarea><br/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export default Form;