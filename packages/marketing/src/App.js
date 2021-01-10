import React from 'react';
import {
    Route,
    Router,
    Switch
} from "react-router-dom";
import {
    createGenerateClassName,
    StylesProvider
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from "./components/Pricing";

const generatedClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

export default ({ history }) => {
    return (<div>
        <StylesProvider generateClassName={ generatedClassName }>
            <Router history={ history }>
                <Switch>
                    <Route exact path="/pricing" component={ Pricing }/>
                    <Route path="/" component={ Landing }/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>);
}
