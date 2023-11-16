import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './LoginAuth.scss';
import loggedin from './LoggedIn';
class Login extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  constructor(props) {
    super(props);
    this.state = {
      currentView: "logIn",
      username:'',
      email:'',
      password:''
    };
    this.handleLogin=this.handleLogin.bind(this);
    this.handleChange =this.handleChange.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
}
async handleLogin(event){
  const UserObject = {
    username: this.state.username,
    password: this.state.password
  };
const loginSuccess = await this.axiosPost(UserObject);
console.log (loginSuccess)
 if(loginSuccess.email != null){
  axios.get()
  this.nextPath('/dashboard/overview')
 }
}

async axiosPost(UserObject) {
  const responsetype = await axios.post('http://localhost:9090/save', UserObject)
  return responsetype.data
}
handleChange(event) {
  let target = event.target;
  let value = target.type === "checkbox" ? target.checked : target.value;
  let name = target.name;
    this.setState({
      [name]: value
    }); 
}
    handleSubmit(e) {

      e.preventDefault();
      setTimeout(() => { this.nextPath('/nirfranking') }, 100)
      const UserObject = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };
      axios.post('http://localhost:9090/save', UserObject)
      .then(res => console.log(res.data));
      console.log("The form was submitted with the following data:");
      console.log(UserObject);
      this.createdfunction()
     
      }
   

      createdfunction(){
        return(
          <div><h>createdpage</h>
          </div>
        )
      }
    changeView = (view) => {
      this.setState({
        currentView: view
      })
    } 

    onSubmit(e){
      e.preventDefault();
      console.log("this is submit function for the data login page")
    }
    
  
    
    currentView = () => {
     
      switch(this.state.currentView) {
        case "signUp":
          return (
          
            <form onSubmit={this.handleSubmit}>
              <h2>Sign Up!</h2>
              <fieldset>
                <legend>Create Account</legend>
                <ul>
                  <li>
                    <label for="username">Username:</label>
                    <input type="text" id ="username" required  name="username"  onChange={this.handleChange}  />
                  </li>
                  <li>
                    <label for="email">Email:</label>
                    <input type="email" id="email" required name="email"   placeholder="Enter your email..."   
                    onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <label for="password">Password:</label>
                    <input type="password" id="password" required    name ="password" placeholder="Enter your password..."  
                    onChange={this.handleChange}
                  />
                  </li>
                </ul>
              </fieldset>
              <button type="button" onClick ={this.handleSubmit} >Submit</button>
              <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
            
            </form>
          )
          break
        case "logIn":
          return (
            <form onSubmit={this.handleLogin}>
              <h2>Welcome Back!</h2>
              <fieldset>
                <legend>Log In</legend>
                <ul>
                  <li>
                    <label for="username">Username:</label>
                    <input type="text" id="username" required name="username"  placeholder="Enter your username..."
                    onChange={this.handleChange}  />
                  </li>
                  <li>
                    <label for="password">Password:</label>
                    <input type="password" id="password" required  name="password" placeholder="Enter your password..."
                    onChange={this.handleChange}  />
                  </li>
                  <li>
                    <i/>
                    <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                  </li>
                </ul>
              </fieldset>
              <button type="button"  onClick={this.handleLogin} >Login</button>
              <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
            </form>
          )
          break
        case "PWReset":
          return (
            <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
          </form>
          )
        default:
          break
      }
    }
  
    render() {
       return (
        <section id="entry-page">
          {this.currentView()}
        </section>
      )
    }
  }
export default Login;