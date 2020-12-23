import React, { Component } from 'react';

class Fpassword extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Forgot password</h3>
                            <div className="form-group">
                                <label className="l-font">Email address</label>
                                <input type="email" className="form-control l-font" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label className="l-font">Phone no.</label>
                                <input type="number" className="form-control l-font" placeholder="Enter Phone no." />
                            </div>

                            <div className="form-group">
                                <label className="l-font">New Password</label>
                                <input type="password" className="form-control l-font" placeholder="Enter new password" />
                            </div>
                            <div className="form-group">
                                <label className="l-font">Re-Enter Password</label>
                                <input type="password" className="form-control l-font" placeholder="Re-enter Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Fpassword;