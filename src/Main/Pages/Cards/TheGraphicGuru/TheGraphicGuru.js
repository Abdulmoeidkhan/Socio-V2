import React, { useEffect } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./TheGraphicGuru.css"

const { Content } = Layout;



const TheGraphicGuru = (props) => {
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
                                        <h2 className="content-head">The Graphic Guru </h2>
                                        <p className="content-para"> Let us introduce you to our Graphic Guru, He’s the face of Socio-Linkage and your guide through our processes, sit back and let the Guru govern your problems!</p>
                                    </div>
                                    <div className="card-content-content-2">
                                        <img src={"https://lorempixel.com/300/300"} alt={"https://lorempixel.com/300/300"} />
                                    </div>
                                </section>
                                <section className="one-columns-grid">
                                    <div className="card-background-class">
                                        <div className="card-card-container-class">
                                            <div className="card-three-column-seperation">
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Graphic Support</h2>
                                                    <p>
                                                        Let the Guru explain things in an entertaining way because it’s important to have fun!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Digital world of Guru </h2>
                                                    <p>
                                                        View our Graphic do his thing on our Social Media and see his Digital World come to life!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head"> Create Content for us </h2>
                                                    <p>
                                                        If you think you’ve got what it takes to take the Graphic Guru to the next level, join our team at Contact Us because the more, the merrier!
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

export default TheGraphicGuru