import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import PictureTiles from "../../../Components/PictureTiles/PictureTiles";
import {
    Link,
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GeneralHealth.css"




const { Content } = Layout;


const GeneralHealth = (props) => {
    let history = useHistory()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0)
    })
    return (
        <Layout>
            <NavBar />
            <Content className="content-container-class">
                <div className="margin-class">
                    <Breadcrumb style={{ margin: '16px 0px' }}>
                        <Breadcrumb.Item>
                        <Link to="/Home">
                                Home
                                        </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={`/AreaOfWorking`}>
                                Area Of Working
                                        </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={`/General-Health`}>
                                General Health
                                        </Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <section className="detail-territory" id="GeneralHealth">
                        <h2 className="pakistanPageHeading">
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">G</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">E</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">N</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">E</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">R</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">A</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">L</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000"> </span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">H</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">E</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">A</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">L</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2500">T</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2600">H</span>
                        </h2>
                        <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> General Health :-</h2>
                        <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                            This area of working comprises of health institutions both private and government which
                            serve the medical patients with different complications, the aim is to improve the health
                            facilities available to the commoners as health and life protection is a right of the people.
                                        </p>
                        <div className="pakistanBoldPara generalHealth-org-detailed-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                            <div className="sub-org-detailed-class ">
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/General-Health/DOW-OJHA-INSTITUTE-OF-CHEST-DISEASES")}>
                                    <PictureTiles name="Dow Ojha" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606273/Organization%20LOGOS/PNG/DOW_Ojha_z4wfre.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/General-Health/LIAQUAT-NATIONAL-HOSPITAL")}>
                                    <PictureTiles name="Liaquat National Hospital" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606270/Organization%20LOGOS/PNG/Liaquat_National_Hospital_phhpko.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/General-Health/NICVD-NATIONAL-INSTITUTE-OF-CARDIO-VESCULAR-DISEASES")}>
                                    <PictureTiles name="NICVD" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606270/Organization%20LOGOS/PNG/NICVD_mkcqyc.png" />
                                </div>
                            </div>
                            <div className="sub-org-detailed-class">
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/General-Health/PAKISTAN-RED-CRESCENT")}>
                                    <PictureTiles name="Pakistan Red Crescent" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606270/Organization%20LOGOS/PNG/Pakistan_Red_Cresent_otrcri.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="550" onClick={() => history.push("/AreaOfWorking/General-Health/RA-ANA-LIAQUAT-CRAFSTSMEN-COLONY-HEALTH-CARE-CENTRE")}>
                                    <PictureTiles name="RLCC Health Care Centre" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606270/Organization%20LOGOS/PNG/RLCC_rzgecc.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="650" onClick={() => history.push("/AreaOfWorking/General-Health/SINDH-INSTITUTE-OF-UROLOGY-AND-TRANSPLANTATION")}>
                                    <PictureTiles name="SIUT" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606271/Organization%20LOGOS/PNG/SIUT_q94kuo.png" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Content>
            <MyFooter />
        </Layout>
    )
}

export default GeneralHealth