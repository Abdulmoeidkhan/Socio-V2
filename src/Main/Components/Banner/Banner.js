import React from 'react';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import "./Banner.css";


const Banner = (props) => {
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
                            <p className="banner-super">CONNECT TO AN</p>
                            <h2 className="banner-main">ORGANIZATION</h2>
                            <p className="super-below"> WITH OUR EXPERTS</p>
                            <ul className="social-icons">
                            <li><a href="https://www.facebook.com/socio.linkage.3" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/LinkageSocio" target="_blank" className="twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="whatsapp" href="https://wa.me/923333466728" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                            <li><a className="linkedin" href="https://www.linkedin.com/in/socio-linkage-5720bb1b0/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            <li><a className="instagram" href="https://www.instagram.com/sociolinkage/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            <li><a className="youtube" href="https://www.youtube.com/channel/UCYJ_C5vcn24jKeO7ZJ0K8xw?view_as=subscriber" target="_blank"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                        </div>
                        
                    </div>
                </>
            }
        </ThemeContext.Consumer>
    )
}

export default Banner