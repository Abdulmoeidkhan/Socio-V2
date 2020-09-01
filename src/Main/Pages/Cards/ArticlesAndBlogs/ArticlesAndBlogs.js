import React, { useEffect } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import ArticlesAndBlogsCards from "../../../Components/ArticlesAndBlogsCards/ArticlesAndBlogsCards";
import MyFooter from "../../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./ArticlesAndBlogs.css"

const { Content } = Layout;



const ArticlesAndBlogs = (props) => {
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
                                        <h2 className="content-head">ARTICLES AND BLOGS </h2>
                                        <p className="content-para"> If you love reading, welcome to your mini heaven, view our Articles and Blog section that bring u the latest articles on recent social trends and our Blogs written by our very own Socio-Linkage Family! Don’t forget to share!</p>
                                    </div>
                                    <div className="news-card-content-content-2">
                                        <div className="cards-page-img-center">
                                            <img src={"https://lorempixel.com/300/300"} alt={"https://lorempixel.com/300/300"} />
                                        </div>
                                        <div className="cards-page-img-center">
                                            <img src={"https://lorempixel.com/300/300"} alt={"https://lorempixel.com/300/300"} />
                                        </div>
                                    </div>
                                </section>
                                <section className="one-columns-grid">
                                    <div className="card-background-class">
                                        <div className="card-card-container-class">
                                            <div className="card-three-column-seperation">
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">WELL-INFORMED MAN , IS A WISE MAN</h2>
                                                    <p>
                                                    It’s good to know what’s going on around the world but not so sure where to get all the info? View our articles and give them a read right now!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Access our Blog</h2>
                                                    <p>
                                                    Make sure to view our Blog section where our writers bring you the best of things!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Love to write? </h2>
                                                    <p>
                                                    Think u can write something everyone loves to read? Join our bloggers team today contact us now
                                                </p>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <ArticlesAndBlogsCards />
                        </Content>
                        <MyFooter />
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}


export default ArticlesAndBlogs