import React from 'react';
import "../assets/sass/signup.scss";

function SignUp() {

    return (
        <div className="signup-page">
            <div className="signup-page__welcome">
                <h1>Welcome Back!</h1>
                <h5>To keep connected with us please</h5>
                <h5>login with your personal info</h5>
                <button>SIGN IN</button>
            </div>
            <div className="signup-page__created-account">
                <h3>Created Account</h3>
                <div className="signup-page__created-account__icon">
                    <span className="fa-stack" style={{ fontsize: '3em' }}>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </span>
                    <span className="fa-stack" style={{ fontsize: '3em' }}>
                        <a href="#"><i class="fa fa-google"></i></a>
                    </span>
                    <span className="fa-stack" style={{ fontsize: '3em' }}>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                    </span>
                </div>
                <div className="signup-page__created-account__input">
                    <p>or use your email for registration</p>
                    <input className="signup-page__created-account__input__input-txt" type="text" value="Name" />
                    <input className="signup-page__created-account__input__input-txt" type="text" value="Email" />
                    <input className="signup-page__created-account__input__input-txt" type="text/password" value="Password" />
                    <input className="signup-page__created-account__input__input-button" type="submit" value="SIGN UP" />
                </div>
            </div>
        </div>

    );
}

export default SignUp;
