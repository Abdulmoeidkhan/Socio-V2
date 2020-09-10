import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { GuruContextChanger } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import PictureTiles from "../../../Components/PictureTiles/PictureTiles";
import MyFooter from "../../../Components/Footer/Footer";
import {
    Link,
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Education.css"




const { Content } = Layout;


const Education = (props) => {
    let history = useHistory()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0)
    })
    return (
        <>
            <GuruContextChanger.Consumer>
                {guruState => <>
                    {
                      ()=>  guruState.guruDispatch({ type: "change", payload: "Education" })
                    }
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
                                        <Link to={`/Education`}>
                                            Education
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="Education">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">D</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">U</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">C</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">N</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Education :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Education is a necessity and right of people in today’s world, unfortunately the educational
                                        statistics and standards in Pakistan are not very promising but these organizations have come
                                        forward to play their parts in the educational development of generations to come!
                                        </p>

                                    <div className="pakistanBoldPara education-org-detailed-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <div className="sub-org-detailed-class ">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Education/APEX-EDUCATION-FORUM")}>
                                                <PictureTiles name="Apex Education Forum" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606239/Organization%20LOGOS/PNG/Apex_Education_sy8t5i.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Education/EDUCATION-TRUST-NASRA-SCHOOL")}>
                                                <PictureTiles name="Education Trust-Nasra School" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606240/Organization%20LOGOS/PNG/Nasra_vzxewe.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Education/PAKISTAN-YOUTH-ORGANIZATION")}>
                                                <PictureTiles name="Pakistani Youth Org" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606241/Organization%20LOGOS/PNG/Pakistani_Youth_Org_lw1orp.png" />
                                            </div>
                                        </div>
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Education/RA’ANA-LIAQUAT-PUBLIC-SCHOOL")}>
                                                <PictureTiles name="Ra’ana Liaquat Public School" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606245/Organization%20LOGOS/PNG/RLCC_i2elj7.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="550" onClick={() => history.push("/AreaOfWorking/Education/THE-CITIZENS-FOUNDATION")}>
                                                <PictureTiles name="The Citizens Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606241/Organization%20LOGOS/PNG/TCF_pph0hv.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="650" onClick={() => history.push("/AreaOfWorking/Education/YOUTH-EXPRESS-PAKISTAN")}>
                                                <PictureTiles name="Youth Express Pakistan" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606241/Organization%20LOGOS/PNG/Youth_Express_Pakistan_iqerva.png" />
                                            </div>
                                        </div>
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="750" onClick={() => history.push("/AreaOfWorking/Education/ZINDAGI-TRUST")}>
                                                <PictureTiles name="Zindagi Trust" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606241/Organization%20LOGOS/PNG/Zindagi_Trust_j8y5k9.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350">

                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350">
                                            </div>
                                        </div>
                                    </div>
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

export default Education