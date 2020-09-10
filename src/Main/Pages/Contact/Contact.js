import React from 'react';
import { GuruContextChanger } from "../../GlobalEnvironment/contextInit"
import { Layout } from 'antd';

// const { Content, } = Layout;

const ContactUs = (props) => {
    return (
        <GuruContextChanger.Consumer>
            {guruState => <>
                {
                   ()=> guruState.guruDispatch({ type: "change", payload: "Contact"})
                }
                <Layout>

                </Layout>
            </>}
        </GuruContextChanger.Consumer>
    )
}

export default ContactUs