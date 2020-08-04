import React from "react";
import HamBurgerNav from "../hamburgerNav/hamburgerNav"
import { Layout } from 'antd';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import { useHistory } from "react-router-dom";
import "./Nav-Menu.css"

const { Header } = Layout;

const NavBar = () => {
    
    let history = useHistory()

    return (<ThemeContext.Consumer>
        {colorsState =>
            <>
                <style jsx="true">
                    {
                        `
               .ant-layout-header,.ant-menu{
                   background:${colorsState.colors.color1};
                   background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027); 
                   background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
               }
               .ant-layout-header{
                border-bottom-color:${colorsState.colors.color1};
               }
               .header-class>h2{
                color:${colorsState.colors.color2} ;
                cursor:pointer;
               }
               .ant-menu-item,.navigation-menu-class .ant-btn{
                color:${colorsState.colors.color2};
                }
                .ant-menu-horizontal > .ant-menu-item-selected,.ant-menu-horizontal > .ant-menu-item:hover{
                    color:${colorsState.colors.color4};
                    border-bottom: 2px solid #fff;
                    border-bottom-color:${colorsState.colors.color4};
                }
                .contact-class {
                    color:${colorsState.colors.color2};
                    border-bottom-color: ${colorsState.colors.color2};
                  }
                  .contact-class:hover {
                    color:${colorsState.colors.color4};
                    border-bottom-color: ${colorsState.colors.color4};
                  }
                  .logo:hover,.navigation-menu-class .ant-btn:hover,.navigation-menu-class .ant-btn:focus,.navigation-menu-class .ant-btn:active {
                    color:${colorsState.colors.color4};
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
                    <h2 className="logo" onClick={()=> history.push("/")}>
                        <img className="logo-img" src="https://res.cloudinary.com/tanzeelah/image/upload/v1596468604/Landing%20Page/Logo_ieqnvp.png" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1596468604/Landing%20Page/Logo_ieqnvp.png"/>
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