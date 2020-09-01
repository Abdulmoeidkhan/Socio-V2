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


const Education = (props) => {
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
                                        <Link to={`/Education`}>
                                            Education
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="Education">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">D</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">U</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">C</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">N</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Education :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Education is a necessity and right of people in today’s world, unfortunately the educational
                                        statistics and standards in Pakistan are not very promising but these organizations have come
                                        forward to play their parts in the educational development of generations to come!
                                        </p>
                                    <div className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Education/APEX-EDUCATION-FORUM")}><div>Apex Education Forum.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Education/EDUCATION-TRUST-NASRA-SCHOOL")}><div>Education Trust-Nasra School.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Education/PAKISTAN-YOUTH-ORGANIZATION")}><div>Pakistani Youth Org.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Education/RA’ANA-LIAQUAT-PUBLIC-SCHOOL")}><div>Ra’ana Liaquat Public School.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="550" onClick={() => history.push("/AreaOfWorking/Education/THE-CITIZENS-FOUNDATION")}><div>The Citizens Foundation.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="650" onClick={() => history.push("/AreaOfWorking/Education/YOUTH-EXPRESS-PAKISTAN")}><div>Youth Express Pakistan.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="750" onClick={() => history.push("/AreaOfWorking/Education/AreaOfWorking/Education/ZINDAGI-TRUST")}><div>Zindagi Trust.</div></li>
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

export default Education