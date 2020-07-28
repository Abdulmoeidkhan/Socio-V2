import React from 'react';
import { Layout } from 'antd';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import NavBar from "../Components/Nav-Menu/Nav-Menu"
const { Content } = Layout;

const Home = (props) => {
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <Layout>
                        <style>
                            {
                                `
                                .ant-menu{
                                    color:${colorsState.colors.colors2} !important
                                }
                                `
                            }
                        </style>
                        <NavBar />
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default Home