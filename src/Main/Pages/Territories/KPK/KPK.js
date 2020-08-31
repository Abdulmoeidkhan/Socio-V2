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


const KPK = (props) => {
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
                                        <Link to={`/Territories/KPK`}>
                                            KPK
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="kpk">
                                    <h2 className="pakistanPageHeading">
                                    <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">K</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">P</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">K</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Topography :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        The fertile Vale of Peshawar extends northward along the Kabul River. Though it covers
                                        less than one-tenth of the province’s area, this region contains about half of its total
                                        population. The city of Peshawar lies in the western portion of the vale. West of Peshawar,
                                        the historic Khyber Pass is strategically important as the most easily negotiable route between
                                        Afghanistan and the Indian subcontinent. South of the Kabul River lies the east-west-trending
                                        Spīn Ghar (Safīd Kūh) Range. The Kurram, Tochi, and Gumal rivers drain the province’s
                                        southern region, and the Indus River forms part of the province’s eastern border.
                                        Peshawar lies on an east-west road that connects Kabul, Afghanistan, to Islamabad, the
                                        capital of Pakistan. A major north-south road traverses the province, and an east-west railway
                                        runs from the Afghanistan border through Peshawar to Lahore in Punjab province. A major
                                        airport is in Peshawar. Peshawar is the site of the University of Peshawar (1950), the
                                        Peshawar Museum, and other colleges and cultural institutes.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Map :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Khyber Pakhtunkhwa, formerly North-West Frontier Province, northernmost province of
                                        Pakistan. It is bounded by Afghanistan to the west and north, Azad Kashmir and the Northern
                                        Areas (the Pakistani-administered areas of the Kashmir region) to the east and northeast,
                                        Punjab province to the southeast, and Baluchistan province to the southwest. On the western
                                        boundary of Khyber Pakhtunkhwa, along the Afghan border, are the federally administered
                                        tribal areas, a series of semiautonomous areas that are ethnically homogeneous with the
                                        province but not politically connected to it. Peshawar is the provincial capital.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Geography :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The terrain consists of mountain ranges, undulating submontane areas, and plains
                                        surrounded by hills. In the north the mountain ranges generally run north-south; south of the
                                        Kabul River, which bisects the province from east to west, the ranges generally run east-west.
                                        The Hindu Kush region in the north, long noted for its scenic beauty, is divided by the Kunar
                                        River into two distinct ranges: the northern Hindu Kush and the Hindu Raj. Tirich Mir rises
                                        to 25,230 feet (7,690 metres) and is the highest peak of the northern Hindu Kush. To the
                                        south of the Hindu Raj lie the rugged basins of the Panjkora, Swat, and Kandia rivers. The
                                        Lesser Himalayas and the Sub-Himalayas are situated in the eastern part of the province and
                                        form definite ranges broken by hilly country and small plains. The region is seismically
                                        active, with frequent mild to moderate tremors. In 2005 a severe earthquake cantered in
                                        nearby Azad Kashmir killed thousands.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Climate :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The climate varies with elevation. The mountain ranges experience cold winters and cool
                                        summers, and temperatures rise markedly toward the south. Precipitation over the province is
                                        variable but averages roughly 16 inches (400 mm) annually, with much of this occurring
                                        during the period from January to April.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Land :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Area province, 28,773 square miles (74,521 square km); federally administered tribal areas,
                                        10,509 square miles (27,220 square km). Pop. (2006 est.) province, 21,392,000; federally
                                        administered tribal areas, 3,621,000.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Language :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Khyber Pakhtunkhwa is inhabited mainly by the Pashtun, who are noted for their
                                        independence. The Pashtun comprise many tribes and clans, each taking great pride in its
                                        genealogy. Pashto is the main language in the province, except for some areas where Punjabi
                                        predominates, and virtually all the population is Muslim. Only a small part of the overall
                                        population is urban. The province’s major cities include Peshawar, Mardan, Mingaora,
                                        Kohat, and Abbottabad.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Education and Population :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Educational progress in the province has been quite slow, and the literacy rate among the
                                        total population is lower than that of Pakistan as a whole. In the tribal areas on the province’s
                                        western fringe, the Pashtun tribes are free to govern themselves according to their own
                                        customs. Political and military agents who are responsible to the central government have the
                                        power to award or withhold subsidies and to control entry into and departure from the tribal
                                        areas. The border with neighbouring Afghanistan, however, has traditionally been porous,
                                        and Pashtun tribesmen have moved between countries with little interference.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Economy :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The province’s economy is essentially agricultural, even though the mountainous terrain is
                                        not favourable to extensive cultivation. Irrigation is carried out on about one-third of the
                                        cultivated land. Wheat, corn (maize), sugarcane, and tobacco are the major crops. The
                                        principal industries are the manufacture and refining of sugar, the canning and preservation of
                                        fruits and vegetables, tobacco processing, and the manufacture of small arms and accessories.
                                        Other products are cotton textiles, cement, ghee (clarified butter), furniture, and milled
                                        grains.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Area :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        101,741 km².
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Peshawar
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Population :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        (2017 est.) 35.53 million.
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

export default KPK