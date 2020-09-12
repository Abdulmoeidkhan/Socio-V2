import React, { useState, useEffect } from "react";
import HamBurgerNav from "../hamburgerNav/hamburgerNav"
import { Layout, Modal, notification } from 'antd';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import { useHistory } from "react-router-dom";
import firebase from "../../GlobalEnvironment/firebaseConfig";
import SignUp from "../SignUp/SignUp.js"
import "./Nav-Menu.css"

const { Header } = Layout;

const SignInNotify = (placement,user) => {
    notification.open({
      message: 'Sign In Successfully ',
      description:
        `You have Sign In Successfully As ${user}`,
      icon: <img src={require("../../Assets/SuccessGuru.gif")} style={{ width: "100px",marginTop: "-15px",marginLeft: "-60px"}}/>,
    placement,
    });
  };
  const SignUpNotify = (placement,user) => {
    notification.open({
      message: 'Sign Up Successfully ',
      description:
        `You have Sign Up Successfully As ${user}`,
      icon: <img src={require("../../Assets/SuccessGuru.gif")} style={{ width: "100px",marginTop: "-15px",marginLeft: "-60px"}}/>,
    placement,
    });
  };

  const successNotify = (placement,message) => {
    notification.open({
      message: 'Imporatant Notification',
      description:
        `${message}`,
      icon: <img src={require("../../Assets/ErrorGuru.gif")}style={{ width: "100px",marginTop: "-15px",marginLeft: "-60px"}}/>,
    placement,
    });
  };

  const errorNotify = (placement,message) => {
    notification.open({
      message: 'Imporatant Notification',
      description:
        `${message}`,
      icon: <img src={require("../../Assets/ErrorGuru.gif")}style={{ width: "100px",marginTop: "-15px",marginLeft: "-60px"}}/>,
    placement,
    });
  };

const NavBar = (props) => {
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
    async function logIn(values) {
        await firebase.login(values.email, values.password).then(() => {
            SignInNotify('topLeft',firebase.currentUsers().displayName)
            props.setUserSignIn&&props.setUserSignIn(firebase.currentUsers())
            onClose()
        })
            .catch(function (error) {
                errorNotify('topLeft',`Error ${error.message}`);
            })
        setIsSignIn(true)

    }
    async function signIn(values) {
        await firebase.signUp(values.username,values.email, values.password).then(() => {
            SignUpNotify('topLeft',firebase.currentUsers().displayName)
            props.setUserSignIn&&props.setUserSignIn(firebase.currentUsers())
            onClose()
        })
            .catch(function (error) {
                errorNotify('topLeft',`Error ${error.message}`);
            })
        setIsSignIn(true)

    }
    async function logOut() {
        onClose()
        await firebase.logout().then(() => {
            errorNotify('topLeft',`You Have Sign Out Successfully`);
            props.setUserSignIn&&props.setUserSignIn()
        })
            .catch(function (error) {
                errorNotify('topLeft',`Error ${error.message}`);
            })
        setIsSignIn(false)
    }

    async function passReseting(values) {
        await firebase.passReseting(values.email).then((tempMess) => {
            successNotify('topLeft',`Error ${tempMess}`);;
            onClose()
        })
            .catch(function (error) {
                errorNotify('topLeft',`Error ${error.message}`);
            })
    }

    useEffect(() => {
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
                <Header className="header-class" >
                    <h2 className="logo" onClick={() => history.push("/Home")} id="head">
                        <img className="logo-img" src={require("../../Assets/Logo.png")} alt={require("../../Assets/Logo.png")} />
                    </h2>
                    <div className="logo1 navigation-menu-class">
                        <HamBurgerNav setIsSignIn={setIsSignIn} visible={visible} currentUsersData={currentUsersData} onClose={onClose} showDrawer={showDrawer} showModal={showModal} handleCancel={handleCancel}/>
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
                                <SignUp signIn={signIn} logIn={logIn} passReseting={passReseting}/>
                            </Modal>
                        </div>
                        : <div>
                            <div className="logo1">
                                <button className="register-button-class" onClick={logOut}>
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