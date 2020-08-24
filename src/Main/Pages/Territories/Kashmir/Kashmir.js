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


const Kashmir = (props) => {
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
                                        <Link to={`/Kashmir`}>
                                            Kashmir
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="kashmir">
                                    <h2 className="pakistanPageHeading" >
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">Z</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">D</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700"> </span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">K</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">S</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">H</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">M</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">R</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Map :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500" >
                                        Kashmir, region of the north-western Indian subcontinent. It is bounded by the Uygur
                                        Autonomous Region of Xinjiang to the northeast and the Tibet Autonomous Region to the
                                        east (both parts of China), by the Indian states of Himachal Pradesh and Punjab to the south,
                                        by Pakistan to the west, and by Afghanistan to the northwest. The region, with a total area of
                                        some 85,800 square miles (222,2236 square km), has been the subject of dispute between
                                        India and Pakistan since the partition of the Indian subcontinent in 1947. The northern and
                                        western portions are administered by Pakistan and comprise three areas: Azad Kashmir,
                                        Gilgit, and Baltistan, the last two being part of a territory called the Northern Areas.
                                        Administered by India are the southern and south-eastern portions, Jammu and Kashmir and
                                        Ladakh. The Indian- and Pakistani-administered portions are divided by a “line of control”
                                        agreed to in 1972, although neither country recognizes it as an international boundary. In
                                        addition, China became active in the eastern area of Kashmir in the 1950s and has controlled
                                        the north-eastern part of Ladakh (the easternmost portion of the region) since 1962.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Land and People :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The Kashmir region is predominantly mountainous, with deep, narrow valleys and high,
                                        barren plateaus. The relatively low-lying Jammu and Punch (Poonch) plains in the southwest
                                        are separated by the thickly forested Himalayan foothills and the Pir Panjal Range of the
                                        Lesser Himalayas from the larger, more fertile, and more heavily populated Vale of Kashmir
                                        to the north. The vale, situated at an elevation of about 5,300 feet (1,600 metres), constitutes
                                        the basin of the upper Jhelum River and contains the city of Srinagar. Jammu and the vale lie
                                        in Indian-administered Jammu and Kashmir, while the Punch lowlands are largely in Azad
                                        Kashmir.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Topography :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Rising northeast of the vale is the western part of the Great Himalayas, the peaks of which
                                        reach elevations of 20,000 feet (6,100 metres) or higher. Farther to the northeast is the high,
                                        mountainous plateau region of Ladakh, which is cut by the rugged valley of the
                                        northwestward-flowing Indus River. Extending roughly northwestward from the Himalayas
                                        are the lofty peaks of the Karakoram Range, including K2 (Mount Godwin Austen), which at
                                        28,251 feet (8,611 metres) is the second highest peak in the world, after Mount Everest.
                                        The region is located along the northernmost extremity of the Indian-Australian tectonic
                                        plate. The subduction of that plate beneath the Eurasian Plate—the process that for roughly
                                        50 million years has been creating the Himalayas—has produced heavy seismic activity in
                                        Kashmir. One especially powerful earthquake in 2005 devastated Muzaffarabad, which is the

                                        administrative centre of Azad Kashmir, and adjacent areas including parts of India’s Jammu
                                        and Kashmir state and Pakistan’s North-West Frontier Province.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Climate :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The climate of the region ranges from subtropical in the southwestern lowlands to alpine
                                        throughout the high mountain areas. Precipitation is variable; it is heavier in areas that can be
                                        reached by the monsoonal winds west and south of the great ranges and sparse to the north
                                        and east where continental conditions prevail.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Language :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The people in the Jammu area are Muslim in the west and Hindu in the east and speak
                                        Hindi, Punjabi, and Dogri. The inhabitants of the Vale of Kashmir and the Pakistani areas are
                                        mostly Muslim and speak Urdu and Kashmiri. The sparsely inhabited Ladakh region and
                                        beyond is home to Tibetan peoples who practice Buddhism and speak Balti and Ladakhi.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">The Kashmir Dispute :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        If the territory’s existence was guaranteed by the United Kingdom, the weaknesses in its
                                        structure and along its peripheries were not of great consequence, but they became apparent
                                        after the British withdrawal from South Asia in 1947. By the terms agreed to by India and
                                        Pakistan for the partition of the Indian subcontinent, the rulers of princely states were given
                                        the right to opt for either Pakistan or India or with certain reservations to remain independent.
                                        Hari Singh, the maharaja of Kashmir, initially believed that by delaying his decision he could
                                        maintain the independence of Kashmir, but, caught up in a train of events that included a
                                        revolution among his Muslim subjects along the western borders of the state and the
                                        intervention of Pashtun tribesmen, he signed an Instrument of Accession to the Indian union
                                        in October 1947. This was the signal for intervention both by Pakistan, which considered the
                                        state to be a natural extension of Pakistan, and by India, which intended to confirm the act of
                                        accession. Localized warfare continued during 1948 and ended, through the intercession of
                                        the United Nations, in a cease-fire that took effect in January 1949. In July of that year, India
                                        and Pakistan defined a cease-fire line the line of control that divided the administration of the
                                        territory. Regarded at the time as a temporary expedient, the partition along that line still
                                        exists.
                                        Many proposals were subsequently made to end the dispute over Kashmir, but tensions
                                        mounted between the two countries following the Chinese incursion into Ladakh in 1962, and
                                        warfare broke out between India and Pakistan in 1965. A cease-fire was established in
                                        September, followed by an agreement signed by the two sides at Tashkent (Uzbekistan) in
                                        early January 1966, in which they resolved to try to end the dispute by peaceful means.
                                        Fighting again flared up between the two in 1971 as part of the India-Pakistan war that
                                        resulted in the creation of Bangladesh. An accord signed in the Indian city of Shimla in 1972
                                        expressed the hope that henceforth the countries in the region would be able to live in peace
                                        with each other. It was widely believed that Zulfikar Ali Bhutto, then prime minister of

                                        Pakistan, might have tacitly accepted the line of control as the de facto border, although he
                                        later denied this. After Bhutto was arrested in 1977 and executed in 1979, the Kashmir issue
                                        once again became the leading cause of conflict between India and Pakistan.
                                        Several movements have variously sought a merger of Kashmir with Pakistan, independence
                                        for the region from both India and Pakistan, or the granting of Indian union territory status to
                                        Buddhist Ladakh. To contend with these movements, confront Pakistani forces along the
                                        cease-fire line, and support the administrative structure of Jammu and Kashmir state, the
                                        Indian union government has maintained a strong military presence there, especially since the
                                        end of the 1980s.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Area :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        85,800 square miles (222,236 square km)
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Muzaffarabad.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Population :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        (2011est.) 12.5 million.
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

export default Kashmir