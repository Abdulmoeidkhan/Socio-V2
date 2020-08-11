import React,{useEffect} from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyTable from "../../../Components/Table/MyTable";
import MyFooter from "../../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./Comparison.css"

const { Content } = Layout;



const Comparison = (props) => {
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
                                        <p className="content-super">WHAT WE OFFER :</p>
                                        <h2 className="content-head">COMPARISON </h2>
                                        <p className="content-para"> Confused which organization can solve your problem the fastest? Don’t worry let Socio-Linkage take charge, we compare organizations for you, tap into our evaluation template and choose the best for your problems, YOURSELF!</p>
                                    </div>
                                    <div className="card-content-content-2">
                                        <img src={"https://picsum.photos/300/300"} alt={"https://picsum.photos/300/300"} />
                                    </div>
                                </section>
                                <section className="one-columns-grid">
                                    <div className="card-background-class">
                                        <div className="card-card-container-class">
                                            <div className="card-three-column-seperation">
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/Comparison")}>
                                                    <h2 className="content-sub-head">Filter</h2>
                                                    <p>
                                                        Too many organizations to view? Don’t sweat it! Use our comparison feature to view templates of organizations that you need.
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/NewsAndEvents")}>
                                                    <h2 className="content-sub-head">Single-page view</h2>
                                                    <p>
                                                        Compare organizations on a single page without making it complex!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/ConsultationAndEvaluation")}>
                                                    <h2 className="content-sub-head">Cross-organizational reviews</h2>
                                                    <p>
                                                        The selection of organization depends on your needs because here individuality matters!
                                                </p>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <MyTable/> 
                        </Content>
                        <MyFooter />
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default Comparison