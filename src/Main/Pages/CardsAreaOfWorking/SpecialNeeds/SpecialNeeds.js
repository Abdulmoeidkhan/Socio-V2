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


const SpecialNeeds = (props) => {
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
                                        <Link to={`/Special-Needs`}>
                                            Special Needs
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="SpecialNeeds">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">S</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">P</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">C</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000"> </span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">N</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">D</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2500">S</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Special Needs :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        People with special needs are seen everywhere in the world with different socio-economic
                                        status because there are no restricted boundaries for the prevalence of disability in terms of
                                        geographical borders or societal categorization, gender or socio-economic characteristics. It is
                                        a common feature all over the civilized world that society observes noble cause of education,
                                        rehabilitation and other support programs for all the persons with special needs. On the
                                        contrary there are many organizations that are striving to empower people with special needs.
                                        </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">Following are the shortlisted organizations that are currently working in Karachi:</h2>
                                    <div className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Special-Needs/A.P.H.A-ORGANIZATION")}><div>A.P.H.A Organization.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Special-Needs/DAR-UL-SUKUN")}><div>Dar-ul-Sukoon.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Special-Needs/DEWA-ACADEMY")}><div>DEWA Academy.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Special-Needs/MARKAZ-E-UMEED")}><div>Markaz-E-Umeed.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Special-Needs/QUAID-E-AZAM-RANGERS-SPECIAL-CHILDREN-SCHOOL")}><div>Quaid-e-Azam Rangers Special Children School (QRSCS).</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="550" onClick={() => history.push("/AreaOfWorking/Special-Needs/SHAHEED-E-MILLAT-SPECIAL-EDUCATION-CENTRE")}><div>Shaheed-e-Millat Special Education Centre.</div></li>
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

export default SpecialNeeds