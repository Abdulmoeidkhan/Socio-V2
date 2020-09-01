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


const DrugRehabilitation = (props) => {
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
                                        <Link to={`/Drug-Rehabilitation`}>
                                            Drug-Rehabilitation
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="DrugRehabilitation">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">D</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">R</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">U</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">G</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700"> </span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">R</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">H</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">B</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2500">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2600">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2700">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2800">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2900">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="3000">N</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Drug Rehabilitation :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Drug Addiction has been a rising problem of the Pakistani youth since the cold war
                                        however, the forms of drugs popular throughout each generation has been different. The
                                        organizations listed in this category operate with the objective of eradicating drug abuse and
                                        ensuring rehabilitation of those formerly affected by this parasitic addiction.
                                        </p>
                                    <div className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Drug-Rehabilitation/AGHA-KHAN-SPORTS-AND-REHABILITATION-CENTRE")}><div>Agha Khan Sports and Rehab Centre</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Drug-Rehabilitation/DOW-INSTITUTE-OF-BEHAVIORAL-SCIENCES")}><div>Dow Institute of Behavioral Sciences (IBS)</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Drug-Rehabilitation/IBTIDA-DRUG-REHABILITATION-CENTER")}><div>Ibtida Drug Rehabilitation Centre</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Drug-Rehabilitation/WILLING-WAYS")}><div>Willing Ways.</div></li>
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

export default DrugRehabilitation