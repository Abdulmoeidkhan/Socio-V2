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


const Punjab = (props) => {
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
                                        <Link to={`/Territories/Punjab`}>
                                            Punjab
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="punjab">
                                    <h2 className="pakistanPageHeading">
                                    <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">P</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">U</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">N</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">J</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">B</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Topography :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Punjab’s area mostly consists of an alluvial plain formed by the southward-flowing Indus
                                        River and its four major tributaries in Pakistan, the Jhelum, Chenab, Ravi, and Sutlej rivers.
                                        The general slope of the land is from northeast to southwest, but it rises in the areas between
                                        rivers. The alluvial plain has a diversity of landforms: its active floodplains are flooded every
                                        rainy season and contain changing river channels, while meander floodplains lying adjacent
                                        to the active floodplain are marked by relict and abandoned channels. In the northern parts of
                                        the province are the Murree and Rawalpindi and the Pabbi hills, part of the Sub-Himalayas,
                                        and in the far north is the Potwar Plateau. Although the region is a traditional floodplain, the
                                        extraordinary flooding of the Indus River in the summer of 2010 was especially disastrous in
                                        Punjab, where millions of people were affected (by some estimates, one-half of all Pakistanis
                                        affected were in Punjab). The government’s failure to alert the public of the impending
                                        disaster elicited much criticism; some felt that officials, having had previous experience
                                        handling flooding there, should have been able to provide Punjabis with more forewarning.
                                        </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Map :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Punjab, province of eastern Pakistan. It is bordered by the Indian state of Jammu and
                                        Kashmir to the northeast, the Indian states of Punjab and Rajasthan to the east, Sindh
                                        province to the south, Balochistan and Khyber Pakhtunkhwa provinces to the west, and
                                        Islamabad federal capital area and Azad Kashmir to the north. The provincial capital, Lahore,
                                        is in the east-central region, near the border with India. The name Punjab means “five
                                        waters,” or “five rivers,” and signifies the land drained by the Jhelum, Chenab, Ravi, Beas,
                                        and Sutlej rivers, which are tributaries of the Indus River.
                                        </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Climate :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Punjab lies on the margin of the monsoon climate. The temperature is generally hot, with
                                        marked variations between summer and winter. In the plain the mean June temperature
                                        reaches the mid-90s F (mid-30s C), while the mean January temperature is in the mid-50s F
                                        (low 10s C). The average annual precipitation is low, except in the sub-Himalayan and
                                        northern areas, and decreases markedly from north to south or southwest, from 23 inches
                                        (580 mm) at Lahore in east-central Punjab to just 7 inches (180 mm) at Multan in the
                                        southwest.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Agriculture And Industrialization :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Agriculture is the chief source of income and employment in Punjab. Much of the province
                                        once consisted of desert wastes that were unfavourable for settlement, but its character
                                        changed after an extensive network of irrigation canals was built in the early 20th century
                                        using the waters of the Indus tributaries. The area of settlement, which had formerly been
                                        limited to the north and northeast, was enlarged to include the whole province, and now about
                                        three-quarters of the province’s cultivable land is irrigated. Wheat and cotton are the principal
                                        crops. Other crops grown include rice, sugarcane, millet, corn (maize), oilseeds, pulses, fruits,
                                        and vegetables. Livestock and poultry are raised in large numbers.
                                        Punjab is one of the more industrialized provinces in Pakistan; its manufacturing industries
                                        produce textiles, machinery, electrical appliances, surgical instruments, metals, bicycles and
                                        rickshaws, floor coverings, and processed foods. Pakistan’s main north-south road and
                                        railway connect Lahore with Islamabad, the capital of Pakistan, to the north and with the
                                        ocean port of Karachi to the south. Punjab is connected by road or railway to India, China,
                                        and Afghanistan, and its major cities are linked by road. Lahore’s airport provides domestic
                                        service. The University of the Punjab and the University of Engineering and Technology are
                                        in Lahore, as are other colleges, museums, libraries, and cultural centres.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">Land :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Punjab is Pakistan’s second largest province, after Baluchistan, and the most densely
                                        populated. Area 79,284 square miles (205,345 square km). When the Indian subcontinent
                                        received its independence in 1947, Punjab was split between Pakistan and India, with the
                                        larger western portion becoming part of Pakistan. The present provincial boundaries were
                                        established in 1970.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">Population, Language & Economy :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Punjab is the most densely populated province of Pakistan, containing more than half the
                                        country’s total population as well as several of its major cities: Lahore, Faisalabad,
                                        Rawalpindi, Multan, and Gujranwala. There is considerable rural-to-urban migration in the
                                        province, especially to the larger cities. In religion, the province is almost entirely Muslim,
                                        with a small Christian minority. Punjabi is the mother tongue of the great majority of the
                                        population. The main written language is Urdu, followed by English. The major ethnic
                                        groups are the Jat, Rajput, Arain, Gujar, and Awan. The caste system is gradually becoming
                                        blurred as a result of increasing social mobility, inter-caste marriages, and changing public
                                        opinion.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Area :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        79,284 square miles (205,345 square km).
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Lahore
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Population :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        (2011 est.) 91,379,615.
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

export default Punjab