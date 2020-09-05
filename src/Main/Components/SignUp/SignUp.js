import React, { useState } from "react"
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import "./SignUp.css"


const { Link } = Typography



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const SignUp = (props) => {
    const [signUp, setSignUp] = useState(true)
    const [passReset, setPassReset] = useState(false)
    const [processing,setProcessing]=useState(false)
    const onFinishFailed = errorInfo => {
        message.error(errorInfo);
    };
    return (<>
        {signUp == true &&
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={props.signIn}
                onFinishFailed={onFinishFailed}
                className="signUpForm"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
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
                <Form.Item>
                    <Link href="#" onClick={() => setSignUp(!signUp)} className="cursorClass">
                        {signUp ? `Already Registered With Us ???` : `Not Yet Registered With Us ???`}
                    </Link>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" disabled={processing?true:false}>
                        Submit
                </Button>
                </Form.Item>
            </Form>}
        {signUp == false && passReset==false && <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={props.logIn}
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
            <Form.Item>
                <Link href="#" onClick={() => setPassReset(!passReset)} className="cursorClass">
                    {!passReset ? `Forget Password ??` : `Remember ??`}
                </Link>
                <br/>
                <Link href="#" onClick={() => setSignUp(!signUp)} className="cursorClass">
                    {!signUp ? `Not Yet Registered With Us ???` : `Already Registered With Us ???`}
                </Link>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit"  Disabled={processing?true:false}>
                    Submit
                </Button>
            </Form.Item>
        </Form>}
        {passReset == true &&
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={props.passReseting}
                onFinishFailed={onFinishFailed}
                className="passResetForm"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email !' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Link href="#" onClick={() => setPassReset(!passReset)} className="cursorClass">
                        {!passReset ? `Forget Password ??` : `Remember ??`}
                    </Link>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit"  Disabled={processing?true:false}>
                        Submit
                </Button>
                </Form.Item>
            </Form>}
    </>
    );
};

export default SignUp