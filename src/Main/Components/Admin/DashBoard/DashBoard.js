import React, { useState, useEffect } from 'react';
import { Tabs, Layout } from 'antd';
import { AdminDashBoardFormList } from "../DashBoardFormList/DashBoardFormList.js";
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import firebase from "../../../GlobalEnvironment/firebaseConfig";
import { AdminContent } from "../Content/Content";
import FAQContent from "../FAQContent/FAQContent";
import { useHistory } from "react-router-dom";
import MyFooter from "../../Footer/Footer"
import "./DashBoard.css";

const { TabPane } = Tabs;
const { Header } = Layout;

const AdminDashBoard = () => {

    const [isAdminSignIn, setIsAdminSignIn] = useState(true)
    useEffect(
        function () {
            firebase.currenAdminUser().then((resp) => {
                setIsAdminSignIn(resp.flag)
            })
        }, [])

    async function logOut() {
        await firebase.logout().then(() => {
            alert("You have sign Out successfully ")
        })
            .catch(function (error) {
                alert(error.message);
            })
        setIsAdminSignIn(false)
    }


    let history = useHistory()
    return (
        <>
            {
                isAdminSignIn
                    ?
                    <ThemeContext.Consumer >
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
                                    <h2 className="logo" onClick={() => history.push("/Home")}>
                                        <img className="logo-img" src={require("../../../Assets/Logo.png")} alt={require("../../../Assets/Logo.png")} />
                                    </h2>
                                    <div>
                                        <div className="logo1">
                                            <button className="register-button-class" onClick={logOut}>
                                                Log Out
                                    </button>
                                        </div>
                                    </div>
                                </Header>
                                <Tabs defaultActiveKey="1" className="adminTabs">
                                    <TabPane tab="Applications" key="1">
                                        <AdminDashBoardFormList />
                                    </TabPane>
                                    <TabPane tab="Content" key="2">
                                        <AdminContent />
                                    </TabPane>
                                    <TabPane tab="FAQ" key="3">
                                        <FAQContent />
                                    </TabPane>
                                </Tabs>
                                <MyFooter />
                            </>
                        }
                    </ThemeContext.Consumer >
                    :
                    history.push("/Admin/SignIn")
            }

        </>
    )
}

export default AdminDashBoard