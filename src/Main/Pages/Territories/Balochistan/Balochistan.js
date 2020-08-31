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


const Balochistan = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0,0)
    })
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <Layout>
                        <NavBar />
                        <Content className="content-container-class">
                            {/* <div className="spacing-class" /> */}
                            <div className="margin-class">
                                <Breadcrumb style={{ margin: '16px 0px' }}>
                                    <Breadcrumb.Item>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`/Territories`}>
                                            Territories
                                        </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`/Territories/Balochistan`}>
                                            Balochistan
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="balochistan">
                                    <h2 className="pakistanPageHeading">
                                    <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">B</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">C</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">H</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">S</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">N</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Topography :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        There are four major physical regions in Balochistan. The upper highlands of the central and
                                        north-eastern areas are bounded by the Sulaiman Range to the east and the Toba Kakar Range
                                        to the northwest. The lower highlands include the eastern slopes of the Sulaiman Range; the
                                        lower ranges of the Makran, Kharan, and Chagai on the west; and the Pab and Kirthar ranges
                                        on the southeast. These highland regions are primarily inhabited by nomadic herdsmen. Flat
                                        plains extend northward along the coast into the mountains; in the northwest an arid desert
                                        region consists of the Chagai, Kharan, and Makran deserts and the swamps of Lora and
                                    Mashkel.</p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Climate :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The upper highlands drain into the Indus River, and the lower highlands drain northward
                                        into the swamps or southward into the Arabian Sea. Outside the influence of the Asian
                                        monsoon, most of the province is dry with continental extremes of heat and cold.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Agriculture :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Agriculture is limited by the scarcity of water, power, and adequate transportation facilities.
                                        Wheat, jowar (sorghum), and rice are the major food crops, and fruits are the principal cash
                                        crops. Sheep raising employs the great majority of the population and occupies most of the
                                        land. The sheep provide a high-quality wool, part of which is exported. Almost all industry is
                                        small-scale; it includes cotton and woollen manufacturing, food processing, carpet making,
                                        textile and leather embroidery, small machinery and appliance manufacturing, and
                                        handicrafts. The transportation network is poorly developed, but roads connect the major
                                        towns, and Quetta is connected by road to the ocean port of Karachi in Sindh province.
                                        Quetta is a centre of the railway network, and its airport offers domestic service.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Education and Land :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The University of Balochistan was established in Quetta in 1970. The Balochi Academy and
                                        the Pashto Academy, also in Quetta, promote the preservation of traditional cultures. Area
                                        134,051 square miles (347,190 square km). Pop. (2003 est.) 7,450,000.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Area :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100"> 
                                        347,190 km².
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Quetta
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Population :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        (2017 est.) 12.34 million.
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

export default Balochistan