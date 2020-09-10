import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { GuruContextChanger } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import PictureTiles from "../../../Components/PictureTiles/PictureTiles";
import {
    Link,
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Others.css"




const { Content } = Layout;


const Others = (props) => {
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
                        guruState.guruDispatch({ type: "change", payload: "Others" })
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
                                        <Link to={`/Others`}>
                                            Others
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="Others">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">H</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">R</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">S</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Others :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Accompanying all these major categories which are stated above, there are some other
                                        domains too which require assistance in a person’s social life i.e. advocacy, basic human
                                        rights, protection and much more, along with the preservation of nature. This category
                                        accommodates all those organizations (profit/non-profit) which are working to help the
                                        individuals in more than one aspect of their life as well as the environment.
                                        </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100">Such organizations located in Karachi are:</h2>
                                    <div className="pakistanBoldPara others-org-detailed-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <div className="sub-org-detailed-class ">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Others/ADOPT-A-PET")}>
                                                <PictureTiles name="Adopt a Pet" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606316/Organization%20LOGOS/PNG/Adopt_A_Pet_zstpkd.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Others/ALAMGIR-WELFARE-TRUST")}>
                                                <PictureTiles name="Alamgir Welfare Trust" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606316/Organization%20LOGOS/PNG/Alamgir_Welfare_Trust_gs6mmo.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Others/HELPING-HANDS-TRUST")}>
                                                <PictureTiles name="Helping Hands Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606315/Organization%20LOGOS/PNG/Helping_Hands_Trust_r4pde7.png" />
                                            </div>
                                        </div>
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Others/LAWYERS-FOR-HUMAN-RIGHTS-AND-LEGAL-AID")}>
                                                <PictureTiles name="Lawyers for human Rights and Legal Aid" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606317/Organization%20LOGOS/PNG/Lawyers_for_human_Rights_and_Legal_Aid_yjrega.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Others/LEGAL-RIGHTS-FORUM")}>
                                                <PictureTiles name="Legal Rights Forum" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606317/Organization%20LOGOS/PNG/Legal_Rights_Forum_zgvxdq.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Others/PAKISTAN-LAWYERS-FOUNDATION")}>
                                                <PictureTiles name="Pakistan Lawyers Foundations" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606317/Organization%20LOGOS/PNG/Pakistani_Lawyers_Foundation_dpmtk5.png" />
                                            </div>
                                        </div>
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Others/SARIM-BURNEY-WELFARE-TRUST")}>
                                                <PictureTiles name="Sarim Burney Welfare Trust" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606316/Organization%20LOGOS/PNG/Sarim_Burney_vv1ks3.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Others/WORLDWIDE-FUND-OF-NATURE")}>
                                                <PictureTiles name="WWF" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606317/Organization%20LOGOS/PNG/WWF_o3vpxa.png" />
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

export default Others