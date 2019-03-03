import React from 'react';
import { Form } from 'semantic-ui-react';
import './Login.css';
import { Link } from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Styles = {
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
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
                {/* <div className="login-form"> */}

                    <Form  style={Styles.container} onSubmit={this.submitHandler}>
                        {/* <p> Login and view empanadas near you ! </p> */}

                        {/* <Form.Field> */}
                            <label className="login-label">Email</label>  {'   '}
                        
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                placeholder='Email' 
                    
                            />
                        {/* </Form.Field> {" "} */}
                        
                        {/* <Form.Field> */}
                            <label className="login-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                placeholder='Password' />
                        {/* </Form.Field> */}

                        <Button className="button" color="inherit" size='small' type='submit' value="submit"> Submit</Button>
                        {/* <p> Don't have an account? <Link to="/signup"> Sign up now </Link></p> */}
                    </Form>

                {/* </div> */}
            </div>
        )
    }
}




export default Login;