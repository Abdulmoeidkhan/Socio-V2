import React, { useEffect } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import DateAndEventCards from "../../../Components/DateAndEventCards/DateAndEventCards";
import MyFooter from "../../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./NewsAndEvents.css"

const { Content } = Layout;



const NewsAndEvents = (props) => {
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
                                        <h2 className="content-head">NEWS AND EVENTS </h2>
                                        <p className="content-para"> Like to stay up-to date? Like to keep your eye out for the latest news and events? Check our news and updates section where we bring you the widest collection of news and Events around you!</p>
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
                                            <div className="card-three-column-seperation">
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/Comparison")}>
                                                    <h2 className="content-sub-head">Connect to the world</h2>
                                                    <p>
                                                        Join Socio-Linkage and stay connected to the world around you
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/NewsAndEvents")}>
                                                    <h2 className="content-sub-head">Learn what’s happening around you</h2>
                                                    <p>
                                                        let our news section give you your daily dose of information
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/ConsultationAndEvaluation")}>
                                                    <h2 className="content-sub-head">Celebrate with the World</h2>
                                                    <p>
                                                        look up the International Days coming your way and stay one step ahead of everyone!
                                                </p>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <DateAndEventCards />
                        </Content>
                        <MyFooter />
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default NewsAndEvents