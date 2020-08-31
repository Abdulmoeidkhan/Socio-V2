import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import {
    Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




const { Content } = Layout;


const Children = (props) => {
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
                                        <Link to={`/Children`}>
                                            Children
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="children">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">C</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">H</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">D</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">R</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">N</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Children :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        The children’s area of working enables our users to connect to organizations that help solve
                                        issues regarding children (individuals of age groups less than 18), children are an important
                                        aspect of society as a healthy and well-developed child of today will become an able member
                                        of society tomorrow. Investments done for children today will be reaped in the future.
                                        </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Following organizations are working for the welfare of children in Karachi:</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <ul>
                                            <li>Aahung.</li>
                                            <li>Azad Foundation.</li>
                                            <li>Edhi.</li>
                                            <li>Konpal Child Abuse Prevention.</li>
                                            <li>Make a Wish.</li>
                                            <li>SOS Village.</li>
                                        </ul>
                                    </p>
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

export default Children