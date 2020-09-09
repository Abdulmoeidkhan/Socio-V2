import React from "react"
import { Layout } from "antd"
import './MobileFooter.css'


const { Footer } = Layout;

function MobileFooter(props) {
    console.log(props)
    return (
        <Footer className="mobile-Footer">
            <div>
                <div className="arrowUpKey" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}><i className="fa fa-x fa-arrow-up" style={{ color: "#fff" }} aria-hidden="true"></i></div>
            </div>
            <div className="guru-parent-class">
                <h6>Need Help?</h6>
                <img className="guru-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1599561517/The%20Graphic%20Guru/The_Graphic_Guru_present_oht4i8.png"/>
            </div>
            <div>
                <div className="arrowDownKey" onClick={() => { window.scrollTo({ top: 100000, left: 0, behavior: "smooth" }) }}><i className="fa fa-x fa-arrow-down" style={{ color: "#fff" }} aria-hidden="true"></i></div>
            </div>
        </Footer>
    )


}

export default MobileFooter
