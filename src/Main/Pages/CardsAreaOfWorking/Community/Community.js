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


const Community = (props) => {
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
                                        <Link to={`/Community`}>
                                            Community
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="Community">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">C</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">M</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">M</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">U</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">N</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">Y</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Community :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Community is the third collective stage of society after an individual and a group, a well-
                                        functioning community is the basis of an efficient society. The organizations listed in this
                                        category are trying to aid the society on a community level. Each of these organizations help
                                        a different fragment of society which completes the bigger picture.
                                        </p>
                                    <div className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Community/RLCC")}><div>RLCC</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Community/AMAN-FOUNDATION")}><div>Aman Foundation.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Community/CHHIPA-FOUNDATION")}><div>Chhipa Foundation.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Community/FIX-IT")}><div>Fix It.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="550" onClick={() => history.push("/AreaOfWorking/Community/JDC")}><div>JDC.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="650" onClick={() => history.push("/AreaOfWorking/Community/LYARIANZ-YOUTH-DEVELOPMENT-PROGRAM")}><div>Lyarianz Youth Development Program.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="750" onClick={() => history.push("/AreaOfWorking/Community/ROBIN-HOOD-ARMY")}><div>Robin Hood Army.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="850" onClick={() => history.push("/AreaOfWorking/Community/SAYLANI-WELFARE-TRUST")}><div>Saylani Welfare Trust.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="950" onClick={() => history.push("/AreaOfWorking/Community/SHAHID-AFRIDI-FOUNDATIO")}><div>Shahid Afridi Foundation.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1050" onClick={() => history.push("/AreaOfWorking/Community/SOFIA-KHANA-GHAR")}><div>Sofia Khana Ghar.</div></li>
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

export default Community