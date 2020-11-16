import logo from '../appiness-logo.jpg';
import { Component } from "react";

class Login extends Component {

    constructor(props){

        super(props);

        if(sessionStorage.getItem('token')){
            this.props.history.push('/dashboard');
        }
    }

    state = {
        username:'',
        password:'',
        errors :{
            username : '',
            password : ''
        },
        submitted:false
    }

    validateForm = event => {

        const { name, value } = event.target;

        let errors = {...this.state.errors} ;

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        switch(name){

            case 'username':
                errors.username = validEmailRegex.test(value)? '' : 'Please enter valid email';
                break;

            case 'password':
                errors.password = value.length < 8 ? 'Password need to be 8 character long!': '';
                break;

            default:
                errors.name = '';
                break;
        }
        console.log(this.state);

        this.setState({
            errors,
            [name]:value
        });
        
        console.log(this.state);

    }

    submitHandler = event =>{
        //Prevent default submit action
        event.preventDefault();

        //Default credentials provided
        let username = 'hruday@gmail.com';
        let password = 'hruday123';

        let valid = true;
        Object.values(this.state.errors).forEach(error => {
            console.log(error);
            error.length > 0 && (valid=false);
        });

        this.setState({
            submitted:true
        });

        if(!valid){
            console.log('validation error');
            return false;
        }

        console.log(this.state);

        if(username === this.state.username && password === this.state.password){
            console.log('login success!');
            sessionStorage.setItem('token','hruday-loggedin');
            this.setState({
                username:'',
                password:''
            });
            
            this.props.history.push('/dashboard');
            window.location.reload();
        } else {
            console.log('Login failed');
        }
    }

    formChangeHandler= event =>{

        this.setState({
            [event.target.name]:event.target.value
        });

        console.log(this.state);
        this.validateForm(event);
    }

    logout = () => {
        sessionStorage.clear();
        this.props.history.push('/');
        window.location.reload();
    }

    render(){

        let submitted = this.state.submitted;

        return(
        <div className="container">
            <h3 class="text-center text-white pt-5">Login form</h3>
            <div class="container">
                <div className="logo"><img src={logo} alt="logo" /></div>
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">
                            <form onSubmit={this.submitHandler} method="POST" className="needs-validation" noValidate>    
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="username">Username</label>
                                    <input type="email" className="form-control" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.formChangeHandler} required />
                                    { (this.state.errors.username.length>0 && submitted) && <div className="error-msg">{this.state.errors.username}</div>}
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.formChangeHandler} required />
                                    { (this.state.errors.password.length>0 && submitted) && <div className="error-msg">{this.state.errors.password}</div>}
                                </div>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Login;