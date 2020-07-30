import React from 'react';
import { ThemeContext } from "../../GlobalEnvironment/contextInit"
import { Layout } from 'antd';


// const {Content} =Layout
const AboutUs = (props) => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Layout>
                    
                </Layout>
            }
        </ThemeContext.Consumer>
    )
}

export default AboutUs