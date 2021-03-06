import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import PictureTiles from "../../../Components/PictureTiles/PictureTiles";
import {
    Link,
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SeniorCitizens.css"




const { Content } = Layout;


const SeniorCitizens = (props) => {
    let history = useHistory()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0)
    })
    return (
                    <Layout>
                        <NavBar />
                        <Content className="content-container-class">
                            <div className="margin-class">
                                <Breadcrumb style={{ margin: '16px 0px' }}>
                                    <Breadcrumb.Item>
                                    <Link to="/Home">
                                            Home
                                        </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`/AreaOfWorking`}>
                                            Area Of Working
                                        </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`/Senior-Citizens`}>
                                            Senior Citizens
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="SeniorCitizens">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">S</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">N</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">R</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900"> </span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">C</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">Z</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2500">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2600">N</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2700">S</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Senior Citizens :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Our elderly parents, who have raised us from child to a man have invested years in our
                                        upbringing, are left in lurch despite their expectations that the children will support during
                                        old age. Majority of them are suffering daily problems of life, which due to old age they
                                        cannot attend to, keeping their hopes and eyes towards some sort of care they deserve.
                                        However, there are some organizations that are working hard to revamp the status of elderly
                                        in our society and providing them the best of what they deserve.
                                        </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">Some of them located in Karachi are listed below:</h2>
                                    <div className="pakistanBoldPara seniorCitizens-org-detailed-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Senior-Citizens/ANSAR-BURNEY-TRUST")}>
                                                <PictureTiles name="Ansar Burney Trust" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606339/Organization%20LOGOS/PNG/Ansar_Burney_a9yepm.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Senior-Citizens/DAR-UL-SUKUN-Old-Age")}>
                                                <PictureTiles name="Dar ul Sukun (Senior Citizen)" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606340/Organization%20LOGOS/PNG/Dar_Ul_Sukun_mw3vig.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Senior-Citizens/SENIOR-CITIZEN-WELFARE-PROGRAM")}>
                                                <PictureTiles name="Senior Citizens Welfare Program" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606339/Organization%20LOGOS/PNG/Senior_Citizens_Welfare_Program_qi9cd3.png" />
                                            </div>
                                        </div>
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Senior-Citizens/EDHI-OLD-HOME")}>
                                                <PictureTiles name="Edhi Old home" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606339/Organization%20LOGOS/PNG/Edhi_qonusi.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250">
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250">
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </Content>
                        <MyFooter />
                    </Layout>
    )
}

export default SeniorCitizens