import React from 'react';
import { ThemeWrapper } from "./contextInit"
import Routes from "./router"

function MainComponent(props) {
    return (
            <ThemeWrapper>
                <Routes setPagePath={props.setPagePath}/>
            </ThemeWrapper>
    );
}

export default MainComponent;

