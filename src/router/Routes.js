import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import DashboardPage from "../views/DashboardPage";

const Routes = () => {
    return (
        <Fragment>
            <Route path="/" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/dashboard" exact component={DashboardPage} />
        </Fragment>
    )
}
export default Routes;