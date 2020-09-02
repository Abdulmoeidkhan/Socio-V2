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


const Women = (props) => {
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
                                        <Link to={`/Women`}>
                                            Women
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="Women">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">W</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">M</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">N</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Women :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        How well a society treats its women is one of the strongest indicators of the success and
                                        health of that society. Discrimination against women and girls occurs in many forms through
                                        gender-based violence, economic discrimination, reproductive health inequities, and harmful
                                        traditional practices. Women and girls of all ages have a right to live with dignity, free of
                                        cultural oppression. After all these years of adopting the gender-based agreements our society
                                        still fails to provide equal rights to women. Therefore, to pull off a better and gender free
                                        environment for women there are some renowned organizations operating in Karachi such as:
                                        </p>
                                    <div className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Women/AAHUNG-FOUNDATION")}><div>Aahung Foundation.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Women/AURAT-FOUNDATION")}><div>Aurat Foundation.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Women/DEPILEX-SMILE-AGAIN-FOUNDATION")}><div>Depilex Smile again.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Women/RA’ANA-LIAQUAT-CRAFSTSMEN-COLONY-(RLCC-WOMEN)")}><div>RLCC-Women.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="550" onClick={() => history.push("/AreaOfWorking/Women/SHIRKAT-GAH-WOMEN-RESOURCE-CENTRE")}><div>Shirkat Gah Women Resource Centre.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="650" onClick={() => history.push("/AreaOfWorking/Women/TEHRIK-E-NISWA")}><div>Tehreek e Niswa.</div></li>
                                            <li data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="750" onClick={() => history.push("/AreaOfWorking/Women/PAKISTAN-FEDERATION-OF-BUSINESS-AND-PROFESSIONAL-WOMEN-ORGANIZATION")}><div>Pakistan Federation of Business and Professional Women Organization.</div></li>
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

export default Women