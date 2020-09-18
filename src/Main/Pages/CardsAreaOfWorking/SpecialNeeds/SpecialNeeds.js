import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import PictureTiles from "../../../Components/PictureTiles/PictureTiles";
import MyFooter from "../../../Components/Footer/Footer";
import "./SpecialNeeds.css"
import {
    Link,
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




const { Content } = Layout;


const SpecialNeeds = (props) => {
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
                            <Link to={`/Special-Needs`}>
                                Special Needs
                                        </Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <section className="detail-territory" id="SpecialNeeds">
                        <h2 className="pakistanPageHeading">
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">S</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">P</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">E</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">C</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">I</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">A</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">L</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000"> </span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">N</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">E</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">E</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">D</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2500">S</span>
                        </h2>
                        <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Special Needs :-</h2>
                        <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                            People with special needs are seen everywhere in the world with different socio-economic
                            status because there are no restricted boundaries for the prevalence of disability in terms of
                            geographical borders or societal categorization, gender or socio-economic characteristics. It is
                            a common feature all over the civilized world that society observes noble cause of education,
                            rehabilitation and other support programs for all the persons with special needs. On the
                            contrary there are many organizations that are striving to empower people with special needs.
                                        </p>
                        <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">Following are the shortlisted organizations that are currently working in Karachi:</h2>
                        <div className="pakistanBoldPara  specialNeeds-org-detailed-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                            <div className="sub-org-detailed-class">
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Special-Needs/A.P.H.A-ORGANIZATION")}>
                                    <PictureTiles name="A.P.H.A Organization" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606353/Organization%20LOGOS/PNG/APHA_h1jzpq.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Special-Needs/DAR-UL-SUKUN")}>
                                    <PictureTiles name="Dar-ul-Sukun" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606353/Organization%20LOGOS/PNG/Dar_Ul_Sukun_oxx90w.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Special-Needs/SHAHEED-E-MILLAT-SPECIAL-EDUCATION-CENTRE")}>
                                    <PictureTiles name="Shaheed-e-Millat Special Education Centre" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606353/Organization%20LOGOS/PNG/Shaheed-e-Millat_Special_Education_Centre_f2frk8.png" />
                                </div>
                            </div>
                            <div className="sub-org-detailed-class">
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Special-Needs/DEWA-ACADEMY")}>
                                    <PictureTiles name="DEWA Academy" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606353/Organization%20LOGOS/PNG/Dewa_ayduqf.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Special-Needs/MARKAZ-E-UMEED")}>
                                    <PictureTiles name="Markaz-E-Umeed" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606352/Organization%20LOGOS/PNG/Markaz-e-Umeed_jxkixg.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Special-Needs/QUAID-E-AZAM-RANGERS-SPECIAL-CHILDREN-SCHOOL")}>
                                    <PictureTiles name="Quaid-e-Azam Rangers Special Children School (QRSCS)" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606354/Organization%20LOGOS/PNG/Quaid-e-Azan_Rangers_Special_Children_School_av0nqz.png" />
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

export default SpecialNeeds