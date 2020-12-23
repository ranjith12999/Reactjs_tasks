import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validPwdRegex = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);
        this.state = {
        email: null,
        password: null,
        errors: {
            email: '',
            password: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
        case 'email': 
            errors.email = 
            validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
        case 'password': 
            errors.password = 
            validPwdRegex.test(value)
                ? ''
                : 'Invalid password!';
            break;
        default:
            break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
            console.info('Valid Form');
        }else{
            console.error('Invalid Form');
        }
    }
    render() { 
        const {errors} = this.state;
        return ( 
            <Router>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <h3>Sign In</h3>
                            <div className="form-group">
                                <label className="l-font">Email address</label>
                                <input type="email" name="email" className="form-control l-font" placeholder="Enter email" onChange={this.handleChange} noValidate/>
                                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label className="l-font">Password</label>
                                <input type="password" name="password" className="form-control l-font" placeholder="Enter password" onChange={this.handleChange} noValidate />
                                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input btn-log-col" id="customCheck1" />
                                    <label className="custom-control-label l-font" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-log-col btn-hover btn-block">Login</button>
                            <p className="forgot-password text-right">
                                Forgot <Link href="#" to="{/}">password?</Link>
                            </p>
                            {/* <Switch>
                                <Route path="/" component={FPassword} />
                            </Switch> */}
                        </form>
                    </div>
                </div> 
            </Router>
         );
    }
}
 
export default Login;