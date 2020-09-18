import React, { useEffect } from 'react';
import { Breadcrumb, Layout, Descriptions } from 'antd';
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import 'antd/dist/antd.css';
import "./NGOsPages.css"
import { detailedData } from "../../GlobalEnvironment/contentRawData"
import {
    Link,
} from "react-router-dom";



const { Content } = Layout

const NGOsPage = (props) => {
    let ngoItem = props.item
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                            <Link to={`/AreaOfWorking/${ngoItem.parent}`}>
                                {ngoItem.parent}
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={`/${ngoItem.name}`}>
                                {ngoItem.name}
                            </Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Descriptions title={ngoItem.name} bordered className="my-description-class">
                        <Descriptions.Item label="Organisation" span={3}>{detailedData[ngoItem.name].Organization}</Descriptions.Item>
                        <Descriptions.Item label="Operating Area" span={3}>{detailedData[ngoItem.name].OperatingArea}</Descriptions.Item>
                        <Descriptions.Item label="History" span={3}>{detailedData[ngoItem.name].History}</Descriptions.Item>
                        <Descriptions.Item label="CoreFunctions" span={3}>{detailedData[ngoItem.name].CoreFunctions}</Descriptions.Item>
                        <Descriptions.Item label="Credibility" span={3}>{detailedData[ngoItem.name].Credibility}</Descriptions.Item>
                        <Descriptions.Item label="Programs" span={3}>{detailedData[ngoItem.name].Programs}</Descriptions.Item>
                        <Descriptions.Item label="Sustainability" span={3}>{detailedData[ngoItem.name].Sustainability}</Descriptions.Item>
                        <Descriptions.Item label="CostOfServices" span={3}>{detailedData[ngoItem.name].CostofServices}</Descriptions.Item>
                        <Descriptions.Item label="Analysis" span={3}>{detailedData[ngoItem.name].Analysis}</Descriptions.Item>
                        <Descriptions.Item label="Referencelink / Website" span={3}><a className="underlineClass" target="_blank" href={detailedData[ngoItem.name].ReferencelinkWebsite}>{detailedData[ngoItem.name].ReferencelinkWebsite}</a></Descriptions.Item>
                    </Descriptions>
                </div>
            </Content>
            <MyFooter />
        </Layout>
    )
}

export default NGOsPage