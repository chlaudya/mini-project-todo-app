import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Input, Checkbox } from 'antd';
import axios from 'axios';
import '../assets/sass/signin.scss';
import { LinkedinFilled, FacebookFilled, GooglePlusOutlined } from '@ant-design/icons';


class SignIn extends Component {
    state = {
        email: "",
        password: "",
        isLoading: false,
        error: false
    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async (e) => {
        this.setState({ isLoading: true })
        e.preventDefault()

        const loginUser = {
            email: this.state.email,
            password: this.state.password
        }
        try {
            const res = await axios.post(`https://my-todo-mini-project.herokuapp.com/MyTodoAPI/user/login`, loginUser)
            if (res.data.status === "success") {
                localStorage.setItem("access_token", res.data.data.access_token)
                this.setState({ isLoading: false, email: "", password: "" })
                this.props.history.push("/dashboard")
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, email: "", password: "" })
        }
    }

    render() {
        return (
            <div className="signin-page">
                <div className="signin-page__welcome">
                    <image></image>
                </div>
                <div className="signin-page__title">
                    <h1>Hello, Friend!</h1>
                    <h5>Enter your personal details and</h5>
                    <h5>start your journey with us</h5>
                    <Link to="/"><button>SIGN UP</button></Link>
                </div>
                <div className="signin-page__login">
                    <h3>Sign in to Task Manager</h3>
                    <div className="signup-page__login__icon">
                        <a><FacebookFilled style={{ fontSize: '40px' }} /></a>
                        <a><GooglePlusOutlined style={{ fontSize: '40px' }} /></a>
                        <a><LinkedinFilled style={{ fontSize: '40px' }} /></a>
                    </div>

                    <div className="signin-page__login__input" >
                        <p>or use your email account </p>
                        <form onSubmit={this.handleLogin}>
                            <form className="signin-page__login__input__input-txt">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={this.state.email}
                                    onChange={this.handleOnChange}
                                />
                            </form>
                            <form className="signin-page__login__input__input-txt">
                                <Input.Password
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={this.state.password}
                                    onChange={this.handleOnChange}
                                />
                            </form>
                            <button
                                className="signin-page__login__input__input-button"
                                type="primary">
                                {this.state.isLoading ? "loading..." : "SIGN IN"}
                            </button>
                        </form>
                    </div>
                </div >
            </div >
        )
    }
}

export default SignIn;


