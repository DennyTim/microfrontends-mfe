import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {
    createGenerateClassName,
    StylesProvider
} from '@material-ui/core/styles';
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const generatedClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={ generatedClassName }>
                <div>
                    <Header/>
                    <MarketingApp/>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};
