import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';


class LogIn extends Component {
    render() {
      return (
        <div className="App">
        <div className="imageWrapper"></div>
        <div className="row " >
          <div className="col-3">
          
          </div>
          <div className="col-6 borderBox">
            <img src={logo} style={{width: '200px',marginTop: '-23%'}}/><hr/>
            <form>
            <div class="form-group">
              <label for="InputEmail" style={{textAlign: "left"}}>Email address / Mobile Number</label>
              <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email / mobile number"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="InputPassword">Password</label>
              <input type="password" style={{background: 'white', border: 'none',borderBottom: '2px solid gray'}} class="form-control" id="InputPassword" placeholder="Password" />
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" for="exampleCheck1">Stay Logged In?</label>
            </div><br/>
              
            <button className="btn btn-success mb-2" style={{width : '80%'}}><i class="fas fa-sign-in-alt"></i> &nbsp;Login</button><br/><hr/>
            <p>Or Authenticate with</p>
            <button className="btn btn-primary mb-2" style={{width : '80%', backgroundColor: '#446DB0'}}><i class="fab fa-facebook"> &nbsp;</i>Facebook</button><br/>
            <button className="btn btn-primary mb-2" style={{width : '80%', backgroundColor: '#DD2A7B'}}><i class="fab fa-instagram"> &nbsp;</i>Instagram</button><br/>
            </form>
          </div>
          <div className="col-3">
          
          </div>
          
        </div>
      </div>
      );
    }
  }

  export default LogIn;

