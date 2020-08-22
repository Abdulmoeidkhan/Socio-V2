import React from 'react';
import { Layout} from 'antd';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner.js";
import HomeContent from "../../Components/HomeContent/HomeContent"
import "./Home.css"


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
                                    color:${colorsState.colors.color2} !important
                                }
                                .first-page-card-class:hover{
                                    transition: all .5s ease;
                                    background-color:${colorsState.colors.color1};
                                    color:${colorsState.colors.color2} !important;
                                }
                                `
                            }
                        </style>
                        <NavBar />
                        <Content className="content-container-class">
                            <Banner />
                            <HomeContent/>
                        </Content>
                        <MyFooter />
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default Home