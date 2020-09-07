import React, { useState, useEffect } from 'react';
import { Card, Descriptions, Skeleton, Empty, Button,message ,Form,Input,Select } from 'antd';
import { Collapse } from 'react-collapse';
import "./DashBoardFormList.css"
import firebase from "../../../GlobalEnvironment/firebaseConfig"
// import { useHistory } from "react-router-dom";

const Data = (props) => {
    const [isForm1, setIsForm1] = useState(false)
    const [isForm2, setIsForm2] = useState(false)
    const [isForm3, setIsForm3] = useState(false)
    const [form2] = Form.useForm();
    const [form3] = Form.useForm();


 
    const onFinish2 = (values,old) => {
        firebase.form2Submit(values.user).then(value => {
            return (message.success(value))
        }
        )
        props.setFormSubmitted(true)
        form2.resetFields();
        console.log(values,old)
    };
    const onFinish3 = (values,old) => {
        firebase.form3Submit(values.user).then(value => {
            return (message.success(values))
        }
        )
        props.setFormSubmitted(true)
        form3.resetFields();
    };
    const validateMessages = {
        required: '${label} is required!',
    };

    return (
        <div className="adminSubDashCardClass">
            <Card key={props.i} >
                {`Name:${props.item.value.name}`}
                <br />
                {`Email:${props.item.value.email}`}
                <br />
                <Button className="form-button-class-admin" onClick={() => { setIsForm3(!isForm3) }}>Form 3</Button>
                <Button className="form-button-class-admin" onClick={() => { setIsForm2(!isForm2) }}>Form 2</Button>
                <Button className="form-button-class-admin" onClick={() => { setIsForm1(!isForm1) }}>Form 1</Button>
            </Card>
            <Collapse isOpened={isForm1} key={props.i + 1}>
                {
                    props.item.value.form ?
                        <>
                            <Descriptions bordered className="adminDashApplicationForm" key={props.i}>
                                <Descriptions.Item label="Name" span={3} key={props.i + 2}>{props.item.value.name}</Descriptions.Item>
                                <Descriptions.Item label="Email" span={3} key={props.i + 3}>{props.item.value.email}</Descriptions.Item>
                                <Descriptions.Item label="Contact Number" span={3} key={props.i + 4}>{props.item.value.form.ContactNumber}</Descriptions.Item>
                                <Descriptions.Item label="CNIC" span={3} key={props.i + 5}>{props.item.value.form.CNIC}</Descriptions.Item>
                                <Descriptions.Item label="Gender" span={3} key={props.i + 6}>{props.item.value.form.Gender}</Descriptions.Item>
                                <Descriptions.Item label="Date Of Birth" span={3} key={props.i + 7}>{props.item.value.form.DateOfBirth}</Descriptions.Item>
                                <Descriptions.Item label="Address" span={3} key={props.i + 8}>{props.item.value.form.Address}</Descriptions.Item>
                                <Descriptions.Item label="Remarks" span={3} key={props.i + 9}>{props.item.value.form.Remarks}</Descriptions.Item>
                            </Descriptions>
                            <br />
                        </> :
                        <Empty key={props.i + 10} />
                }
            </Collapse>
            <Collapse isOpened={isForm2} key={props.i + 11}>
                {
                    props.item.value.form2 ?
                        <>
                            <Descriptions bordered className="adminDashApplicationForm" key={props.i + 12}>
                                <Descriptions.Item label="Occupation" span={3} key={props.i + 13} >{props.item.value.form2.Occupation}</Descriptions.Item>
                                <Descriptions.Item label="Complete Education" span={3} key={props.i + 14}>{props.item.value.form2.CompleteEducation}</Descriptions.Item>
                                <Descriptions.Item label="Current Marital Status" span={3} key={props.i + 15}>{props.item.value.form2.CurrentMaritalStatus}</Descriptions.Item>
                                <Descriptions.Item label="Years Married/Separated/Divorced/Widowed" span={3} key={props.i + 16}>{props.item.value.form2.YearMaritalStatus}</Descriptions.Item>
                                <Descriptions.Item label="Name of Spouse/Partner" span={3} key={props.i + 17}>{props.item.value.form2.NameOfPartner}</Descriptions.Item>
                                <Descriptions.Item label="Age of Spouse/Partner" span={3} key={props.i + 18}>{props.item.value.form2.AgeOfPartner}</Descriptions.Item>
                                <Descriptions.Item label="Occupation of Spouse/Partner" span={3} key={props.i + 19}>{props.item.value.form2.OccupationOfPartner}</Descriptions.Item>
                                <Descriptions.Item label="My relationship is" span={3} key={props.i + 20}>{props.item.value.form2.RelationStatus}</Descriptions.Item>
                                <Descriptions.Item label="Have you been previously married" span={3} key={props.i + 21}>{props.item.value.form2.PreviouslyMarried}</Descriptions.Item>
                                <Descriptions.Item label="Number of Children" span={3} key={props.i + 22}>{props.item.value.form2.Childrens}</Descriptions.Item>
                                <Descriptions.Item label="Are they living with you" span={3} key={props.i + 23}>{props.item.value.form2.FamilyStatus}</Descriptions.Item>
                                <Descriptions.Item label="Are your parents still living" span={3} key={props.i + 24}>{props.item.value.form2.Parents}</Descriptions.Item>
                                <Descriptions.Item label="List any present health problems/ major surgeries/injuries" span={3} key={props.i + 25}>{props.item.value.form2.Health}</Descriptions.Item>
                                <Descriptions.Item label="Reason" span={3} key={props.i + 26}>{props.item.value.form2.Reason}</Descriptions.Item>
                                <Descriptions.Item label="Are you taking any medications now" span={3} key={props.i + 27}>{props.item.value.form2.Consultancy}</Descriptions.Item>
                                <Descriptions.Item label="Reason for taking medication" span={3} key={props.i + 28}>{props.item.value.form2.ReasonOfConsultancy}</Descriptions.Item>
                                <Descriptions.Item label="List any significant crisis, losses or stressors" span={3} key={props.i + 29}>{props.item.value.form2.Crises}</Descriptions.Item>
                                <Descriptions.Item label="Have you ever had a ‘nervous breakdown’ or other significant emotional problem" span={3} key={props.i + 30}>{props.item.value.form2.EmotionalStatus}</Descriptions.Item>
                                <Descriptions.Item label="Have you ever received treatment or counselling for your personal or marital problems" span={3} key={props.i + 31}>{props.item.value.form2.MartialProblems}</Descriptions.Item>
                                <Descriptions.Item label="What issues were treated" span={3} key={props.i + 32}>{props.item.value.form2.Issues}</Descriptions.Item>
                            </Descriptions>
                            <br />
                        </> :
                        <Form
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                            name="nest-messages"
                            onFinish={(e)=>onFinish2(e,props.item.value)}
                            validateMessages={validateMessages}
                            form={form2}
                        >
                            <Form.Item
                                label={`Occupation`}
                                name={['user', 'Occupation']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Occupation" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'CompleteEducation']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Complete Education" />
                            </Form.Item>
                            <Form.Item
                                label="Current Marital Status"
                                name={['user', 'CurrentMaritalStatus']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select>
                                    <Select.Option value="Single">Single</Select.Option>
                                    <Select.Option value="Engaged">Engaged</Select.Option>
                                    <Select.Option value="Married">Married</Select.Option>
                                    <Select.Option value="Separated">Separated</Select.Option>
                                    <Select.Option value="Divorced">Divorced</Select.Option>
                                    <Select.Option value="Widowed">Widowed</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'YearMaritalStatus']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Years Married/Separated/Divorced/Widowed" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'NameOfPartner']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Name of Spouse/Partner" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'AgeOfPartner']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Age of Spouse/Partner" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'OccupationOfPartner']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input.TextArea placeholder="Occupation of Spouse/Partner" />
                            </Form.Item>
                            <Form.Item
                                label="My relationship is"
                                name={['user', 'RelationStatus']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select>
                                    <Select.Option value="Very Happy">Very Happy</Select.Option>
                                    <Select.Option value="Happy">Happy</Select.Option>
                                    <Select.Option value="Average">Average</Select.Option>
                                    <Select.Option value="Separated">Separated</Select.Option>
                                    <Select.Option value="Unhappy">Unhappy</Select.Option>
                                    <Select.Option value="Very Unhappy">Very Unhappy</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'PreviouslyMarried']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Have you been previously married" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'Childrens']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Number of Children" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'FamilyStatus']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Childrens living with you" />
                            </Form.Item>
                            <Form.Item
                                label="Parents still living"
                                name={['user', 'Parents']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select>
                                    <Select.Option value="Both">Both</Select.Option>
                                    <Select.Option value="Mother">Mother</Select.Option>
                                    <Select.Option value="Father">Father</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'Health']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="List any present health problems/ major surgeries/injuries" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'Reason']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Reason" />
                            </Form.Item>
                            <Form.Item
                                label="Taking medications now"
                                name={['user', 'Consultancy']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select>
                                    <Select.Option value="Yes">Yes</Select.Option>
                                    <Select.Option value="No">No</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'ReasonOfConsultancy']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Reason for taking medication" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'Crises  ']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="List any significant crisis, losses or stressors" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'EmotionalStatus']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Have you ever had a ‘nervous breakdown’ or other significant emotional problem" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'MartialProblems']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Have you ever received treatment or counselling for your personal or marital problems" />
                            </Form.Item>
                            <Form.Item
                                label=" "
                                name={['user', 'Issues']}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Have you ever received treatment or counselling for your personal or marital problems" />
                            </Form.Item>
                            <Form.Item label="Submit">
                                <Button htmlType="submit" type="primary">Submit</Button>
                            </Form.Item>
                        </Form>
                }
            </Collapse>
            <Collapse isOpened={isForm3} key={props.i + 34}>
                {
                    props.item.value.form3 ?
                        <>
                            <Descriptions bordered className="adminDashApplicationForm" key={props.i + 35}>
                                <Descriptions.Item label="Please tell us why you are seeking counselling / psychotherapy right now" span={3} key={props.i + 36}>{props.item.value.form3.Ques1}</Descriptions.Item>
                                <Descriptions.Item label="Have you been to your GP regarding this issue" span={3} key={props.i + 37}>{props.item.value.form3.Ques2}</Descriptions.Item>
                                <Descriptions.Item label="Have you ever had psychiatric treatment or been prescribed medication for psychological reasons e.g. depression, eating difficulties, alcohol or drug use?  If so, please give details." span={3} key={props.i + 38}>{props.item.value.form3.Ques3}</Descriptions.Item>
                                <Descriptions.Item label="Have you had counselling / psychotherapy before?  If so, describe type, length of time, how long ago" span={3} key={props.i + 39}>{props.item.value.form3.Ques4}</Descriptions.Item>
                                <Descriptions.Item label="What emotional support is available to you" span={3} key={props.i + 40}>{props.item.value.form3.Ques5}</Descriptions.Item>
                                <Descriptions.Item label="What do you like about your life" span={3} key={props.i + 41}>{props.item.value.form3.Ques6}</Descriptions.Item>
                                <Descriptions.Item label="Are there any factors you would like us to consider or take into account when considering your referral to a counsellor i.e. gender, sexual orientation, ethnic origin etc.?" span={3} key={props.i + 42}>{props.item.value.form3.Ques7}</Descriptions.Item>
                                <Descriptions.Item label="State areas / post codes you would be prepared to travel to, to see your therapist. " span={3} key={props.i + 43}>{props.item.value.form3.Ques8}</Descriptions.Item>
                                <Descriptions.Item label="What days and times are you available" span={3} key={props.i + 44}>{props.item.value.form3.Ques9}</Descriptions.Item>
                                <Descriptions.Item label="Is there anything else you would like to tell us which may help to find the right therapist for you" span={3} key={props.i + 45}>{props.item.value.form3.Ques10}</Descriptions.Item>
                                <Descriptions.Item label="How / where did you hear about us" span={3} key={props.i + 46}>{props.item.value.form3.Ques11}</Descriptions.Item>
                            </Descriptions>
                            <br />
                        </> :
                        <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        name="nest-messages"
                        onFinish={(e)=>onFinish3(e,props.item.value)}
                        validateMessages={validateMessages}
                        form={form3}
                    >
                        <Form.Item
                            label=" "
                            name={['user', 'Ques1']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Please tell us why you are seeking counselling / psychotherapy right now" />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques2']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Have you been to your GP regarding this issue?" />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques3']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Have you ever had psychiatric treatment or been prescribed medication for psychological reasons e.g. depression, eating difficulties, alcohol or drug use" />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques4']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Have you had counselling / psychotherapy before?  If so, describe type, length of time, how long ago" />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques5']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="What do you like about your life" />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques6']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="What do you like about your life" />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques7']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Are there any factors you would like us to consider or take into account when considering your referral to a counsellor i.e. gender, sexual orientation, ethnic origin etc  " />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques8']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="State areas / post codes you would be prepared to travel to, to see your therapist." />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques8']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="What days and times are you available" />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques9']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="9.	What days and times are you available" />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques10']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Is there anything else you would like to tell us which may help to find the right therapist for you" />
                        </Form.Item>
                        <Form.Item
                            label=" "
                            name={['user', 'Ques11']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="How / where did you hear about us" />
                        </Form.Item>
                        <Form.Item label="Submit">
                            <Button htmlType="submit" type="primary">Submit</Button>
                        </Form.Item>
                    </Form>
                }
            </Collapse>
        </div>
    )

}

export const AdminDashBoardFormList = () => {
    const [allData, setAllData] = useState("")
    useEffect(() => {
        firebase.getAllData()
            .then((val) => {
                setAllData(val)
            })
        return () => null
    }, [])
    return (
        <div className="adminDashCardClass" key="1">
            {allData ? allData.map((item, i) => {
                return (
                    <Data item={item} i={i} key={`k${i}`} />
                )
            }) :
                <>
                    <Skeleton active key="a1" />
                    <Skeleton active key="a2" />
                    <Skeleton active key="a3" />
                    <Skeleton active key="a4" />
                </>
            }
        </div>
    )
}