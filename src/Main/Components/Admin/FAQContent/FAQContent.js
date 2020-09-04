import React, { useState, createRef } from 'react';
import { Form, message, Input, Button, Card, Popconfirm, Select } from 'antd';
import firebase from "../../../GlobalEnvironment/firebaseConfig"
import "./FAQContent.css"


const { Option } = Select;

const FAQContent = () => {

    let formRef = createRef()
    let [faqData, setFaqData] = useState("")
    const onFinishFailed = errorInfo => {
        errorInfo.errorFields.map((val) => {
            message.error(`${val.name} : ${val.errors}`)
        })
    };

    async function setFAQs(values) {
        firebase.setFAQ(values).then((msg) => {
            message.success(msg)
            formRef.current.resetFields()
        }).catch(function (error) {
            message.error(error.message)
        })
    }
    async function fetchFaq() {
        firebase.getFAQ().then(async (val) => {
            let arr = [];
            let dataObj = {
                GeneralHealth: [],
                Education: [],
                MentalHealth: [],
                Community: [],
                DrugRehabiliation: [],
                Vocation: [],
                Women: [],
                SpecialNeeds: [],
                SeniorCitizen: [],
                Children: [],
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
                    if (val.values.FAQCategory === "General Health") {
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
                    else if (val.values.FAQCategory === "Children") {
                        dataObj.Children.push(val)
                    }
                    else if (val.values.FAQCategory === "Others") {
                        dataObj.Others = [...val]
                    }

                })
            }
            await func()
            setFaqData(arr)
        }
        )

    }

    function confirm(e, dataToBeDelete) {
        firebase.delFAQ(dataToBeDelete)
            .then((val) => {
                message.error(val)
                fetchFaq()
            })
            .catch(function (error) {
                message.info(error.message)
            })

    }

    function cancel(e) {
        message.success('Ignored');
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };


    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };



    return (
        <div className="adminDashCardClass" key="1">
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={setFAQs}
                onFinishFailed={onFinishFailed}
                className="logInForm"
                ref={formRef}
            >
                <Form.Item
                    label="FA Question"
                    name="FAQues"
                    rules={[{ required: true, message: 'Please input your Question !' }]}
                    initialValue=" "
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="FAQ Answer"
                    name="FAQAnswer"
                    rules={[{ required: true, message: 'Please input your Answer!' }]}
                    initialValue=""
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="FAQ Category"
                    name="FAQCategory"
                    rules={[{ required: true, message: 'Please input your Category!' }]}
                >
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select Category"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="General Health">General Health</Option>
                        <Option value="Education">Education</Option>
                        <Option value="Mental Health">Mental Health</Option>
                        <Option value="Community">Community</Option>
                        <Option value="Drug Rehabiliation">Drug Rehabiliation</Option>
                        <Option value="Vocation">Vocation</Option>
                        <Option value="Women">Women</Option>
                        <Option value="Special Needs">Special Needs</Option>
                        <Option value="Senior Citizen">Senior Citizen</Option>
                        <Option value="Children">Children</Option>
                        <Option value="Others">Others</Option>
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" >
                        Submit
                </Button>
                </Form.Item>
            </Form>
            <Button type="primary" onClick={fetchFaq} className="fetch-button">
                Fetch
                </Button>
            <div className="admin-faq-class">
                {
                    faqData && faqData.map((data, i) =>
                        <Card key={i} className="admin-card-class"
                        >
                            <b className="bold-class">{data.values.FAQues}</b>
                            <br />
                            <span className="semi-bold-class">{data.values.FAQAnswer}</span>
                            <br />
                            <Popconfirm
                                title="Are you sure delete this task?"
                                onConfirm={(e) => confirm(e, data)}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                                placement="bottomRight"
                            >
                                <Button type="danger" className="delete-button" href="#">Delete</Button>
                            </Popconfirm>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}
export default FAQContent
