import React from 'react';
import { ThemeWrapper, GuruWrapper } from "./contextInit"
import Routes from "./router"

function MainComponent(props) {
    return (
        <ThemeWrapper>
            <GuruWrapper>
                <Routes />
            </GuruWrapper>
        </ThemeWrapper>
    );
}

export default MainComponent;

