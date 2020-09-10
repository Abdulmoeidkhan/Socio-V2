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
import "./Women.css"




const { Content } = Layout;


const Women = (props) => {
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
                      ()=>  guruState.guruDispatch({ type: "change", payload: "Women" })
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
                                        <Link to={`/Women`}>
                                            Women
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="Women">
                                    <h2 className="pakistanPageHeading">
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">W</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">O</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">M</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">E</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">N</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Women :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        How well a society treats its women is one of the strongest indicators of the success and
                                        health of that society. Discrimination against women and girls occurs in many forms through
                                        gender-based violence, economic discrimination, reproductive health inequities, and harmful
                                        traditional practices. Women and girls of all ages have a right to live with dignity, free of
                                        cultural oppression. After all these years of adopting the gender-based agreements our society
                                        still fails to provide equal rights to women. Therefore, to pull off a better and gender free
                                        environment for women there are some renowned organizations operating in Karachi such as:
                                        </p>
                                    <div className="pakistanBoldPara women-org-detailed-class" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Women/AAHUNG-FOUNDATION")}>
                                                <PictureTiles name="Aahung Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606161/Organization%20LOGOS/PNG/Aahung_atcxdw.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100" onClick={() => history.push("/AreaOfWorking/Women/AURAT-FOUNDATION")}>
                                                <PictureTiles name="Aurat Foundation" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606385/Organization%20LOGOS/PNG/Aurat_Foundation_oodrqd.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="150" onClick={() => history.push("/AreaOfWorking/Women/DEPILEX-SMILE-AGAIN-FOUNDATION")}>
                                                <PictureTiles name="Depilex Smile again" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606385/Organization%20LOGOS/PNG/Depilex_Smile_Again_du5r6i.png" />
                                            </div>
                                        </div>
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Women/RA’ANA-LIAQUAT-CRAFSTSMEN-COLONY-(RLCC-WOMEN)")}>
                                                <PictureTiles name="RLCC-Women" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606470/Organization%20LOGOS/PNG/RLCC_ncxufh.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250" onClick={() => history.push("/AreaOfWorking/Women/SHIRKAT-GAH-WOMEN-RESOURCE-CENTRE")}>
                                                <PictureTiles name="Shirkat Gah Women Resource Centre" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606385/Organization%20LOGOS/PNG/Shirkat_Gah_Women_Resource_Centre_kiynof.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="250">
                                                <PictureTiles name="Pakistan Federation of Business and Professional Women Organization." pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606385/Organization%20LOGOS/PNG/Pakistan_Federation_of_Business_and_Professional_Women_Organization_qgy0ln.png" />
                                            </div>
                                        </div>
                                        <div className="sub-org-detailed-class">
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Women/PAKISTAN-FEDERATION-OF-BUSINESS-AND-PROFESSIONAL-WOMEN-ORGANIZATION")}>
                                                <PictureTiles name="Tehreek e Niswa" pictureSrc="https://res.cloudinary.com/tanzeelah/image/upload/v1599606386/Organization%20LOGOS/PNG/Tehrik-e-Niswa_xhrgm9.png" />
                                            </div>
                                            <div data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="350" onClick={() => history.push("/AreaOfWorking/Women/TEHRIK-E-NISWA")}>

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

export default Women