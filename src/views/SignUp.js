import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";
import { Input } from 'antd';
import axios from 'axios';
import '../assets/sass/signup.scss';
import { LinkedinFilled, FacebookFilled, GooglePlusOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        isLoading: false
    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = async (e) => {
        this.setState({ isLoading: true })
        e.preventDefault()

        const registerUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        try {
            const res = await axios.post(`https://my-todo-mini-project.herokuapp.com/MyTodoAPI/user/register`, registerUser)
            if (res.data.status === "success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank You! Your account succesfully registered!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                localStorage.setItem("access_token", res.data.data.access_token)
                this.setState({ isLoading: false, name: "", email: "", password: "" })
                this.props.history.push("/signin")
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: "Oops something went wrong, please check the email or password"
            })
            this.setState({ isLoading: false, name: "", email: "", password: "" })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="signup-page">
                    <section className="signup-page__welcome">
                        <h1 className="signup-page__welcome--h1">Welcome Back!</h1>
                        <h5 className="signup-page__welcome--h5">To keep connected with us please</h5>
                        <h5 className="signup-page__welcome--h5">login with your personal info</h5>
                        <Link to="/signin"><button>SIGN IN</button></Link>
                    </section>
                    <section className="signup-page__created-account">
                        <h3>Created Account</h3>
                        <div className="signup-page__created-account__icon">
                            <a><FacebookFilled style={{ fontSize: '40px' }} /></a>
                            <a><GooglePlusOutlined style={{ fontSize: '40px' }} /></a>
                            <a><LinkedinFilled style={{ fontSize: '40px' }} /></a>
                        </div>

                        <div className="signup-page__created-account__input" >
                            <p>or use your email for registration</p>
                            <form onSubmit={this.handleRegister}>
                                <form className="signup-page__created-account__input__input-txt">
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={this.state.name}
                                        onChange={this.handleOnChange}
                                    />
                                </form>
                                <form className="signup-page__created-account__input__input-txt">
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={this.state.email}
                                        onChange={this.handleOnChange}
                                    />
                                </form>
                                <form className="signup-page__created-account__input__input-txt">
                                    <Input.Password
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={this.state.password}
                                        onChange={this.handleOnChange}
                                    />
                                </form>
                                <button
                                    className="signup-page__created-account__input__input-button"
                                    type="primary">
                                    {this.state.isLoading ? "loading..." : "SIGN UP"}
                                </button>
                            </form>
                        </div>
                    </section>
                </div >
            </Fragment>
        )
    }
}

export default SignUp;
