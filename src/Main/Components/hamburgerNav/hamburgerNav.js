import React, { useState, useEffect } from 'react';
import { Drawer, Button, Collapse, Modal } from 'antd';
import "./hamburgerNav.css"
import { MenuFoldOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
// import { SignUp } from "../content/signUp/signUp.js"
import firebase from "../../GlobalEnvironment/firebaseConfig"



const { Panel } = Collapse;

const HamBurgerNav = (props) => {
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
    props.setIsSignIn(true)
  }
  async function logIn(values) {
    await firebase.login(values.email, values.password).then(() => {
      alert("You have sign In successfully ")
    })
      .catch(function (error) {
        alert(error.message);
      })
    onClose()
    props.setIsSignIn(true)
  }
  async function logOut() {
    onClose()
    await firebase.logout().then(() => {
      alert("You have sign Out successfully ")
    })
      .catch(function (error) {
        alert(error.message);
      })
    props.setIsSignIn(false)
    props.setIsAdminSignIn(false)
  }
  let history = useHistory()
  useEffect(() => {
    if (firebase.currentUsers()) {
      setcurrentUsersData(true)
    }
    else if (firebase.currentUsers() === null && currentUsersData) {
      setcurrentUsersData(false)
    }
  })
  return (
    <ThemeContext.Consumer>
      {colorsState => <>
        <style jsx="true">
          {
            `
          .ant-drawer-content-wrapper,.ant-drawer-content,.ant-drawer-header{
            background:${colorsState.colors.color1};
            background: -webkit-linear-gradient(to left, #2C5364, #203A43, #0F2027); 
            background: linear-gradient(to left, #2C5364, #203A43, #0F2027);
          }
          .anticon-close,.cursorClass{
            color:${colorsState.colors.color2};
            transition: all .5s ease;
          }
          .anticon-close:hover,.cursorClass:hover,.siderHeading:hover{
            color:${colorsState.colors.color4};
          }

        }

          `
          }
        </style>
        <Button onClick={showDrawer} style={{ backgroundColor: "none" }} icon={<MenuFoldOutlined />}>
        </Button>
        <Drawer
          title={
            <div>

              <h2 className="siderHeading">Socio-Linkage</h2>
            </div>
          }
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
          className={props.mode}
        >
          {/* <div className="cursorClass"><Collapse accordion className="headerPanelClassForSideNav">
            <Panel style={{ border: "none" }} header={
              <div style={{ color: "#fff" }}>
             Regions</div>} key="1">
              <div onClick={() => { history.push("/Pakistan") }} key="2">
                Pakistan
            </div>
              <div onClick={() => { history.push("/Balochistan") }} key="3">
                Balochistan
            </div>
              <div onClick={() => { history.push("/GilgitBaltistan") }} key="4">
                Gilgit Baltistan
            </div>
              <div onClick={() => { history.push("/KPK") }} key="5">
                Khyber Pakhtun khuwa
            </div>
              <div onClick={() => { history.push("/Punjab") }} key="6">
                Punjab
            </div>
              <div onClick={() => { history.push("/Sindh") }} key="7">
                Sindh
            </div>
            </Panel>
          </Collapse>
          </div> */}
          <div className="cursorClass">
            <p onClick={() => {
              onClose()
              history.push("/aboutUs")
            }}>
              About Us
          </p>
          </div>
          <div className="cursorClass">
            <p onClick={() => {
              onClose()
              history.push("/Comparison")
            }}>
              Comparison
          </p>
          </div>
          {/* <div className="cursorClass">
            {!currentUsersData ?
              <>
                <Button type="primary" onClick={showModal}>
                  Register With Us
        </Button>
                <Modal
                  title="Sign Up/In"
                  visible={visibleModal}
                  onCancel={handleCancel}
                  footer={null}
                >
                   <SignUp signIn={signIn} logIn={logIn} /> 
                </Modal>
              </>
              : <div>
                <Button type="primary" onClick={() => {
                  onClose()
                  history.push("/ApplicationForm")
                }
                }>Submit an Application</Button>
                <br />
                <br />
                <Button type="primary" onClick={logOut}>Log Out</Button>
              </div>
            }
          </div> */}
        </Drawer>
      </>
      }
    </ThemeContext.Consumer>
  );
};
export default HamBurgerNav