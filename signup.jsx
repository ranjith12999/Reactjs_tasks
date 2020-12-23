import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './login';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validPwdRegex = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};
class Signup extends Component {
    constructor(props) {
    super(props);
        this.state = {
        fname: null,
        lname: null,
        r_no:null,
        p_no:null,
        email: null,
        password: null,
        r_password: null,
        errors: {
            fname:'',
            lname: '',
            r_no:'',
            p_no:'',
            email: '',
            password: '',
            r_password: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
        case 'fname':
            errors.fname = 
            value.length > 3
            ?  ''
            : 'First Name contains at least 3 characters';
            break;
        case 'lname':
            errors.lname = 
            value.length < 15
            ?  ''
            : 'Last Name contains at most 15 characters';
            break;    
        case 'p_no': 
            errors.p_no =
            value.length === 10
            ? ''
            :'Phone number not valid';
            break;
        case 'r_no':
            errors.r_no =
            value.length === 10
            ? ''
            :'Roll number not valid';    
            break;
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
        case 'r_password': 
            errors.r_password = 
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
                <div className="container">
                    <div className="auth-wwrapper">
                        <div className="auth-iinner">
                            <form>
                                <h3>Registration</h3>
                                    <div className="form-group">
                                        <label for="inputsm ex1">First Name</label>
                                        <input type="text" name="fname" className="form-control l-font" id="inputsm ex1" placeholder="First Name" onChange={this.handleChange} noValidate/> 
                                        {errors.fname.length > 0 && <span className='error1'>{errors.fname}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label for="inputsm ex2">last Name</label>
                                        <input type="text" name="lname" className="form-control l-font" id="inputsm ex2" placeholder="Last Name" onChange={this.handleChange} noValidate/>
                                        {errors.lname.length > 0 && <span className='error1'>{errors.lname}</span>}
                                    </div>
                                

                                    <div className="form-group">
                                        <label for="inputsm">Roll Number</label>
                                        <input type="number" name="r_no" className="form-control l-font" id="inputsm" placeholder="Roll Number" onChange={this.handleChange} noValidate/>
                                        {errors.r_no.length > 0 && <span className='error1'>{errors.r_no}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label for="inputsm">Date of Birth</label>
                                        <input type="date" nama="DOB" className="form-control l-font" id="inputsm" placeholder="DOB" />
                                    </div>

                                    <div className="form-group">
                                        <label for="inputsm">Phone.no</label>
                                        <input type="number" name="p_no" className="form-control l-font" id="inputsm" placeholder="Phone.no" onChange={this.handleChange} noValidate/>
                                        {errors.p_no.length > 0 && <span className='error1'>{errors.p_no}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label for="inputsm">Degree</label>
                                        <select className="form-control l-font" id="sel1 inputsm">
                                            <option>B.E.</option>
                                            <option>M.Sc.(2 Years)</option>
                                            <option>M.Sc.(5 Years)</option>
                                            <option>M.E.</option>
                                            <option>M.B.A</option>
                                            <option>M.C.A</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label for="inputsm">Branch</label>
                                        <select className="form-control l-font" id="sel1 inputsm">
                                            <option>CS</option>
                                            <option>IT</option>
                                            <option>Mech</option>
                                            <option>Civil</option>
                                            <option>ECE</option>
                                            <option>Mathematics</option>
                                            <option>Chemistry</option>
                                            <option>Physics</option>
                                        </select>
                                    </div>    
                                    <div className="form-group">
                                        <label for="inputsm">Email address</label>
                                        <input type="email" name="email" className="form-control l-font" id="inputsm" placeholder="Enter email" onChange={this.handleChange} noValidate/>
                                        {errors.email.length > 0 && <span className='error1'>{errors.email}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label for="inputsm ex1">Password</label>
                                        <input type="password" name="password" className="form-control l-font" id="inputsm ex1" placeholder="Enter password" onChange={this.handleChange} noValidate />
                                        {errors.password.length > 0 && <span className='error1'>{errors.password}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label for="inputsm ex2">Re-Enter Password</label>
                                        <input type="password" name="r_password" className="form-control l-font" id="inputsm ex2" placeholder="Re-Enter password" onChange={this.handleChange} noValidate/>
                                        {errors.r_password.length > 0 && <span className='error1'>{errors.r_password}</span>}
                                    </div>
                                    
                                    {/* <div className="form-group">
                                        <label for="inputsm">Re-Enter Password</label>
                                        <input type="password" className="form-control" id="inputsm" placeholder="Re-Enter password" />
                                    </div> */}

                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                    <p className="forgot-password text-right l-font">
                                        Already registered, Go to<a to="{/sign-in}">Login?</a>
                                    </p>
                                
                            </form>
                        </div>
                    </div>
                </div>
                {/* <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={Signup} />
                </Switch> */}
            </Router>
            
         );
    }
}
 
export default Signup;