import React from 'react';
import { GuruContextChanger } from "../../GlobalEnvironment/contextInit"
import { Layout } from 'antd';


// const { Content, } = Layout;

const Blogs = (props) => {
    return (
        <GuruContextChanger.Consumer>
            {guruState => <>
                {
                   ()=> guruState.guruDispatch({ type: "change", payload: "Blogs" })
                }
                <Layout>

                </Layout>
            </>}
        </GuruContextChanger.Consumer>
    )
}

export default Blogs