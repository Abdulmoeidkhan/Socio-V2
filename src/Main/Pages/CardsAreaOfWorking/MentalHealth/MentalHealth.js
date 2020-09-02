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


const MentalHealth = (props) => {
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
                                        <Link to={`/Mental-Health`}>
                                            Mental Health
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="MentalHealth">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">M</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">N</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900"> </span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">H</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2500">H</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Mental Health :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Metal Health is a portion of Pakistani society which has been a victim of misconception, so
                                        we aim to raise awareness for the importance of mental Health and how it is to be valued and
                                        normalized just as much as Physical Health. Some organizations working in for this domain
                                        in Karachi are listed below.
                                        </p>
                                    <div className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Mental-Health/DOW-INSTITUTE-OF-BEHAVIORAL-SCIENCES")}><div>Dow Institute of Behavioral Sciences (IBS).</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Mental-Health/KARACHI-PSYCHIATRIC-HOSPITAL")}><div>Karachi Psychiatric Hospital.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Mental-Health/KARWAN-E-HAYAT")}><div>Karwan-e-Hayat.</div></li>
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

export default MentalHealth