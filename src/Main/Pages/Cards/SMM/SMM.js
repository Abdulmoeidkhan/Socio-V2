import React, { useEffect } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./SMM.css"

const { Content } = Layout;



const SMM = (props) => {
    let history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                            <div className="spacing-class" />
                            <div className="card-section-parent">
                                <section className="card-referrals-equal-columns-grid-1">
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <h2 className="content-head">SMM (Social Media Marketing) </h2>
                                        <p className="content-para"> Got anything you would love to be seen by the world? Bring it to us and let us feature your and your product on our vast social media platforms!</p>
                                    </div>
                                </section>
                                <section className="one-columns-grid">
                                    <div className="card-background-class">
                                        <div className="card-card-container-class">
                                            <div className="card-three-column-seperation">
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Get the word out</h2>
                                                    <p>
                                                    Let Socio-Linkage feature your product on its Social Media Platforms and let yourself be known! 
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Connect to a wider world </h2>
                                                    <p>
                                                    Advertise on our site and let your name be known to people!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Feature us and get discounts </h2>
                                                    <p>
                                                    Feature us and get discounts
                                                </p>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Content>
                        <MyFooter />
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default SMM