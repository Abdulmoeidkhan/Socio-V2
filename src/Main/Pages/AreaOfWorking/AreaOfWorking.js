import React from 'react';
import { Layout, Card } from 'antd';
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";
import "./AreaOfWorking.css"


const { Content } = Layout;

const AreaOfWorking = (props) => {
    let history = useHistory()
    return (
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
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/General-Health")}>
                            <img className="card-img-class" src={require("../../Assets/GeneralHealth.jpg")} alt={require("../../Assets/GeneralHealth.jpg")} />
                        </Card>
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Education")}>
                            <img className="card-img-class" src={require("../../Assets/Education.jpg")} alt={require("../../Assets/Education.jpg")} />
                        </Card>
                    </div>
                    <div className="three-column-seperation">
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Mental-Health")}>
                            <img className="card-img-class" src={require("../../Assets/MentalHealth.jpg")} alt={require("../../Assets/MentalHealth.jpg")} />
                        </Card>
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Community")}>
                            <img className="card-img-class" src={require("../../Assets/Community.jpg")} alt={require("../../Assets/Community.jpg")} />
                        </Card>
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Drug-Rehabilitation")}>
                            <img className="card-img-class" src={require("../../Assets/DrugRehabilitation.jpg")} alt={require("../../Assets/DrugRehabilitation.jpg")} />
                        </Card>
                    </div>
                    <div className="three-column-seperation">
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Vocation")}>
                            <img className="card-img-class" src={require("../../Assets/Vocation.jpg")} alt={require("../../Assets/Vocation.jpg")} />
                        </Card>
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Women")}>
                            <img className="card-img-class" src={require("../../Assets/Women.jpg")} alt={require("../../Assets/Women.jpg")} />
                        </Card>
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Special-Needs")}>
                            <img className="card-img-class" src={require("../../Assets/SpecialNeeds.jpg")} alt={require("../../Assets/SpecialNeeds.jpg")} />
                        </Card>
                    </div>
                    <div className="three-column-seperation">
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Senior-Citizens")}>
                            <img className="card-img-class" src={require("../../Assets/SeniorCitizens.jpg")} alt={require("../../Assets/SeniorCitizens.jpg")} />
                        </Card>
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Children")}>
                            <img className="card-img-class" src={require("../../Assets/Children.jpg")} alt={require("../../Assets/Children.jpg")} />
                        </Card>
                        <Card bordered={true} className="first-page-card-class" onClick={() => history.push("/AreaOfWorking/Others")}>
                            <img className="card-img-class" src={require("../../Assets/Others.jpg")} alt={require("../../Assets/Others.jpg")} />
                        </Card>
                    </div>
                </section>
            </Content>
            <MyFooter />
        </Layout>
    )
}

export default AreaOfWorking

