import React from 'react';
import { GuruContextChanger } from "../../GlobalEnvironment/contextInit"
import { Layout } from 'antd';


// const { Content } = Layout;

const Services = (props) => {
    return (
        <GuruContextChanger.Consumer>
            {guruState => <>
                {
                  ()=>  guruState.guruDispatch({ type: "change", payload: "Services"})
                }
                <Layout>

                </Layout>
            </>}
        </GuruContextChanger.Consumer>
    )
}

export default Services