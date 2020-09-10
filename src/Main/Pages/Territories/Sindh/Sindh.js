import React, { useEffect,useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { GuruContextChanger } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import {
    Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




const { Content } = Layout;


const Sindh = (props) => {
    let [isRender,setIsRender]=useState(false)
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0)
        setIsRender(true)
    },[])
    return (
        <>
            <GuruContextChanger.Consumer>
                {guruState => <>
                    {/* {
                        isRender ? guruState.guruDispatch({ type: "change", payload: "Sindh" }):null
                    } */}
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
                                        <Link to={`/Territories/Sindh`}>
                                            Sindh
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="sindh">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">S</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">N</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">D</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">H</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Topography :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Topographically, Sindh consists of three parallel belts extending from north to south: the
                                        Kīrthar Range on the west, a central alluvial plain bisected by the Indus River, and an eastern
                                        desert belt. The Kīrthar Range is composed of three parallel tiers of ridges, has little soil, and
                                        is mostly dry and barren. The fertile central plain constitutes the valley of the Indus River.
                                        This plain is about 360 miles (580 km) long and about 20,000 square miles (51,800 square
                                        km) in area and gradually slopes downward from north to south. When the river’s annual
                                        flood was magnified by unusually heavy monsoon rains in summer 2010, Sindh was hard hit
                                        by the ensuing devastation. The eastern desert region includes low dunes and flats in the
                                        north, the Achhrro Thar (“White Sand Desert”) to the south, and the Thar Desert in the
                                        southeast.
                                        </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Map :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Sindh also spelled Sind, province of southeastern Pakistan. It is bordered by the provinces of
                                        Baluchistan on the west and north, Punjab on the northeast, the Indian states of Rajasthan and
                                        Gujarat to the east, and the Arabian Sea to the south. Sindh is essentially part of the Indus
                                        River delta and has derived its name from that river, which is known in Pakistan as the
                                        Sindhu. The province of Sindh was established in 1970.
                                        </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Climate :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Sindh has a subtropical climate and experiences hot summers and cold winters.
                                        Temperatures frequently rise above 115° F (46° C) between May and August, and the
                                        average low temperature of 36° F (2° C) occurs in December and January. Annual
                                        precipitation averages about 7 inches (180 mm), falling mainly during July and August.
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
                                        Except for the irrigated Indus River valley, the province is arid and has scant vegetation.
                                        The dwarf palm, kher (Acacia rupestris), and lohirro (Tecoma undulata) trees are
                                        characteristic of the western hill region. In the central valley, the babul tree is the most
                                        dominant and occurs in thick forests along the banks of the Indus. Mango, date palm, banana,
                                        guava, and orange are typical fruit-bearing trees cultivated in the Indus valley. The coastal
                                        strip and the creeks abound in semiaquatic and aquatic plants.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">Population & Economy :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The population has grown rapidly since 1947 and is concentrated in the cities and the
                                        irrigated central valley. The pace of urbanization has also been swift, and two of the largest
                                        cities in Pakistan, Karachi and Hyderabad, are in the province.
                                        Agriculture is the basis of the economy. Sindh’s agricultural productivity increased
                                        substantially after 1961 because of advances in agricultural research, the use of inorganic
                                        fertilizers, and the construction of surface drains to relieve waterlogging and salinity in
                                        surface soils. Sindh’s largest water project, the Gudu Barrage, provides water for irrigation.
                                        Cotton, wheat, rice, sugarcane, corn (maize), millet, and oilseeds are the major crops in the
                                        province. There are also many orchards yielding mangoes, dates, bananas, and other fruits.
                                        Livestock raising is also important, with cattle, buffalo, sheep, and goats the main animals
                                        kept. Sindh’s coastal waters contain prawns and shrimp, pomfrets, shad, and catfish in
                                        abundance.
                                        Sindh is one of Pakistan’s most industrialized regions, with much of its large-scale
                                        manufacturing centered in Karachi. The province accounts for a substantial part of the
                                        country’s entire raw-cotton production and contains many of the nation’s cotton mills.
                                        Several large cement factories turn out much of Pakistan’s cement products, and there is a
                                        sugar industry with many mills. There are also plants producing steel and automobiles. Two
                                        major highways, running along the east and west banks of the Indus River respectively,
                                        traverse the province from south to north. Karachi is connected by road and railway to Lahore
                                        in Punjab province and to Quetta in Baluchistan province. The Indus and some of its channels
                                        have served as the main waterways since time immemorial. These waterways are now mainly
                                        used for the transport of grain and other agricultural products. Karachi is Pakistan’s major

                                        port. Karachi is the stronghold of the national press. Major universities include Sindh
                                        University, Center in Hyderabad, and Karachi University. The Sindhi Adabi (literary) board,
                                        which publishes works on Sindhi culture, and the Sindh-Provincial Museum and Library are
                                        in Hyderabad; libraries in Karachi include the State Bank of Pakistan Library, the Liaquat
                                        Memorial Library, and others.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Languages :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        The major indigenous languages in Sindh are Sindhi, Seraiki, and Balochi. With the entry of
                                        numerous linguistic groups from India after 1947, other languages have come to be spoken in
                                        the urban areas. Of these, the most common is Urdu, followed by Punjabi, Gujarati, and
                                        Rajasthani. The national official language, Urdu, is taught in the province’s schools, along
                                        with Sindhi. The province’s population is overwhelmingly Muslim.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Migrating Activity :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Sizable and ongoing migration to the province has resulted in an ethnically mixed
                                        population. Indigenous groups are the Mehs, or Muhannas, descendants of the ancient Mēds;
                                        Sammas and the related Lakhas, Lohānās, Nigamaras, Kahahs, and Channas; Sahtas, Bhattīs,
                                        and Thakurs of Rajput origin; Jats and Lorras, both admixtures of the ancient Scythian and
                                        the later Baloch peoples; and Jokhia and Burfat. With the advent of Islam in the region in the
                                        8th century, groups of Arab, Persian, and Turkish origin settled in Sindh: the most numerous
                                        among these were the Baloch, who, beginning in the 13th century, migrated to Sindh and
                                        made it their second homeland after Baluchistan. Another great change occurred with the
                                        influx of Muslim refugees from India after the partition of the subcontinent in 1947; a
                                        substantial part of the population is now descended from refugees from India.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Area :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        54,407 square miles (140,914 square km).
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Karachi
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Population :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        (2006 est.) 35,864,000.
                                    </p>
                                </section>
                            </div>
                        </Content>
                        <MyFooter />
                    </Layout>
                </>}
            </GuruContextChanger.Consumer>
        </>
    )
}

export default Sindh