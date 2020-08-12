import React, { useEffect } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./ReferralsAndLinks.css"

const { Content } = Layout;



const ReferralsAndLinks = (props) => {
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
                                        <h2 className="content-head">REFERRALS AND LINKS </h2>
                                        <p className="content-para"> Think there’s something we cannot solve? No problem, our agents will connect you to someone who can! Connect our vast Network today and make your lives smoother!</p>
                                    </div>
                                </section>
                                <section className="one-columns-grid">
                                    <div className="card-background-class">
                                        <div className="card-card-container-class">
                                            <div className="card-two-column-seperation">
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/Comparison")}>
                                                    <h2 className="content-sub-head">Reach out to someone</h2>
                                                    <p>
                                                    Some problems need all hands-on deck, Socio-Linkage ensures your bridging to the right person! Contact us 
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/ConsultationAndEvaluation")}>
                                                    <h2 className="content-sub-head">Let’s Work together </h2>
                                                    <p>
                                                    Think you know someone who’d like to be a part of the Socio-Linkage Family? Connect to our social media and spread the word!
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


export default ReferralsAndLinks