import React, { useEffect } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./PWAAndChromeLessBrowsing.css"

const { Content } = Layout;



const PWAAndChromeLessBrowsing = (props) => {
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
                                <section className="card-equal-columns-grid-1">
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <h2 className="content-head">PWA AND CHROME-LESS BROWSING </h2>
                                        <p className="content-para"> Sick of having to run from one place to another? Join our Site and through a single plug-in and stay with us on your mobile and your Laptop/Computer</p>
                                    </div>
                                    <div className="news-card-content-content-2">
                                        <div className="cards-page-img-center">
                                            <img src={"https://picsum.photos/300/300"} alt={"https://picsum.photos/300/300"} />
                                        </div>
                                        <div className="cards-page-img-center">
                                            <img src={"https://picsum.photos/300/300"} alt={"https://picsum.photos/300/300"} />
                                        </div>
                                    </div>
                                </section>
                                <section className="one-columns-grid">
                                    <div className="card-background-class">
                                        <div className="card-card-container-class">
                                            <div className="card-two-column-seperation">
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Access without Browser </h2>
                                                    <p>
                                                    View Socio-linkage without a browser anywhere anytime through our plug in!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Dual-view option</h2>
                                                    <p>
                                                    Dual-view option
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

export default PWAAndChromeLessBrowsing