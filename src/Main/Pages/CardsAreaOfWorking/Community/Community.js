import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import PictureTiles from "../../../Components/PictureTiles/PictureTiles";
import "./Community.css"
import {
    Link,
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




const { Content } = Layout;


const Community = (props) => {
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
                            <Link to={`/Community`}>
                                Community
                                        </Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <section className="detail-territory" id="Community">
                        <h2 className="pakistanPageHeading">
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">C</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">O</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">M</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">M</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">U</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">N</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">I</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">T</span>
                            <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">Y</span>
                        </h2>
                        <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Community :-</h2>
                        <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                            Community is the third collective stage of society after an individual and a group, a well-
                            functioning community is the basis of an efficient society. The organizations listed in this
                            category are trying to aid the society on a community level. Each of these organizations help
                            a different fragment of society which completes the bigger picture.
                                        </p>
                        <div className="pakistanBoldPara community-org-detailed-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                            <div className="sub-org-detailed-class ">
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Community/AMAN-FOUNDATION")}>
                                    <PictureTiles name="Aman Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606188/Organization%20LOGOS/PNG/Aman_umuoig.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Community/CHHIPA-FOUNDATION")}>
                                    <PictureTiles name="Chhipa Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606188/Organization%20LOGOS/PNG/Chhipa_hnyalo.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="450" onClick={() => history.push("/AreaOfWorking/Community/FIX-IT")}>
                                    <PictureTiles name="Fix It" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606188/Organization%20LOGOS/PNG/Fixit_dvk5ae.png" />
                                </div>
                            </div>
                            <div className="sub-org-detailed-class">
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="550" onClick={() => history.push("/AreaOfWorking/Community/JDC")}>
                                    <PictureTiles name="JDC" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606194/Organization%20LOGOS/PNG/JDC_rp5snu.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="650" onClick={() => history.push("/AreaOfWorking/Community/LYARIANZ-YOUTH-DEVELOPMENT-PROGRAM")}>
                                    <PictureTiles name="Lyarianz Youth Development Program" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606194/Organization%20LOGOS/PNG/Layarianz_Youth_Dev_Association_znb7ep.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="750" onClick={() => history.push("/AreaOfWorking/Community/ROBIN-HOOD-ARMY")}>
                                    <PictureTiles name="Robin Hood Army" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606188/Organization%20LOGOS/PNG/Robin_Hood_Army_ymukjo.png" />
                                </div>
                            </div>
                            <div className="sub-org-detailed-class">
                                
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Community/RLCC")}>
                                    <PictureTiles name="RLCC" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606189/Organization%20LOGOS/PNG/RLCC_yf35pg.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="850" onClick={() => history.push("/AreaOfWorking/Community/SAYLANI-WELFARE-TRUST")}>
                                    <PictureTiles name="Saylani Welfare Trust" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606191/Organization%20LOGOS/PNG/Saylani_mxpqtt.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="950" onClick={() => history.push("/AreaOfWorking/Community/ORANGI-PILOT-PROJECT")}>
                                    <PictureTiles name="ORANGI PILOT PROJECT (OPP)" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606189/Organization%20LOGOS/PNG/OPP_wsd50j.png" />
                                </div>
                            </div>
                            <div className="sub-org-detailed-class">
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1050" onClick={() => history.push("/AreaOfWorking/Community/SHAHID-AFRIDI-FOUNDATION")}>
                                    <PictureTiles name="Shahid Afridi Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606189/Organization%20LOGOS/PNG/Shahid_Afridi_xdtzs1.png" />
                                </div>
                                <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1150" onClick={() => history.push("/AreaOfWorking/Community/SOFIA-KHANA-GHAR")}>
                                    <PictureTiles name="Sofia Khana Ghar" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606190/Organization%20LOGOS/PNG/Sofia_Khana_Ghar_s2isb9.png" />
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
    )
}

export default Community