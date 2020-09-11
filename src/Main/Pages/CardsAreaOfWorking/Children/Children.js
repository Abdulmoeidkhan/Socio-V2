import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import PictureTiles from "../../../Components/PictureTiles/PictureTiles";
import "./Children.css"
import {
    Link,
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




const { Content } = Layout;


const Children = (props) => {
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
                        <div className="pakistanBoldPara children-org-detailed-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                            <div className="sub-org-detailed-class ">
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Children/AAHUNG-FOUNDATION")}>
                                    <PictureTiles name="Aahung Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606161/Organization%20LOGOS/PNG/Aahung_atcxdw.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Children/AZAD-FOUNDATION")}>
                                    <PictureTiles name=">Azad Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606161/Organization%20LOGOS/PNG/Azad_Foundation_wax6o2.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Children/EDHI-FOUNDATION")}>
                                    <PictureTiles name="Edhi Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606161/Organization%20LOGOS/PNG/Edhi_dpdqw4.png" />
                                </div>
                            </div>
                            <div className="sub-org-detailed-class">
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Children/KONPAL-CHILD-ABUSE-PREVENTION-SOCIETY")}>
                                    <PictureTiles name="Konpal Child Abuse Prevention" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606161/Organization%20LOGOS/PNG/Konpal_Child_Abuse_Prevention_x9pinz.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="550" onClick={() => history.push("/AreaOfWorking/Community/JDC")}>
                                    <PictureTiles name="Make a WishC" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606161/Organization%20LOGOS/PNG/Make_A_Wish_kcjsjd.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="650" onClick={() => history.push("/AreaOfWorking/Children/SOS-VILLAGE")}>
                                    <PictureTiles name="SOS Village" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606161/Organization%20LOGOS/PNG/SOS_hfqf2l.png" />
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

export default Children