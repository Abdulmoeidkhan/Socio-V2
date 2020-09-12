import React from "react"
import { Layout, notification } from "antd"
import { tips } from "../../GlobalEnvironment/contentRawData"
import './MobileFooter.css'


const { Footer } = Layout;



function MobileFooter(props) {
    let notify = () => {
        let pathName = window.location.pathname
        pathName = pathName.slice(1)
        let mytips = tips[pathName]
        mytips.map((val, i) => {
            let args = {
                message:`Tip # ${i+1}`,
                description: val,
                duration: 4 + i + (i*.5),
                icon:<img src={require("../../Assets/Teachin.gif")} style={{ width: "100px",marginTop: "-15px",marginLeft: "-25px"}}/>
            }
            notification.open(args);
        }
        )
    }
    return (
        <Footer className="mobile-Footer">
            <div>
                <div className="arrowUpKey" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}><i className="fa fa-x fa-arrow-up" style={{ color: "#fff" }} aria-hidden="true"></i></div>
            </div>
            <div className="guru-parent-class" onClick={notify}>
                <h6>Need Help?</h6>
                <img className="guru-class" src={require("../../Assets/TheGraphicGuruSitting.png")} />
            </div>
            <div>
                <div className="arrowDownKey" onClick={() => { window.scrollTo({ top: 100000, left: 0, behavior: "smooth" }) }}><i className="fa fa-x fa-arrow-down" style={{ color: "#fff" }} aria-hidden="true"></i></div>
            </div>
        </Footer>
    )


}

export default MobileFooter
