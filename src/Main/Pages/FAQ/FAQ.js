import React, { useEffect, useState } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import firebase from "../../GlobalEnvironment/firebaseConfig"
import "./FAQ.css"


const { Content } = Layout;

const FAQ = (props) => {
    let [faqData, setFaqData] = useState("")


    async function fetchFaq() {
        firebase.getFAQ().then(async (val) => {
            let arr = [];
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
            }
            await func()
            setFaqData(arr)
        }
        )

    }
    useEffect(() => {
        fetchFaq()
    }, [])
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <Layout>
                        <NavBar />
                        <Content className="content-container-class area-of-working-class">
                            <section className="one-columns-grid">
                                <div className="faq-class">
                                    <div className="spacing-class" />
                                    <h2 className="content-head content-head-faq">Frequently Asked Questions (FAQs)</h2>
                                    <div className="faq-class">
                                    {
                                        faqData && faqData.map((data, i) =>
                                            <Card key={i} className="admin-card-class">
                                                <b className="bold-class">{data.values.FAQues}</b>
                                                <br />
                                                <span className="semi-bold-class">{data.values.FAQAnswer}</span>
                                                <br />
                                            </Card>
                                        )
                                    }
                                    </div>
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

export default FAQ

