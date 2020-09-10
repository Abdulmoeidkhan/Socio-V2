import React from "react"
import { GuruContext } from "../../GlobalEnvironment/contextInit"
import "./SideGuru.css"

function SideGuru(props) {
    return (
        <GuruContext.Consumer>
            {guruPage =>
                <div className="side-guru-parent-class" onClick={() => console.log(guruPage)}>
                    {/* <h6>Need Help?</h6> */}
                    <img className="side-guru-class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1599561517/The%20Graphic%20Guru/The_Graphic_Guru_present_oht4i8.png" />
                </div>
            }
        </GuruContext.Consumer>
    )


}

export default SideGuru
