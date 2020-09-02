import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import {
    Link,
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




const { Content } = Layout;


const SeniorCitizens = (props) => {
    let history = useHistory()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0)
    })
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <Layout>
                        <NavBar />
                        <Content className="content-container-class">
                            <div className="margin-class">
                                <Breadcrumb style={{ margin: '16px 0px' }}>
                                    <Breadcrumb.Item>
                                        <Link to="/">
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
                                    <div className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Senior-Citizens/ANSAR-BURNEY-TRUST")}><div>Ansar Burney Trust.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Senior-Citizens/DAR-UL-SUKOON-(OLD AGE)")}><div>Dar ul Sukoon (Senior Citizen).</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Senior-Citizens/EDHI-OLD-HOME")}><div>Edhi Old home.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Senior-Citizens/SENIOR-CITIZEN-WELFARE-PROGRAM")}><div>Senior Citizens Welfare Program.</div></li>
                                        </ul>
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

export default SeniorCitizens