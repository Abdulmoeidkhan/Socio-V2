import React, { useEffect, useState } from 'react';
import { Card, Skeleton } from 'antd';
import 'antd/dist/antd.css';
import "./ArticlesAndBlogsCards.css"
import firebase from "../../GlobalEnvironment/firebaseConfig"





const ArticlesAndBlogsCards = () => {
    const [content, setContent] = useState()


    useEffect(() => {
        firebase.getContent().then(val => {
            setContent(val)
        }).catch(function (error) {
            console.log(error.message); 
        }
        )
        return ()=>null
    }, [])

    return (
        <div className="site-card-wrapper">
            {content ?
                <div className="specialaboutDiv">
                    <Card title="Articles" bordered={true}>
                        {content.article}
                    </Card>
                    <Card title="Organizational News" bordered={true}>
                        {content.news}
                    </Card>
                    
                </div>
                :
                <Skeleton active />
            }
        </div>
    )
}


export default ArticlesAndBlogsCards