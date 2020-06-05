import React from 'react';
import { Avatar } from 'antd';
import axios from 'axios';
import '../../assets/sass/header.scss';
import { Link } from "react-router-dom";
const baseUrl = "https://my-todo-mini-project.herokuapp.com/MyTodoAPI/";

class HeaderDashboard extends React.Component {

    handleLogout = () => {
        localStorage.clear()
    }

    render() {
        return (
            <header className="header-dashboard">
                <div className="header-dashboard__avatar">
                    <a><Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <h5>Hello Friend...</h5>
                    </a>
                </div>
                <div className="header-dashboard__signout">
                    <Link to="/">
                        <a onClick={this.handleLogout}>Sign Out</a>
                    </Link>

                </div>

            </header>
        )
    }
}

export default HeaderDashboard;