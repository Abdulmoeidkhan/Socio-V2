import React from "react";
import { notification } from "antd"
import { tips } from "../../GlobalEnvironment/contentRawData";
import "./SideGuru.css"

function SideGuru(props) {
    let notify = () => {
        let pathName = window.location.pathname
        pathName = pathName.slice(1)
        let mytips = tips[pathName]
        mytips.map((val, i) => {
            let args = {
                message:`Tip # ${i+1}`,
                description: val,
                duration: 4 + i + (i*.5),
                icon:<img src={require("../../Assets/Teachin.gif")}  style={{ width: "100px",marginTop: "-15px",marginLeft: "-25px"}}/>
            }
            notification.open(args);
        }
        )
    }
    return (
        <div className="side-guru-parent-class" onClick={notify}>
            {/* <h6>Need Help?</h6> */}
            <img className="side-guru-class" src={require("../../Assets/TheGraphicGuruSitting.png")} />
        </div>
    )


}

export default SideGuru
