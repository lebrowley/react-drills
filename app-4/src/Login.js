import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super()
        
        this.state = {
            username: '', 
            password: ''
        };

        this.handleLogin = this.handleLogin.bind(this)
        //why do we only have to bind this one? what about the other methods handleUsernameChange and handlePasswordChange?>> because it is the only one that uses the this keyword in its return so it needs to have context established 
    }

    handleUsernameChange(name){
        this.setState({username: name})
    }

    handlePasswordChange(pass){
        this.setState({password: pass})
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input
                onChange={ (e) => this.handleUsernameChange(e.target.value) }
                type='text'
                placeholder='username'
                />
                <input
                onChange={ (e) => this.handlePasswordChange(e.target.value) } 
                type='text'
                placeholder='password'
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login;

//what is the type stuff going on the inputs? type='text'??>> it is telling what kind of input can go in the input line
//in  this case, only letters can be typed in