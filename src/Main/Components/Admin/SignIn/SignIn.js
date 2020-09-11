import React, { useState, useEffect } from "react"
import { Form, Input, Button, Checkbox, message } from 'antd';
import firebase from "../../../GlobalEnvironment/firebaseConfig";
import { useHistory } from "react-router-dom";
import "./SignIn.css"



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};



const AdminSignIn = () => {
    const [isAdminSignIn, setIsAdminSignIn] = useState(false)
    useEffect(
        function () {
            firebase.currenAdminUser().then((resp) => {
                setIsAdminSignIn(resp.flag)
            })
        }, [])
    let history = useHistory()


    const onFinishFailed = errorInfo => {
        errorInfo = errorInfo.errorFields
        errorInfo.map((val, i) => {
            message.error(val.errors[0]);
        })
    };

    async function adminLogin(values) {
        await firebase.adminLogin(values.email, values.password).then(() => {
            message.success('You Have Sign In Successfully As Admin');
        })
            .catch(function (error) {
                alert(error.message);
            })
        setIsAdminSignIn(true)
    }


    return (
        <span className="admin-signin">
            <h2 className="content-head">Admin SignIn</h2>
            {isAdminSignIn
                ?
                history.push("/Admin/DashBoard")
                :
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={adminLogin}
                    onFinishFailed={onFinishFailed}
                    className="logInForm"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email !' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" >
                            Submit
                </Button>
                    </Form.Item>
                </Form>
            }
        </span>
    );
};

export default AdminSignIn