import React from 'react';
import {
    Route,
    Router,
    Switch
} from 'react-router-dom';
import {
    createGenerateClassName,
    StylesProvider,
} from '@material-ui/core/styles';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
    return (
        <div>
            <StylesProvider generateClassName={ generateClassName }>
                <Router history={ history }>
                    <Switch>
                        <Route path="/auth/signin">
                            <SignIn onSignIn={ onSignIn }/>
                        </Route>
                        <Route path="/auth/signup">
                            <SignUp onSignIn={ onSignIn }/>
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
