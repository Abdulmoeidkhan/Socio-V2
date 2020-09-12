import React, { useEffect } from 'react';
import { Layout } from 'antd';
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./Territories.css"
import AOS from "aos";
import "aos/dist/aos.css";




const { Content } = Layout;


const Territories = (props) => {
    let history = useHistory()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return (
                    <Layout>
                        <NavBar />
                        <Content className="content-container-class">
                            {/* <div className="spacing-class" /> */}
                            <div className="terr-section-parent">
                                <section className="equal-columns-grid">
                                    <div>
                                        <div onClick={() => history.push("/Territories/Pakistan")} className="link-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="1000">
                                            <img className="anime-class-img" src={require("../../Assets/PakistanMaps.png")} alt={require("../../Assets/PakistanMaps.png")} />
                                        </div>
                                    </div>
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super" data-aos-duration="800" data-aos={"zoom-in-left"} data-aos-delay="200">About</p>
                                        <h2 className="content-head" data-aos-duration="800" data-aos={"zoom-in-left"} data-aos-delay="400">PAKISTAN </h2>
                                        <p className="content-para" data-aos-duration="900" data-aos={"zoom-in-left"} data-aos-delay="500"> Pakistan, populous and multiethnic country of South Asia. Having a predominately Indo-Iranian speaking population, Pakistan has historically and culturally been associated with its neighbours Iran, Afghanistan, and India. Since Pakistan and India achieved independence in 1947, Pakistan has been distinguished from its larger southeastern neighbour by its overwhelmingly Muslim population (as opposed to the predominance of Hindus in India). Pakistan has struggled throughout its existence to attain political stability and sustained social development. Its capital is Islamabad, in the foothills of the Himalayas in the northern part of the country, and its largest city is Karachi, in the south on the coast of the Arabian Sea.</p>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super" data-aos-duration="800" data-aos={"zoom-in-right"} data-aos-delay="200">About</p>
                                        <h2 className="content-head" data-aos-duration="800" data-aos={"zoom-in-right"} data-aos-delay="400">SINDH</h2>
                                        <p className="content-para" data-aos-duration="900" data-aos={"zoom-in-right"} data-aos-delay="500"> Sindh, also spelled Sind, province of southeastern Pakistan. It is bordered by the provinces of Balochistān on the west and north, Punjab on the northeast, the Indian states of Rajasthan and Gujarat to the east, and the Arabian Sea to the south. Sindh is essentially part of the Indus River delta and has derived its name from that river, which is known in Pakistan as the Sindhu. The province of Sindh was established in 1970. The provincial capital, Karāchi, is situated on the southwestern coast. Area 54,407 square miles (140,914 square km). Pop. (2006 est.) 35,864,000.</p>
                                    </div>
                                    <div>
                                        <div onClick={() => history.push("/Territories/Sindh")} className="link-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="200">
                                            <img className="anime-class-img" src={require("../../Assets/Sindh.png")} alt={require("../../Assets/Sindh.png")} />
                                        </div>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div>
                                        <div onClick={() => history.push("/Territories/Punjab")} className="link-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="200">
                                            <img className="anime-class-img" src={require("../../Assets/Punjab.png")} alt={require("../../Assets/Punjab.png")} />
                                        </div>
                                    </div>
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super" data-aos-duration="800" data-aos={"zoom-in-left"} data-aos-delay="200">About</p>
                                        <h2 className="content-head" data-aos-duration="800" data-aos={"zoom-in-left"} data-aos-delay="400">PUNJAB</h2>
                                        <p className="content-para" data-aos-duration="900" data-aos={"zoom-in-left"} data-aos-delay="500">Punjab, province of eastern Pakistan. It is bordered by the Indian state of Jammu and Kashmir to the northeast, the Indian states of Punjab and Rajasthan to the east, Sindh province to the south, Balochistān and Khyber Pakhtunkhwa provinces to the west, and Islamabad federal capital area and Azad Kashmir to the north. The provincial capital, Lahore, is located in the east-central region, near the border with India. The name Punjab means “five waters,” or “five rivers,” and signifies the land drained by the Jhelum, Chenab, Ravi, Beas, and Sutlej rivers, which are tributaries of the Indus River. Punjab is Pakistan’s second largest province, after Balochistān, and the most densely populated. Area 79,284 square miles (205,345 square km). Pop. (2011 est.) 91,379,615.</p>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super" data-aos-duration="800" data-aos={"zoom-in-right"} data-aos-delay="200">About</p>
                                        <h2 className="content-head" data-aos-duration="800" data-aos={"zoom-in-right"} data-aos-delay="400">BALOCHISTAN</h2>
                                        <p className="content-para" data-aos-duration="900" data-aos={"zoom-in-right"} data-aos-delay="500"> Balochistan, also spelled Balūchistān, westernmost province of Pakistan. It is bordered by Iran (west), by Afghanistan (northwest), by Khyber Pakhtunkhwa and Punjab provinces (northeast and east), by Sindh province (southeast), and by the Arabian Sea (south).</p>
                                    </div>
                                    <div>
                                        <div onClick={() => history.push("/Territories/Balochistan")} className="link-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="200">
                                            <img className="anime-class-img" src={require("../../Assets/Balochistan.png")} alt={require("../../Assets/Balochistan.png")} />
                                        </div>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div>
                                    <div onClick={() => history.push("/Territories/KPK")}  className="link-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="200">
                                            <img className="anime-class-img" src={require("../../Assets/KhyberPakhtunkwa.png")} alt={require("../../Assets/KhyberPakhtunkwa.png")} />
                                        </div>
                                    </div>
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super" data-aos-duration="800" data-aos={"zoom-in-left"} data-aos-delay="200">About</p>
                                        <h2 className="content-head" data-aos-duration="800" data-aos={"zoom-in-left"} data-aos-delay="400">KPK</h2>
                                        <p className="content-para" data-aos-duration="900" data-aos={"zoom-in-left"} data-aos-delay="500">Khyber Pakhtunkhwa, formerly North-West Frontier Province, northernmost province of Pakistan. It is bounded by Afghanistan to the west and north, Azad Kashmir and the Northern Areas (the Pakistani-administered areas of the Kashmir region) to the east and northeast, Punjab province to the southeast, and Balochistān province to the southwest. On the western boundary of Khyber Pakhtunkhwa, along the Afghan border, are the federally administered tribal areas, a series of semiautonomous areas that are ethnically homogeneous with the province but not politically connected to it. Peshawar is the provincial capital. Area province, 28,773 square miles (74,521 square km); federally administered tribal areas, 10,509 square miles (27,220 square km). Pop. (2006 est.) province, 21,392,000; federally administered tribal areas, 3,621,000.</p>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super" data-aos-duration="800" data-aos={"zoom-in-right"} data-aos-delay="200">About</p>
                                        <h2 className="content-head" data-aos-duration="800" data-aos={"zoom-in-right"} data-aos-delay="400">GILGIT BALTISTAN</h2>
                                        <p className="content-para" data-aos-duration="900" data-aos={"zoom-in-right"} data-aos-delay="500"> Gilgit, town in Gilgit-Baltistan, part of the Pakistani-administered sector of the Kashmir region, in the northern Indian subcontinent. It is situated in the Karakoram Range in a narrow valley on the Gilgit River at its confluence with the Hunza River and about 20 miles (32 km) upstream from its confluence with the Indus River. The town was once a Buddhist centre; now, as in earlier days, it serves as a frontier station for local tribal areas. Its economy is mainly agricultural, with wheat, corn (maize), and barley as the main crops. Tourism, notably trekking and mountaineering in the Karakorams, is growing in importance. The main route from Gilgit through the mountains to Mansehra in Khyber Pakhtunkhwa province is the Karakoram Highway (completed in 1978); the town has a small airport. Gilgit is the only town of any size in the region. Pop. (1998 prelim.) 8,200.</p>
                                    </div>
                                    <div>
                                    <div onClick={() => history.push("/Territories/Gilgit")}  className="link-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="200">
                                            <img className="anime-class-img" src={require("../../Assets/GilgitBalistan.png")} alt={require("../../Assets/GilgitBalistan.png")} />
                                        </div>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div>
                                    <div onClick={() => history.push("/Territories/Kashmir")}  className="link-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="200">
                                            <img className="anime-class-img" src={require("../../Assets/AzadKashmir.png")} alt={require("../../Assets/AzadKashmir.png")} />
                                        </div>
                                    </div>
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super" data-aos-duration="800" data-aos={"zoom-in-left"} data-aos-delay="200">About</p>
                                        <h2 className="content-head" data-aos-duration="800" data-aos={"zoom-in-left"} data-aos-delay="400">AZAD KASHMIR</h2>
                                        <p className="content-para" data-aos-duration="900" data-aos={"zoom-in-left"} data-aos-delay="500">Azad Kashmir, area of the Pakistani-administered sector of the Kashmir region, in the northwestern part of the Indian subcontinent. Azad (“Free”) Kashmir, established in 1947 after the partition of India, is neither a province nor an agency of Pakistan but has a government of its own that is regarded by Pakistan as “independent,” even though it is protected by and economically and administratively linked to Pakistan. It has an area of approximately 650 square miles (1,680 square km) and consists of an arc of territory bordering the Indian state of Jammu and Kashmir to the east, the Pakistani provinces of Punjab to the south and southwest and Khyber Pakhtunkhwa to the west, and the Gilgit and Baltistan regions of Pakistani-administered Kashmir (part of what are called the Northern Areas) to the north.</p>
                                    </div>
                                </section>
                               </div>
                        </Content>
                        <MyFooter />
                    </Layout>
    )
}

export default Territories