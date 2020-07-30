import React from 'react';
import { ThemeContext } from "../../GlobalEnvironment/contextInit"
import { Layout } from 'antd';


// const { Content, } = Layout;

const Blogs = (props) => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Layout>
                    
                </Layout>
            }
        </ThemeContext.Consumer>
    )
}

export default Blogs