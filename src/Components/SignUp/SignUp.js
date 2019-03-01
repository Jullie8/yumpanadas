import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import './SignUp.css';
import { Link } from 'react-router-dom'
class SignUp extends React.Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        this.props.handleSubmit(e, this.state)
        this.setState({
            username: "",
            email: "",
            password:""
        })  
    };


    //I need to find a way to submit the information I have on state 
    render () {
        console.log(this.state)

        const {username, email, password} = this.state

        return (
            <div className='signup'>
                <div className="signup-form">

                    <Form onSubmit={this.submitHandler}>
                        <p> SignUp to discover empanadas near you </p>
                        <Form.Field>
                            <label>Username</label>
                            <input 
                            type="text" 
                            name="username" 
                            value={username} 
                            onChange={this.handleChange} 
                            placeholder='Username' />
                        </Form.Field>

                        <Form.Field>
                            <label>Email</label>
                            <input 
                            type="text" 
                            name="email" 
                            value={email} 
                            onChange={this.handleChange} 
                            placeholder='Email' />
                        </Form.Field>

                        <Form.Field>
                            <label>Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={this.handleChange} 
                            placeholder='Password' />
                        </Form.Field>

                        <Button type='submit' value="submit" >Submit</Button>
                        <p> Already have an account? <Link to="/login"> Log in now</Link></p>
                    </Form>
                  
                </div>
            </div>
        )
    }
}




export default SignUp;