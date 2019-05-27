import React, { Component } from 'react';
import history from './history';
class Register extends Component {
    state = {
        error: false,
        emptyField: false
    }
    goToLogin = () => {
        history.push('/');
    }

    componentDidMount() {
        document.title = "Register";
    }

    render() {
        return (
            <div style={{ 'width': 1000 }}><div><h3 style={{ fontSize: '35px', textAlign: 'left' }}>Registration</h3></div>
                <div style={{ 'width': 1000 }}>

                </div>
                <div >
                    <div >
                        <button type="button" color="primary"
                            onClick={this.goToLogin.bind(this)} >
                            Already Registered?Login Here
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}
export default (Register);