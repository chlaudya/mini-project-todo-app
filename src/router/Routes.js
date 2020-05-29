import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import SignUp from "../components/SignUp";



const Routes = () => {
    return (
        <Fragment>
            <Route path="/" exact component={SignUp} />

            {/* <Route path="/" exact component={HomePage} />
            <Route path="/:country" exact component={MyCountries} />
            <Route path="/:country/slug" exact component={LiveStatus} /> */}
        </Fragment>
    )
}
export default Routes;