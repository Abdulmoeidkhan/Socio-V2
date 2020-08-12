import React, { useEffect } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./EducatingAboutSocialWork.css"

const { Content } = Layout;



const EducatingAboutSocialWork = (props) => {
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
                                        <h2 className="content-head">EDUCATION ABOUT SOCIAL WORK </h2>
                                        <p className="content-para"> Don’t know what Social Work is? Don’t sweat it, read about what we do, how we do it and how you can join us! Visit our Educating about Social Work section</p>
                                    </div>
                                </section>
                                <section className="one-columns-grid">
                                    <div className="card-background-class">
                                        <div className="card-card-container-class">
                                            <div className="card-three-column-seperation">
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/ConsultationAndEvaluation")}>
                                                    <h2 className="content-sub-head">Intro to Social Work </h2>
                                                    <p>
                                                    Let us tell you people a secret… there’s a huge difference between voluntary and involuntary social work, to read more about it visit our page NOW!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/Comparison")}>
                                                    <h2 className="content-sub-head">Kinds of Social Work</h2>
                                                    <p>
                                                    Let us tell you people a secret… there’s a huge difference between voluntary and involuntary social work, to read more about it visit our page NOW!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/ConsultationAndEvaluation")}>
                                                    <h2 className="content-sub-head">A Field of Tomorrow </h2>
                                                    <p>
                                                    What if we told you that Social Work is one of the fastest growing fields today, don’t believe us? Read now:
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

export default EducatingAboutSocialWork