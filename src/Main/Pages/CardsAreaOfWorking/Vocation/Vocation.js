import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import PictureTiles from "../../../Components/PictureTiles/PictureTiles";
import "./Vocation.css"
import {
    Link,
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




const { Content } = Layout;


const Vocation = (props) => {
    let history = useHistory()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0)
    })
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
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
                                        <Link to={`/Vocation`}>
                                            Vocation
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="Vocation">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">V</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">C</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">N</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Vocation :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Anyone who lives in the country will know very well that often one is hard pressed to find
                                        good technicians, electricians, builders, plumbers, foremen, mechanics, salespeople and all
                                        sorts of industrial workers. Every developing country has a growing unemployment problem,
                                        and yet has a severe shortage of skilled manpower.
                                        </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">Some institutes and organizations for vocational training and education in Karachi are:</h2>
                                    <div className="pakistanBoldPara vocation-org-detailed-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Vocation/THE-HUNAR-FOUNDATION")}>
                                                <PictureTiles name="Hunar Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606371/Organization%20LOGOS/PNG/The_Hunar_Foundation_wyb3ts.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Vocation/PAKISTAN-INSTITUTE-OF-LEARNING-AND-LIVING")}>
                                                <PictureTiles name="Pakistan Institute of Learning and Living" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606371/Organization%20LOGOS/PNG/The_Hunar_Foundation_wyb3ts.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150">
                                            <PictureTiles name="ZVMG Rangoonwala Trust" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606370/Organization%20LOGOS/PNG/ZVMG_Rangoonwala_iwdmfm.png" />
                                            </div>
                                        </div>
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Vocation/PAKISTAN-SOCIETY-OF-TRAINING-AND-DEVELOPMENT")}>
                                                <PictureTiles name="Pakistan Society for Training and Dev" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606372/Organization%20LOGOS/PNG/Pakistan_Society_for_Training_and_Development_mier4z.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" >

                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" >
                                            </div>
                                        </div>
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Vocation/ZVMG-RANGOONWALA-TRUST")}>
                                                
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" >

                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
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

export default Vocation