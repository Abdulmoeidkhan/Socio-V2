import React, { useEffect, useState,useRef } from 'react';
import { Card, DatePicker, Skeleton } from 'antd';
import 'antd/dist/antd.css';
import "./DateAndEventCards.css"
import firebase from "../../GlobalEnvironment/firebaseConfig"
import moment from "moment"
import { calenderData } from "../../GlobalEnvironment/contentRawData"


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;


const DateAndEventCards = () => {
    const [dataForDate, setDataForDate] = useState(today)
    const [imgLink, setimgLink] = useState()
    const [content, setContent] = useState()

    


    let j = false

    const dateChanged = (a, b) => {
        setDataForDate(b)
        let c = b.slice(5, 10)
        setimgLink(undefined)
        for (let i = 0; calenderData.length > i; i++) {
            if (calenderData[i].Date == c) {
                setimgLink(calenderData[i].Image)
            }
        }
    }
    useEffect(() => {
        if (!j) {
            j = true
            let c = today.slice(5, 10)
            for (let i = 0; calenderData.length > i; i++) {
                if (calenderData[i].Date == c) {
                    setimgLink(calenderData[i].Image)
                }
            }
        }
        return ()=> null
    },[])

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
                    {/* <Card title="Articles" bordered={true}>
                        {content.article}
                    </Card> */}
                    <Card title="Organizational News" bordered={true}>
                        {content.news}
                    </Card>
                    <Card title="Events" bordered={true}>
                        <DatePicker size="large" bordered={false} showToday={true} defaultValue={moment()} className="widthClass" onChange={(a, b) => { dateChanged(a, b) }} />
                        <div style={{ minWidth: "300px" }}>
                            {imgLink ? <img className="cardImgClass" src={imgLink} /> : <img className="cardImgClass" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1595017293/ezgif.com-video-to-gif_hbdqah.gif"} />}
                        </div>
                    </Card>
                </div>
                :
                <Skeleton active />
            }
        </div>
    )
}


export default DateAndEventCards