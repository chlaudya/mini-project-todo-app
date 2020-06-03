import React from 'react';
import { Avatar } from 'antd';
import '../../assets/sass/header.scss';
import { Link } from "react-router-dom";

const HeaderDashboard = () => {

    return (
        <header className="header-dashboard">
            <div className="header-dashboard__avatar">
                <a><Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <h5>Username</h5>
                </a>
            </div>
            <div className="header-dashboard__signout">
                <a>Sign Out</a>

            </div>

        </header>
    )

}

export default HeaderDashboard;