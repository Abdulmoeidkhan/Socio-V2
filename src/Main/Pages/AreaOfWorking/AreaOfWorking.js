import React from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";
import "./AreaOfWorking.css"


const { Content } = Layout;

const AreaOfWorking = (props) => {
    let history = useHistory()
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <Layout>
                        <NavBar />
                        <Content className="content-container-class area-of-working-class">
                            <section className="one-columns-grid">
                                <div className="center-class">
                                    <div className="spacing-class" />
                                    <h2 className="content-head">Area Of Working</h2>
                                    <p className="content-para">Social work itself is a diversified field that aims to aid individuals, groups and communities in all domains of life. Following are the Areas of Working that Socio-Linkage provides services for.</p>
                                </div>
                                <div className="aof-two-column-grid">
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/General-Health")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476857/Area%20Of%20Working/Version%202/General_Health_nmmcpl.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476857/Area%20Of%20Working/Version%202/General_Health_nmmcpl.jpg" />
                                    </Card>
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Education")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476855/Area%20Of%20Working/Version%202/Education_izti5z.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476855/Area%20Of%20Working/Version%202/Education_izti5z.jpg" />
                                    </Card>
                                </div>
                                <div className="three-column-seperation">
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Mental-Health")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476857/Area%20Of%20Working/Version%202/Mental_Health_xy6upa.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476857/Area%20Of%20Working/Version%202/Mental_Health_xy6upa.jpg" />
                                    </Card>
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Community")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476855/Area%20Of%20Working/Version%202/Community_wiuaof.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476855/Area%20Of%20Working/Version%202/Community_wiuaof.jpg"/>
                                    </Card>
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Drug-Rehabilitation")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476856/Area%20Of%20Working/Version%202/Drug_Rehabilitation_pxmre5.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476856/Area%20Of%20Working/Version%202/Drug_Rehabilitation_pxmre5.jpg" />
                                    </Card>
                                </div>
                                <div className="three-column-seperation">
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Vocation")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476859/Area%20Of%20Working/Version%202/Vocation_yflqrc.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476859/Area%20Of%20Working/Version%202/Vocation_yflqrc.jpg" />
                                    </Card>
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Women")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476859/Area%20Of%20Working/Version%202/Women_wsqvvk.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476859/Area%20Of%20Working/Version%202/Women_wsqvvk.jpg" />
                                    </Card>
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Special-Needs")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476858/Area%20Of%20Working/Version%202/Special_Needs_wufhau.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476858/Area%20Of%20Working/Version%202/Special_Needs_wufhau.jpg" />
                                    </Card>
                                </div>
                                <div className="three-column-seperation">
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Senior-Citizens")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476858/Area%20Of%20Working/Version%202/Senior_Citizens_smunoe.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476858/Area%20Of%20Working/Version%202/Senior_Citizens_smunoe.jpg" />
                                    </Card>
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Children")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476856/Area%20Of%20Working/Version%202/Children_ucspml.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476856/Area%20Of%20Working/Version%202/Children_ucspml.jpg" />
                                    </Card>
                                    <Card bordered={true} className="first-page-card-class" onClick={()=> history.push("/AreaOfWorking/Others")}>
                                        <img className="card-img-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1598476859/Area%20Of%20Working/Version%202/Others_lmhfep.jpg" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1598476859/Area%20Of%20Working/Version%202/Others_lmhfep.jpg" />
                                    </Card>
                                </div>
                            </section>
                        </Content>
                        <MyFooter />
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default AreaOfWorking

