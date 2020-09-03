import React, { useState, createRef } from 'react';
import { Form, message, Input, Button, Card,Popconfirm } from 'antd';
import firebase from "../../../GlobalEnvironment/firebaseConfig"
import "./FAQContent.css"

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

    function confirm(e,dataToBeDelete) {
        firebase.delFAQ(dataToBeDelete.name)
        .then((val)=>{
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
                                onConfirm={(e)=>confirm(e,data)}
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
