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
                border-bottom:4px solid #fff;
                border-bottom-color:${colorsState.colors.color1};
                height:65px;
               }
               .ant-menu-item{
                color:${colorsState.colors.color2} ;
                }
                .ant-menu-horizontal > .ant-menu-item-selected,.ant-menu-horizontal > .ant-menu-item:hover{
                    color:${colorsState.colors.color4};
                    border-bottom: 2px solid #fff;
                    border-bottom-color:${colorsState.colors.color4};
                }

               `
                    }
                </style>
                <Header>
                    <div className="logo" />
                    <div className="logo1">
                        <HamBurgerNav />
                    </div>
                    <div className="logo1">
                        <button>Register</button>
                    </div>
                    <div className="logo1">
                        <p className="contact-class">+923333466728</p>
                    </div>
                </Header>
            </>
        }
    </ThemeContext.Consumer>
    )
}

export default NavBar