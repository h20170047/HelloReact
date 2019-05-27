import React, { Component } from 'react';
import history from './history';
class Login extends Component {
    state = {
        error: false,
        emptyField: false
    }
    goToRegister = () => {
        history.push('/Register');
    }

    componentDidMount() {
        document.title="Login";
    }

    render() {
        return (
            <div style={{ 'width': 1000 }}><div><h3 style={{fontSize:'35px', textAlign:'left'}}>Welcome to the portal</h3></div>
                <div style={{ 'width': 1000 }}>

                   </div>
                <div >
                    <div >

                        <input type="text"
                            id="llid"
                            label="Lion Login ID"
                            className="form-control"
                            margin="normal"
                            variant="outlined"
                        />

                        <input type="text"
                            id="password"
                            label="Password"
                            className="form-control"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                        <button type="button" id='Login' variant="contained" color="primary"
                         >
                            Login
                        </button>

                        <button type="button" color="primary"
                            onClick={this.goToRegister.bind(this)} >
                            Not Registered?Register Here
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}


export default (Login);