import React from 'react';
import { Drawer, Button, Collapse, Modal } from 'antd';
import "./hamburgerNav.css"
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate"
import firebase from "../../GlobalEnvironment/firebaseConfig";



const { Panel } = Collapse;

const HamBurgerNav = (props) => {

  let history = useHistory()
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
        <Button onClick={props.showDrawer} style={{ backgroundColor: "none" }} icon={
          <img src={require("../../Assets/menu.png")} style={{ width: "50px", height: "65px" }} />
          // <MenuFoldOutlined />
        }>
        </Button>
        <Drawer
          title={
            <div>
              {
                !firebase.currentUsers() ? <h2 className="siderHeading">Socio-Linkage</h2> : <h2 className="siderHeading">Hello {firebase.currentUsers().displayName} !</h2>
              }
            </div>
          }
          placement="right"
          closable={true}
          onClose={props.onClose}
          visible={props.visible}
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
              props.onClose()
              history.push("/")
            }}>
              Home
          </p>
          </div>
          <div className="cursorClass">
            <p onClick={() => {
              props.onClose()
              history.push("/AboutSocioLinkage")
            }}>
              About Socio-Linkage
          </p>
          </div>
          <div className="cursorClass">
            <p onClick={() => {
              props.onClose()
              history.push("/AreaOfWorking")
            }}>
              Area of working
          </p>
          </div>
          <div className="cursorClass">
            <p onClick={() => {
              props.onClose()
              history.push("/Territories")
            }}>
              Territories
          </p>
          </div>
          <div className="cursorClass">
            <p onClick={() => {
              props.onClose()
              history.push("/PricingPlans")
            }}>
              Pricing & Plans
          </p>
          </div>
          <div className="cursorClass">
            <p onClick={() => {
              props.onClose()
              history.push("/FAQ")
            }}>
              FAQ's
          </p>
          </div>
          <div className="cursorClass">
            <GoogleTranslate />
          </div>
          <div className="register-mob-class cursorClass">
            {
              !firebase.currentUsers() ? <p onClick={() => {
                props.onClose()
                props.showModal()
              }}>
                Register
            </p> :
                <p onClick={() => {
                  props.onClose()
                  props.handleCancel()
                }}>
                  Log Out
          </p>
            }

          </div>
        </Drawer>
      </>
      }
    </ThemeContext.Consumer>
  );
};
export default HamBurgerNav