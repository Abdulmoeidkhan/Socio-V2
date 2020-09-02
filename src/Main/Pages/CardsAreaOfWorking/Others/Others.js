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


const Others = (props) => {
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
                                        <Link to={`/Others`}>
                                            Others
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="Others">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">H</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">R</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">S</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Others :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Accompanying all these major categories which are stated above, there are some other
                                        domains too which require assistance in a person’s social life i.e. advocacy, basic human
                                        rights, protection and much more, along with the preservation of nature. This category
                                        accommodates all those organizations (profit/non-profit) which are working to help the
                                        individuals in more than one aspect of their life as well as the environment.
                                        </p>
                                        <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">Such organizations located in Karachi are:</h2>
                                    <div className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Others/ADOPT-A-PET")}><div>Adopt a Pet.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Others/ALAMGIR-WELFARE-TRUST")}><div>Alamgir Welfare Trust.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Others/HELPING-HANDS-TRUST")}><div>Helping Hands Foundation.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Others/LAWYERS-FOR-HUMAN-RIGHTS-AND-LEGAL-AID")}><div>Lawyers for human Rights and Legal Aid.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="550" onClick={() => history.push("/AreaOfWorking/Others/LEGAL-RIGHTS-FORUM")}><div>Legal Rights Forum.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="650" onClick={() => history.push("/AreaOfWorking/Others/PAKISTAN-LAWYERS-FOUNDATION")}><div>Pakistan Lawyers Foundations.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="750" onClick={() => history.push("/AreaOfWorking/Others/SARIM-BURNEY-WELFARE-TRUST")}><div>Sarim Burney Welfare Trust.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="750" onClick={() => history.push("/AreaOfWorking/Others/WORLDWIDE-FUND-OF-NATURE")}><div>WWF.</div></li>
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

export default Others