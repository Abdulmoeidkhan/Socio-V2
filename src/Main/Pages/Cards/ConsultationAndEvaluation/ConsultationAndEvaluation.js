import React, { useEffect, useState } from 'react';
import { Layout, Card, Button } from 'antd';
import { ThemeContext, GuruContextChanger } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import Application from "../../../Components/Application/Application";
import MyFooter from "../../../Components/Footer/Footer";
import firebase from "../../../GlobalEnvironment/firebaseConfig"
import "./ConsultationAndEvaluation.css"

const { Content } = Layout;



const ConsultationAndEvaluation = (props) => {
    let [userSignIn, setUserSignIn] = useState(firebase.currentUsers())
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
    }, [userSignIn])
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <GuruContextChanger.Consumer>
                        {guruState => <>
                            {
                              ()=>  guruState.guruDispatch({ type: "change", payload: "ConsultationAndEvaluation" })
                            }
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
                                <NavBar setUserSignIn={setUserSignIn} />
                                <Content className="content-container-class">
                                    <div className="spacing-class" />
                                    <div className="card-section-parent">
                                        <section className="card-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head">CONSALTATION AND EVALUAION </h2>
                                                <p className="content-para">
                                                    Think you need professional help with your problems? Leave it to our Experts Panel, connect with our experts today and let all your problems float away!
                                        <br />
                                        Take a look at our Need Analysis Form, and let us take the charge today.
                                        </p>
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
                                                            <h2 className="content-sub-head">Reach out</h2>
                                                            <p>
                                                                Contact our experts’ panel and get timely responses and address your problems in a safe and professional setting.
                                                </p>
                                                        </Card>
                                                        <Card bordered={true} className="first-page-card-class">
                                                            <h2 className="content-sub-head">Consult before carrying</h2>
                                                            <p>
                                                                We all need a bit of help in life every now and then, contact our experts right now and take advice to take life head on.
                                                </p>
                                                        </Card>
                                                        <Card bordered={true} className="first-page-card-class">
                                                            <h2 className="content-sub-head">Online Counselling session</h2>
                                                            <p>
                                                                Be a part of Counselling sessions with our experts to see the world with a clearer lens, the end of all your problems, a few clicks away.
                                                </p>
                                                        </Card>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="one-columns-grid">
                                            {userSignIn ? <div className="application-forms-class">
                                                <Button type="primary" className="download-class-parent">
                                                    <a className="download-class" href={require("../../../Assets/Form.doc")}>
                                                        Download Form
                                        </a>
                                                </Button>
                                                <h4 className="content-head or-heading">
                                                    OR
                                        </h4>
                                                <Application />
                                            </div> : null}
                                        </section>
                                    </div>
                                    {/* <Application/> */}
                                </Content>
                                <MyFooter />
                            </Layout>
                        </>}
                    </GuruContextChanger.Consumer>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default ConsultationAndEvaluation