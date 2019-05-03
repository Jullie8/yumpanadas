import React from 'react';
import { Form } from 'semantic-ui-react';
import './Login.css';
import Button from '@material-ui/core/Button';

const Styles = {
  container: {
    display: 'flex'
  }
}
class Login extends React.Component {

    state = {
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
            email: "",
            password: ""
        })
    };

    render() {
        console.log(this.state)
        const { email, password } = this.state
        return (
            <div className='login'>
                <Form  style={Styles.container} onSubmit={this.submitHandler}>
                    <label className="login-label">Email</label>  {'   '}
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder='Email' 
                    />

                    <label className="login-label">Password</label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    placeholder='Password' 
                    />

                    <Button className="button" color="inherit" size='small' type='submit' value="submit"> Submit</Button>
                </Form>
            </div>
        )
    }
}




export default Login;