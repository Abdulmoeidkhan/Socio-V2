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


const GeneralHealth = (props) => {
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
                                        <Link to={`/General-Health`}>
                                            General Health
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="GeneralHealth">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">G</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">N</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">R</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000"> </span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">H</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2500">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2600">H</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> General Health :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        This area of working comprises of health institutions both private and government which
                                        serve the medical patients with different complications, the aim is to improve the health
                                        facilities available to the commoners as health and life protection is a right of the people.
                                        </p>
                                    <div className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/General-Health/DOW-OJHA-INSTITUTE-OF-CHEST-DISEASES")}><div>Dow Ojha.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/General-Health/LIAQUAT-NATIONAL-HOSPITAL")}><div>Liaquat National Hospital.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/General-Health/NICVD-NATIONAL-INSTITUTE-OF-CARDIO-VESCULAR-DISEASES")}><div>NICVD.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/General-Health/PAKISTAN-RED-CRESCENT")}><div>Pakistan Red crescent.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="650" onClick={() => history.push("/AreaOfWorking/General-Health/RA-ANA-LIAQUAT-CRAFSTSMEN-COLONY-HEALTH-CARE-CENTRE")}><div>RLCC Health Care Centre.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="750" onClick={() => history.push("/AreaOfWorking/General-Health/SINDH-INSTITUTE-OF-UROLOGY-AND-TRANSPLANTATION")}><div>SIUT.</div></li>
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

export default GeneralHealth