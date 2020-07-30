import React from 'react';
import { Layout } from 'antd';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import Banner from "../../Components/Banner/Banner.js";
import MyFooter from "../../Components/Footer/Footer"
import { Card } from 'antd';
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
                            <div className="spacing-class" />
                            <div className="section-parent">
                                <section className="equal-columns-grid equal-columns-grid-1">
                                    <div>
                                        <img src={"https://picsum.photos/300/300"} />
                                    </div>
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super">A BIT </p>
                                        <h2 className="content-head">ABOUT US </h2>
                                        <p className="content-para"> Need a guide within minutes? We, at Socio-Linkage ensure honest and sincere reviews about the organizations that our clients are intrigued to get help from. Socio-linkage provides digital and physical solutions, through exclusive sessions with qualified members of Social Sciences Experts to help users resonate their situation and problems in various domains, individual, collective and much more! Free yourself from complications and connect to Socio-linkage’s innovative features and services.</p>
                                    </div>
                                </section>
                                <section className="equal-columns-grid equal-columns-grid-2">
                                    <div className="content-content-2">
                                        <div className="spacing-class" />
                                        <p className="content-super">CONNECT A CLIENT TO</p>
                                        <h2 className="content-head">AN ORGANIZATION</h2>
                                        <p className="content-para"> Socio-Linkage accepts data from its client as input, analyses the type and extent of a client’s problem and then links the user to the relevant organization post-evaluation. The process occurs ensuring the client’s confidentiality fully as no data is shared with external sources without the client’s consent.</p>
                                    </div>
                                    <div>
                                        <img src={"https://picsum.photos/300/300"} />
                                    </div>
                                </section>
                                <section className="equal-columns-grid equal-columns-grid-3">
                                    <div>
                                        <img src={"https://picsum.photos/300/300"} />
                                    </div>
                                    <div className="content-content-3">
                                        <div className="spacing-class" />
                                        <p className="content-super">MAKING SOCIAL SERVICES</p>
                                        <h2 className="content-head">EASY</h2>
                                        <p className="content-para">Socio-Linkage is an online service and counselling platform, offering effective digital solutions with highly-renowned organizations in a few clicks. We use need analysis and principles of Social Work practice to make lives faster, easier and better.</p>
                                    </div>
                                </section>
                                <section className="one-columns-grid">
                                    <div>
                                        <div className="center-class">
                                            <div className="spacing-class" />
                                            <p className="content-super">WHAT WE</p>
                                            <h2 className="content-head">OFFER</h2>
                                        </div>
                                        <div className="card-container-class">
                                            <div className="five-column-seperation">
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Comparison</h2>
                                                    <p>
                                                        Don’t know which organization to approach? Our all in one comparison platform is all you need to evaluate different organizations through our Comparison Feature, to make your organization selection easier.
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">News and Events</h2>
                                                    <p>
                                                        Want to know what’s going on around the world? And what international day is just around the corner? Socio-Linkage provides the latest News of social trends, and a calendar where you can look up International Days and celebrate them with your loved ones!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Consultation and Evaluation</h2>
                                                    <p>
                                                        Need help from experts? Our expert panel allows our clients to connect with experts from Social sciences for consultation, Evaluation and Advice through our live sessions in full confidentiality at your location.
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Articles and Blogs</h2>
                                                    <p>
                                                        Need to know what’s new around the world? Access our updated Articles and Blogs on a series of topics, to make sure you are one step ahead of the world!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Referrals and Links</h2>
                                                    <p>
                                                        Not sure who to contact? Sit back, relax and let our experts connect you to the best individuals and organizations, because at Socio-Linkage your problem is OUR problem.
                                                </p>
                                                </Card>
                                            </div>
                                            <div className="five-column-seperation">
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Educating about Social Work</h2>
                                                    <p>
                                                        Don’t know what Social Work is? Socio-linkage aims to bust the misconceptions that prevail about Social Work in Pakistan and the differences between voluntary and professional Social Work.
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">PWA</h2>
                                                    <p>
                                                        Socio-linkage is the first PWA (Progressive Web App) platform for Social Services as it allows the users to use Socio-Linkage on multiple platforms that use standard compliant browser.
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">SMM</h2>
                                                    <p>
                                                        From connecting our clients to organizations, to representing and marketing your organizations on different various social media platforms with wide audiences our SMM (Social Media Marketing) Team is determined to raise your organization to the next level!
                                                </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">The Graphic Guru</h2>
                                                    <p>
                                                    Let our Graphic Guru guide you through our site and our services! The Graphic Guru solves your problems like joy ride
                                                    </p>
                                                </Card>
                                                <Card bordered={true} className="first-page-card-class">
                                                    <h2 className="content-sub-head">Coming Soon</h2>
                                                    <p>
                                                        It's comming Soon
                                                    </p>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>i</section>
                                <section>j</section>
                                <section>k</section>
                            </div>
                        </Content>
                        <MyFooter/>
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default Home