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
                            <p className="banner-super">MARKET YOUR</p>
                            <h2 className="banner-main">BUSSINESS</h2>
                            <p className="super-below"> WITH OUR UNIQUE STRATEGIES</p>
                        </div>
                    </div>
                </>
            }
        </ThemeContext.Consumer>
    )
}

export default Banner