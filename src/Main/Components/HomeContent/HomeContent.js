import React, { useEffect } from 'react';
import { Card, Carousel, Avatar } from 'antd';
import {
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const { Meta } = Card;

const HomeContent = (props) => {
    let history = useHistory()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return (
        <>
            <div className="spacing-class" />
            <div className="section-parent">
                <section className="equal-columns-grid equal-columns-grid-1" >
                    <div>
                        <img className="anime-class-img" data-aos-duration="1500" data-aos="fade-right" src={require("../../Assets/OurIcon.png")} alt={require("../../Assets/OurIcon.png")} />
                    </div>
                    <div className="content-content-1" data-aos-duration="1500" data-aos="fade-left" >
                        <div className="spacing-class" />
                        <p className="content-super">A BIT </p>
                        <h2 className="content-head">ABOUT US </h2>
                        <p className="content-para"> Need a guide within minutes? We, at Socio-Linkage ensure honest and sincere reviews about the organizations that our clients are intrigued to get help from. Socio-linkage provides digital and physical solutions, through exclusive sessions with qualified members of Social Sciences Experts to help users resonate their situation and problems in various domains, individual, collective and much more! Free yourself from complications and connect to Socio-linkage’s innovative features and services.</p>
                    </div>
                </section>
                <section className="equal-columns-grid equal-columns-grid-2">
                    <div className="content-content-2" data-aos-duration="1500" data-aos="fade-right" >
                        <div className="spacing-class" />
                        <p className="content-super">CONNECT A CLIENT TO</p>
                        <h2 className="content-head">AN ORGANIZATION</h2>
                        <p className="content-para"> Socio-Linkage accepts data from its client as input, analyses the type and extent of a client’s problem and then links the user to the relevant organization post-evaluation. The process occurs ensuring the client’s confidentiality fully as no data is shared with external sources without the client’s consent.</p>
                    </div>
                    <div>
                        <img className="anime-class-img" data-aos-duration="1500" data-aos={"fade-left"} src={require("../../Assets/ConnectAClient.png")} alt={require("../../Assets/ConnectAClient.png")} />
                    </div>
                </section>
                <section className="equal-columns-grid equal-columns-grid-3">
                    <div>
                        <img className="anime-class-img" data-aos-duration="1500" data-aos={"fade-right"} src={require("../../Assets/MakingSocialServicesEasy.jpg")} alt={require("../../Assets/MakingSocialServicesEasy.jpg")} />
                    </div>
                    <div className="content-content-3" data-aos-duration="1500" data-aos="fade-left" >
                        <div className="spacing-class" />
                        <p className="content-super">MAKING SOCIAL SERVICES</p>
                        <h2 className="content-head">EASY</h2>
                        <p className="content-para">Socio-Linkage is an online service and counselling platform, offering effective digital solutions with highly-renowned organizations in a few clicks. We use need analysis and principles of Social Work practice to make lives faster, easier and better.</p>
                    </div>
                </section>
                <section className="one-columns-grid">
                    <div className="card-background-class">
                        <div className="center-class" data-aos-duration="1500" data-aos="zoom-in" >
                            <div className="spacing-class" />
                            <p className="content-super">WHAT WE</p>
                            <h2 className="content-head">OFFER</h2>
                            <p className="content-para">We offer instant simple and budget friendly services that help you connect to the right organization, Socio-Linkage is your one stop hub  for the right organization and info about social services and social work!</p>
                        </div>
                        <div className="card-container-class">
                            <div className="five-column-seperation">
                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/Comparison")} >
                                    <Meta avatar={<Avatar src={require("../../Assets/Comparison.png")} data-aos-duration="1500" data-aos={"fade-right"} />} />
                                    <h2 className="content-sub-head">Comparison</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        Don’t know which organization to approach? Our all in one comparison platform is all you need to evaluate different organizations through our Comparison Feature, to make your organization selection easier.
                                                </p>
                                </Card>
                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/NewsAndEvents")} >
                                    <Meta avatar={<Avatar src={require("../../Assets/NewsEvents.png")} data-aos-duration="1500" data-aos={"fade-down-right"} />} />
                                    <h2 className="content-sub-head">News and Events</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        Want to know what’s going on around the world? And what international day is just around the corner? Socio-Linkage provides the latest News of social trends, and a calendar where you can look up International Days and celebrate them with your loved ones!
                                                </p>
                                </Card>
                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/ConsultationAndEvaluation")} >
                                    <Meta avatar={<Avatar src={require("../../Assets/ConsultationAndEvaluation.png")} data-aos-duration="1500" data-aos={"fade-down"} />} />
                                    <h2 className="content-sub-head">Consultation and Evaluation</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        Need help from experts? Our expert panel allows our clients to connect with experts from Social sciences for consultation, Evaluation and Advice through our live sessions in full confidentiality at your location.
                                                </p>
                                </Card>
                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/ArticlesAndBlogs")} >
                                    <Meta avatar={<Avatar src={require("../../Assets/ArticlesAndBlogs.png")} data-aos-duration="1500" data-aos={"fade-down-left"} />} />
                                    <h2 className="content-sub-head">Articles and Blogs</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        Need to know what’s new around the world? Access our updated Articles and Blogs on a series of topics, to make sure you are one step ahead of the world!
                                                </p>
                                </Card>
                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/ReferralsAndLinks")} >
                                    <Meta avatar={<Avatar src={require("../../Assets/ReferalsAndLinks.png")} data-aos-duration="1500" data-aos={"fade-left"} />} />
                                    <h2 className="content-sub-head">Referrals and Links</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        Not sure who to contact? Sit back, relax and let our experts connect you to the best individuals and organizations, because at Socio-Linkage your problem is OUR problem.
                                                </p>
                                </Card>
                            </div>
                            <div className="five-column-seperation">
                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/EducatingAboutSocialWork")} >
                                    <Meta avatar={<Avatar src={require("../../Assets/EducatingAboutSocialWork.png")} data-aos-duration="1500" data-aos={"fade-right"} />} />
                                    <h2 className="content-sub-head">Educating about Social Work</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        Don’t know what Social Work is? Socio-linkage aims to bust the misconceptions that prevail about Social Work in Pakistan and the differences between voluntary and professional Social Work.
                                                </p>
                                </Card>
                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/PWAAndChromeLessBrowsing")} >
                                    <Meta avatar={<Avatar src={require("../../Assets/PWA.png")} data-aos-duration="1500" data-aos={"fade-up-right"} />} />
                                    <h2 className="content-sub-head">PWA</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        Socio-linkage is the first PWA (Progressive Web App) platform for Social Services as it allows the users to use Socio-Linkage on multiple platforms that use standard compliant browser.
                                                </p>
                                </Card>
                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/SMM")}>
                                    <Meta avatar={<Avatar src={require("../../Assets/SMM.png")} />} data-aos-duration="1500" data-aos={"fade-up"} />
                                    <h2 className="content-sub-head">SMM</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        From connecting our clients to organizations, to representing and marketing your organizations on different various social media platforms with wide audiences our SMM (Social Media Marketing) Team is determined to raise your organization to the next level!
                                                </p>
                                </Card>
                                <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/TheGraphicGuru")} >
                                    <Meta avatar={<Avatar src={require("../../Assets/TheGraphicGuru.png")} data-aos-duration="1500" data-aos={"fade-up-left"} />} />
                                    <h2 className="content-sub-head">The Graphic Guru</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        Let our Graphic Guru guide you through our site and our services! The Graphic Guru solves your problems like joy ride
                                                    </p>
                                </Card>
                                <Card bordered={true} className="first-page-card-class" style={{ cursor: "not-allowed" }} >
                                    <Meta avatar={<Avatar src={require("../../Assets/ComingSoon.png")} data-aos-duration="1500" data-aos={"fade-left"} />} />
                                    <h2 className="content-sub-head">Coming Soon</h2>
                                    <p data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="400">
                                        It's comming Soon
                                                    </p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="one-columns-grid">
                    <div className="picture-background-class">
                        <div className="center-class">
                            <div className="spacing-class" />
                            <p className="content-super">Our</p>
                            <h2 className="content-head">FIELD VISITS</h2>
                        </div>
                        <div className="three-column-seperation">
                            <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-down-right" data-aos-delay="400">
                                <img className="card-img-class" src={require("../../Assets/Field-1.jpg")} alt={require("../../Assets/Field-1.jpg")} />
                            </Card>
                            <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-down" data-aos-delay="400">
                                <img className="card-img-class" src={require("../../Assets/Field-2.jpg")} alt={require("../../Assets/Field-2.jpg")} />
                            </Card>
                            <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-down-left" data-aos-delay="400">
                                <img className="card-img-class" src={require("../../Assets/Field-4.jpg")} alt={require("../../Assets/Field-4.jpg")} />
                            </Card>

                        </div>
                        <div className="three-column-seperation">
                            <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">
                                <img className="card-img-class" src={require("../../Assets/Field-5.jpg")} alt={require("../../Assets/Field-5.jpg")} />
                            </Card>
                            <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="zoom-in" data-aos-delay="400">
                                <img className="card-img-class" src={require("../../Assets/Field-3.jpg")} alt={require("../../Assets/Field-3.jpg")} />
                            </Card>
                            <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">
                                <img className="card-img-class" src={require("../../Assets/Field-6.jpg")} alt={require("../../Assets/Field-6.jpg")} />
                            </Card>
                        </div>
                        <div className="three-column-seperation">
                            <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-up-right" data-aos-delay="400">
                                <img className="card-img-class" src={require("../../Assets/Field-9.jpg")} alt={require("../../Assets/Field-9.jpg")} />
                            </Card>
                            <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-up" data-aos-delay="400">
                                <img className="card-img-class" src={require("../../Assets/Field-7.jpg")} alt={require("../../Assets/Field-7.jpg")} />
                            </Card>
                            <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-up-left" data-aos-delay="400">
                                <img className="card-img-class" src={require("../../Assets/Field-8.jpg")} alt={require("../../Assets/Field-8.jpg")} />
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
            <section className="testimonial-sec">
                <div className="comments-background-class">
                    <div className="center-class">
                        <div className="spacing-class" />
                        <p className="content-super">Clients</p>
                        <h2 className="content-head">Testimonials</h2>
                    </div>
                    <div className="comment-class">
                        <Carousel
                            autoplay
                        >
                            <div className="comment-class-para">
                                <Avatar
                                    src={require("../../Assets/Sir-Hammal.png")}
                                    alt="Hammal Sir"
                                    size="large"
                                />
                                <br />
                                    "It’s very first time that such a remarkable platform has been started to facilitate the common people and give exposure to the organizations which are working with zest but are still not known by many in the social sector.
                                    The team of Socio-Linkage is really praiseworthy for their creative effort and for unfolding something completely unique. I wish them all the best for their future plans!"
                                                        </div>


                            <div className="comment-class-para">
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"
                                    size="large"
                                />
                                <br />
                                    "We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                                    and efficiently."
                                                        </div>
                            <div className="comment-class-para">
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"
                                    size="large"
                                />
                                <br />
                                    "We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                                    and efficiently."
                                                        </div>
                            <div className="comment-class-para">
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"
                                    size="large"
                                />
                                <br />
                                    "We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                                    and efficiently."
                                    </div>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeContent