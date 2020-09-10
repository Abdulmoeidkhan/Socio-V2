import React from 'react';
import { Layout, Table } from 'antd';
import { ThemeContext, GuruContextChanger } from "../../GlobalEnvironment/contextInit";
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import "./PricingPlans.css"


const { Content } = Layout;

let data = [
    {
        Cost: "800-1000",
        Plans: "Platinum",
        RegistrationFees: "100 (No registrationfees in case of another intake) ",
        Session: "Home-based",
        Timing: "Self-paced",
        Method: "Case work",
        Followup: "Mandatory",
        key: "1"
    },
    {
        Cost: "400-500",
        Plans: "Gold",
        RegistrationFees: "100",
        Session: "Online Sessions (Over Video Call)",
        Timing: "Weekdays (10am-7pm)",
        Method: "Case work and Group session",
        Followup: "Mandatory",
        key: "2"
    },
    {
        Cost: "150-300",
        Plans: "Silver",
        RegistrationFees: "100",
        Session: "Online sessions (Over call)",
        Timing: "Weekdays (12pm-5pm)",
        Method: "Group Session",
        Followup: "Mandatory",
        key: "3"
    },
    {
        Cost: "150",
        Plans: "Referrals",
        RegistrationFees: "-",
        Session: "Online sessions (Over call)",
        Timing: "Weekdays (12pm-5pm)",
        Method: "Single Session",
        Followup: "Mandatory",
        key: "4"
    },
    {
        Cost: "200",
        Plans: "Special Days (International Social Days)",
        RegistrationFees: "-",
        Session: "Online sessions (Over call)",
        Timing: "Weekdays (12pm-5pm)",
        Method: "As per need",
        Followup: "Mandatory",
        key: "5"
    }
]

let filterData = []

data.map((item, i) => { filterData.push({ text: item.Plans, value: item.Plans }) })
const columns = [
    {
        title: 'Plans',
        dataIndex: 'Plans',
        key: 'Plans',
        width: "175px",
        minWidth: "175px",
        fixed: 'left',
        filters: filterData,
        onFilter: (value, record) => record.Plans.indexOf(value) === 0
    },
    {
        title: 'Cost',
        dataIndex: 'Cost',
        key: 'Cost',
        width: "175px",
        minWidth: "175px",
    },
    {
        title: 'RegistrationFees',
        dataIndex: 'RegistrationFees',
        key: 'RegistrationFees',
        width: "175px",
        minWidth: "175px",
    },
    {
        title: 'Session',
        dataIndex: 'Session',
        key: 'Session',
        width: "175px",
        minWidth: "175px",
    },
    {
        title: 'Timing',
        dataIndex: 'Timing',
        key: 'Timing',
        width: "175px",
        minWidth: "175px",
    },
    {
        title: 'Method',
        dataIndex: 'Method',
        key: 'Method',
        width: "175px",
        minWidth: "175px",
    },
    {
        title: 'Followup',
        dataIndex: 'Followup',
        key: 'Followup',
        width: "175px",
        minWidth: "175px",
    }
];
const PricingPlans = (props) => {
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <GuruContextChanger.Consumer>
                        {guruState => <>
                            {
                               ()=> guruState.guruDispatch({ type: "change", payload: "PricingPlans" })
                            }
                            <style>{
                                `
                            .ant-table-header table{
                                visibility: visible !important;
                            }
                            .ant-table-thead tr th{
                                 width:175px !important;
                            }
                        `
                            }</style>
                            <Layout>
                                <NavBar />
                                <Content className="content-container-class area-of-working-class">
                                    <section className="one-columns-grid">
                                        <div className="faq-class">
                                            <div className="spacing-class" />
                                            <h2 className="content-head content-head-faq">Pricing & Plans</h2>
                                            <div className="faq-class">
                                                <Table
                                                    columns={columns}
                                                    dataSource={data}
                                                    bordered
                                                    size="middle"
                                                    scroll={{ x: "20%", y: 680 }}
                                                />
                                            </div>
                                        </div>
                                    </section>
                                </Content>
                                <MyFooter />
                            </Layout>
                        </>}
                    </GuruContextChanger.Consumer>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default PricingPlans

