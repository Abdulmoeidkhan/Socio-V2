import React, { useEffect, useState } from 'react';
import { Layout, Collapse, Skeleton, message } from 'antd';
import { GuruContextChanger } from "../../GlobalEnvironment/contextInit";
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import firebase from "../../GlobalEnvironment/firebaseConfig";
import "./FAQ.css"


const { Content } = Layout;
const { Panel } = Collapse;

const FAQ = (props) => {
    let [faqData, setFaqData] = useState("")
    let myArr = [
        "Children",
        "GeneralHealth",
        "Education",
        "MentalHealth",
        "Community",
        "DrugRehabiliation",
        "Vocation",
        "Women",
        "SpecialNeeds",
        "SeniorCitizen",
        "Others",
    ]

    async function fetchFaq() {
        try {
            firebase.getFAQ().then(async (val) => {
                let arr = [];
                let dataObj = {
                    Children: [],
                    GeneralHealth: [],
                    Education: [],
                    MentalHealth: [],
                    Community: [],
                    DrugRehabiliation: [],
                    Vocation: [],
                    Women: [],
                    SpecialNeeds: [],
                    SeniorCitizen: [],
                    Others: [],
                };
                const keyName = Object.keys(val);
                const keyValues = Object.values(val);
                let func = () => {
                    keyName.map((val, i) => {
                        let obj = {
                            name: val,
                            values: keyValues[i]
                        };
                        arr.push(obj)
                    })
                    arr.map((val, i) => {
                        if (val.values.FAQCategory === "Children") {
                            dataObj.Children.push(val)
                        }
                        else if (val.values.FAQCategory === "General Health") {
                            dataObj.GeneralHealth = [...val]
                        }
                        else if (val.values.FAQCategory === "Education") {
                            dataObj.Education = [...val]
                        }
                        else if (val.values.FAQCategory === "Mental Health") {
                            dataObj.MentalHealth = [...val]
                        }
                        else if (val.values.FAQCategory === "Community") {
                            dataObj.Community = [...val]
                        }
                        else if (val.values.FAQCategory === "Drug Rehabiliation") {
                            dataObj.DrugRehabiliation = [...val]
                        }
                        else if (val.values.FAQCategory === "Vocation") {
                            dataObj.Vocation = [...val]
                        }
                        else if (val.values.FAQCategory === "Women") {
                            dataObj.Women = [...val]
                        }
                        else if (val.values.FAQCategory === "Special Needs") {
                            dataObj.SpecialNeeds = [...val]
                        }
                        else if (val.values.FAQCategory === "Senior Citizen") {
                            dataObj.SeniorCitizen = [...val]
                        }
                        else if (val.values.FAQCategory === "Others") {
                            dataObj.Others = [...val]
                        }

                    })
                }
                await func()
                setFaqData(dataObj)
            }
            )
        }
        catch (e) {
            message.error(e)
        }

    }
    useEffect(() => {
        fetchFaq()
        return () => null
    }, [])
    return (
        <>
            <GuruContextChanger.Consumer>
            {guruState => <>
                {
                   ()=> guruState.guruDispatch({ type: "change", payload: "FAQ" })
                }
                    <Layout>
                        <NavBar />
                        <Content className="content-container-class area-of-working-class">
                            <section className="one-columns-grid">
                                <div className="faq-class">
                                    <div className="spacing-class" />
                                    <h2 className="content-head content-head-faq">Frequently Asked Questions (FAQ's)</h2>
                                    <div className="faq-class">
                                        {faqData ?
                                            <Collapse defaultActiveKey={['1']}>
                                                {faqData && myArr.map((data, i) =>
                                                    faqData[data].length > 0 && <Panel header={data} key={i + 1}>
                                                        <Collapse defaultActiveKey={['i1']}>
                                                            {
                                                                faqData[data].map((data2, i) =>
                                                                    <Panel header={data2.values.FAQues} key={`i${i + 1}`}>
                                                                        <p>{data2.values.FAQAnswer}</p>
                                                                    </Panel>
                                                                )
                                                            }
                                                        </Collapse>
                                                    </Panel>
                                                )
                                                }
                                            </Collapse>
                                            :
                                            <>
                                                <Skeleton active paragraph={{ rows: 4 }} />
                                                <Skeleton active paragraph={{ rows: 4 }} />
                                                <Skeleton active paragraph={{ rows: 4 }} />
                                                <Skeleton active paragraph={{ rows: 4 }} />
                                            </>}
                                    </div>
                                </div>
                            </section>
                        </Content>
                        <MyFooter />
                    </Layout>
                    </>}
        </GuruContextChanger.Consumer>
        </>
    )
}

export default FAQ

