import React from "react";
import HamBurgerNav from "../hamburgerNav/hamburgerNav"
import { Layout, Menu } from 'antd';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import "./Nav-Menu.css"

const { Header } = Layout;

const NavBar = () => {
    return (<ThemeContext.Consumer>
        {colorsState =>
            <>
                <style jsx="true">
                    {
                        `
               .ant-layout-header,.ant-menu{
                   background:${colorsState.colors.color1};
               }
               .ant-layout-header{
                border-bottom-color:${colorsState.colors.color1};
               }
               .ant-menu-item{
                color:${colorsState.colors.color2} ;
                }
                .ant-menu-horizontal > .ant-menu-item-selected,.ant-menu-horizontal > .ant-menu-item:hover{
                    color:${colorsState.colors.color4};
                    border-bottom: 2px solid #fff;
                    border-bottom-color:${colorsState.colors.color4};
                }
                .contact-class {
                    color:${colorsState.colors.color2};
                    border-bottom-color: ${colorsState.colors.color1};
                  }
                  .contact-class:hover {
                    color:${colorsState.colors.color4};
                    border-bottom-color: ${colorsState.colors.color4};
                  }
                  .logo1 ,.logo{
                    color:${colorsState.colors.color2} ;
                  }
                  .register-button-class{
                    background-color:${colorsState.colors.color4} ;
                    color:#000 ;
                  }
               `
                    }
                </style>
                <Header className="header-class">
                    <h2 className="logo" >
                        Socio-Linkage
                        </h2>
                    <div className="logo1 navigation-menu-class">
                        <HamBurgerNav />
                    </div>
                    <div className="logo1">
                        <button className="register-button-class">Register</button>
                    </div>
                    <div className="logo1 contact-class-parent">
                        <p className="contact-class">Call Us +923333466728</p>
                    </div>
                </Header>
            </>
        }
    </ThemeContext.Consumer>
    )
}

export default NavBar