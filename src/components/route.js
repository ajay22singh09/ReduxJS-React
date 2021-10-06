import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import bot from './bot.js';
import history from './cache.js';
import botdetails from "./botdetails.js";
class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <switch>
                    <Route path="/" exact component={bot} />
                    <Route path="/bot-details/:id" component={botdetails} />
                </switch>
            </Router>
        )
    }
}
export default Routes;