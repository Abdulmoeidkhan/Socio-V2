import React, { useState, useEffect } from "react";
import HamBurgerNav from "../hamburgerNav/hamburgerNav"
import { Layout,Modal } from 'antd';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import { useHistory } from "react-router-dom";
import firebase from "../../GlobalEnvironment/firebaseConfig";
import SignUp from "../SignUp/SignUp.js"
import "./Nav-Menu.css"

const { Header } = Layout;

const NavBar = () => {
    const [isSignIn, setIsSignIn] = useState(false)
    const [visible, setVisible] = useState(false);
    const [visibleModal, setvisibleModal] = useState(false)
    const [currentUsersData, setcurrentUsersData] = useState(false)


    const showDrawer = () => {
        setVisible(true);
    };

    const showModal = () => {
        setvisibleModal(true)
    }

    const onClose = () => {
        setVisible(false);
        setvisibleModal(false)
    };

    const handleCancel = () => {
        setvisibleModal(false)
    };
    async function signIn(values) {
        await firebase.signUp(values.username, values.email, values.password).then(() => {
            alert("You have signed Up successfully ")
        })
            .catch(function (error) {
                alert(error.message);
            })
        onClose()
        setIsSignIn(true)
    }
    async function logIn(values) {
        await firebase.login(values.email, values.password).then(() => {
            alert("You have sign In successfully ")
        })
            .catch(function (error) {
                alert(error.message);
            })
        onClose()
        setIsSignIn(true)
    }
    async function logOut() {
        onClose()
        await firebase.logout().then(() => {
            alert("You have sign Out successfully ")
        })
            .catch(function (error) {
                alert(error.message);
            })
        setIsSignIn(false)
    }






    useEffect(() => {
        console.log(isSignIn)
        if (!isSignIn) {
            if (firebase.currentUsers()) { setIsSignIn(true) }
        }
        if (firebase.currentUsers()) {
            setcurrentUsersData(true)
        }
        else if (firebase.currentUsers() === null && currentUsersData) {
            setcurrentUsersData(false)
        }
    })

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
                    <h2 className="logo" onClick={() => history.push("/")}>
                        <img className="logo-img" src="https://res.cloudinary.com/tanzeelah/image/upload/v1596468604/Landing%20Page/Logo_ieqnvp.png" alt="https://res.cloudinary.com/tanzeelah/image/upload/v1596468604/Landing%20Page/Logo_ieqnvp.png" />
                    </h2>
                    <div className="logo1 navigation-menu-class">
                        <HamBurgerNav setIsSignIn={setIsSignIn} visible={visible} currentUsersData={currentUsersData} onClose={onClose} showDrawer={showDrawer}/>
                    </div>
                    {!currentUsersData ?
                        <div className="logo1">
                                <button className="register-button-class" onClick={showModal}>
                                    Register
                                </button>
                            <Modal
                                title="Sign Up/In"
                                visible={visibleModal}
                                onCancel={handleCancel}
                                footer={null}
                            >
                                <SignUp signIn={setIsSignIn} logIn={logIn} />
                            </Modal>
                        </div>
                        : <div>
                            <div className="logo1">
                                    <button className="register-button-class"  onClick={logOut}>
                                        Log Out
                                    </button>
                            </div>
                        </div>
                    }
                    <div className="logo1 contact-class-parent">
                        <a className="contact-class" title="+923333466728" href="tel:+923333466728" target="_blank">Call Us +923333466728</a>
                    </div>
                </Header>
            </>
        }
    </ThemeContext.Consumer>
    )
}

export default NavBar