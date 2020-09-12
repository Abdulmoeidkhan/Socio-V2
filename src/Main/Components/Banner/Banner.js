import React,{useEffect} from 'react';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Banner = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <>
                    <style jsx="true">
                        {
                            `       
                                .banner-super,.banner-main{
                                    color:${colorsState.colors.color2};
                                }
                                .super-below{
                                    color:${colorsState.colors.color4};
                                }

                                `
                        }
                    </style>
                    <div className="banner-img" >
                        <div className="banner-content">
                            <p className="banner-super" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">CONNECT TO AN</p>
                            <h2 className="banner-main">
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">O</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">R</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">G</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">A</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">N</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">I</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900">Z</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">A</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">T</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">I</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">O</span>
                                <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">N</span>
                                </h2>
                            <p className="super-below"data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="800"> WITH OUR EXPERTS</p>
                            <ul className="social-icons">
                            <li><a href="https://www.facebook.com/Sociolinkage20" target="_blank" className="facebook" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="2600"><i className="fa fa-facebook" ></i></a></li>
                            <li><a href="https://twitter.com/LinkageSocio" target="_blank" className="twitter" data-aos-duration="1500" data-aos={"fade-up-right"} data-aos-delay="2700"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="whatsapp" href="https://wa.me/923333466728" target="_blank" data-aos-duration="1500" data-aos={"fade-down-right"} data-aos-delay="2800"><i className="fa fa-whatsapp"></i></a></li>
                            <li><a className="linkedin" href="https://www.linkedin.com/in/socio-linkage-5720bb1b0/" target="_blank" data-aos-duration="1500" data-aos={"fade-up-left"} data-aos-delay="2900"><i className="fa fa-linkedin"></i></a></li>
                            <li><a className="instagram" href="https://www.instagram.com/sociolinkage/" target="_blank" data-aos-duration="1500" data-aos={"fade-down-left"} data-aos-delay="3000"><i className="fa fa-instagram"></i></a></li>
                            <li><a className="youtube" href="https://www.youtube.com/channel/UCYJ_C5vcn24jKeO7ZJ0K8xw?view_as=subscriber" target="_blank" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="3000"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                        </div>
                        
                    </div>
                </>
            }
        </ThemeContext.Consumer>
    )
}

export default Banner