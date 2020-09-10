import React, { useEffect } from 'react';
import { GuruContextChanger } from "../../GlobalEnvironment/contextInit"
import { Layout, Tabs } from 'antd';
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import "./About.css"
import {
    useHistory
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const { Content } = Layout;
const { TabPane } = Tabs;


const AboutUs = (props) => {
    let history = useHistory()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return (
        <GuruContextChanger.Consumer>
                {guruState => <>
                    {
                     ()=>   guruState.guruDispatch({ type: "change", payload: "AboutSocioLinkage"})
                    }
                <Layout>
                    <NavBar />
                    <Content className="content-container-class">
                        <div className="spacing-class" />
                        <div className="about-section-parent">
                            <section className="equal-columns-grid equal-columns-grid-1" >
                                <div>
                                    <img className="about-anime-class-img" data-aos-duration="1500" data-aos="fade-right" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Mission_agdvs2.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Mission_agdvs2.png"} />
                                </div>
                                <div className="content-content-1" data-aos-duration="1500" data-aos="fade-left" >
                                    <div className="spacing-class" />
                                    <div className="content-super">OUR</div>
                                    <h2 className="content-head">MISSION </h2>
                                    <div className="content-para">Socio-linkage is a user-friendly path towards getting online-help irrespective of belief, class, color and race. The goal is to provide optimum social services for the ones in need from the experts in this field while encouraging people to understand their needs and provide them consultation by evaluating their problems.</div>
                                </div>
                            </section>
                            <section className="equal-columns-grid equal-columns-grid-1">
                                <div className="content-content-2" data-aos-duration="1500" data-aos="fade-right" >
                                    <div className="spacing-class" />
                                    <div className="content-super">OUR</div>
                                    <h2 className="content-head">VISION</h2>
                                    <div className="content-para">Since reaching out for social help in our society is a stigma therefore S.L aims to connect people with organizations that satisfies their needs. Hence to provide a digital platform for people who are willing to get help.</div>
                                </div>
                                <div>
                                    <img className="about-anime-class-img" data-aos-duration="1500" data-aos={"fade-left"} src={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Vision_wr79jo.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Vision_wr79jo.png"} />
                                </div>
                            </section>
                            <section className="one-columns-grid">
                                <div className="card-background-class">
                                    <div className="center-class" data-aos-duration="1500" data-aos="zoom-in" >
                                        <div className="spacing-class" />
                                        <div className="content-super">WHAT</div>
                                        <h2 className="content-head">WE DO</h2>
                                        <div className="content-para">Since you’ve seen what we do, we think its time we let you guys meet the people who make the magic happen! Socio-Linkage has 4 founding members, scroll down and say hi to them!</div>
                                    </div>
                                </div>
                            </section>
                            <Tabs defaultActiveKey="1" centered className="team-tabs" type="card">
                                <TabPane tab="Co-Founders" className="team-blue" key="1">
                                    <section className="equal-columns-grid equal-columns-grid-1" >
                                        <div>
                                            <img className="about-anime-class-img-sub" data-aos-duration="1500" data-aos="fade-right" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Mission_agdvs2.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Mission_agdvs2.png"} />
                                        </div>
                                        <div className="content-content-1" data-aos-duration="1500" data-aos="fade-left" >
                                            <div className="spacing-class" />
                                            <div className="content-super">THE</div>
                                            <h2 className="content-head">VISIONARY </h2>
                                            <div className="content-para">Ameer Humza Khan has been the Visionary and the Brains behind Socio-Linkage, who with the help of his team members helped forge this time in a short time period, explained and convinced the team to join forces for this venture. In his own words:</div>
                                            <div className="content-para"><blockquote>I was seeing the world get hit by the Pandemic, people caged up and baffled in their houses I as a Social Worker wanted to extend a helping hand to those in need. If all goes well, we will extend Socio-Linkage’s operations to other areas in need as well. We’ll keep bridging the ones in need with what they need!</blockquote></div>
                                        </div>
                                    </section>
                                    <section className="equal-columns-grid equal-columns-grid-1">
                                        <div className="content-content-1" data-aos-duration="1500" data-aos="fade-right" >
                                            <div className="spacing-class" />
                                            <div className="content-super">THE</div>
                                            <h2 className="content-head">MEDTECH PROP</h2>
                                            <div className="content-para">Tanzeelah Akhtar has been the support behind the Media Content of Socio-Linkage. She managed to give the clear and powerful concept through her work. In her own words:</div>
                                            <div className="content-para"><blockquote>I never imagined being a Social Work Major but when I got enrolled in this department, I found myself at place where Social Work proved to be very important component of our society and gained high place in my life when people say, &quot;you are the most caring and kind person as this work needs people like you to care about us&quot;. I always wanted to serve people because everyone deserves a chance to have better life. I keep on trying to get along with classmates if we get assigned for fieldwork or any project because it’s in my nature to look everyone&#39;s points of view and it seemed the best way to come up with bright ideas.</blockquote></div>
                                            <div className="content-para"><blockquote>Being a Badminton Athlete, I know what it feels like when you’re in team, sometimes if you don’t listen what your teammates are saying you lose and sometimes you have to do it on your own. She said: When my colleague asked me if I can try to develop a website or an application that can help the society and the first thing that came in my mind was, a platform that has all the details of Organizations and NGO’s along with their services because whenever we tried to look for the organizations that are working for the betterment of the society, we had to go through a bunch of different links and a lot of effort. However, I saw this platform as a perfect place to learn about the organizations with research. She further added.</blockquote></div>
                                            <div className="content-para"><blockquote>I always wanted to express feelings through my work even in practical life, so I decided to jump into the digital world to spread it through all social platforms by creating the most powerful pictures and videos.</blockquote></div>
                                        </div>
                                        <div>
                                            <img className="about-anime-class-img-sub" data-aos-duration="1500" data-aos={"fade-left"} src={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Vision_wr79jo.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Vision_wr79jo.png"} />
                                        </div>
                                    </section>
                                    <section className="equal-columns-grid equal-columns-grid-1" >
                                        <div>
                                            <img className="about-anime-class-img-sub" data-aos-duration="1500" data-aos="fade-right" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Mission_agdvs2.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Mission_agdvs2.png"} />
                                        </div>
                                        <div className="content-content-1" data-aos-duration="1500" data-aos="fade-left" >
                                            <div className="spacing-class" />
                                            <h2 className="content-head">RESEARCH & CONTENT MANAGEMENT </h2>
                                            <div className="content-para">We were joined with Ms. Zainab Ahmed Hussain, who worked in the mainstream of Socio-linkage’s content writing and research areas.</div>
                                            <div className="content-para"><blockquote>I believe that today’s world is rapidly changing in terms of digital and technological aspects hence, people are encouraged to become familiar with the digital traits of their respective fields. Being the student of department of Social Work I realized that there is hardly any digital convention or directory of the organizations that are working selflessly for the empowerment and uplift of mankind. Therefore, when this idea of Socio-linkage came to my concern I straightaway considered it and decided to support this venture with any of my needed services. I see Socio-Linkage as a lift to revitalize the efforts and endeavors of existing professional social workers and an example for the ones who are keen to provide services for the betterment of human lives.</blockquote></div>
                                        </div>
                                    </section>
                                    <section className="equal-columns-grid equal-columns-grid-1">
                                        <div className="content-content-1" data-aos-duration="1500" data-aos="fade-right" >
                                            <div className="spacing-class" />
                                            <div className="content-super">THE</div>
                                            <h2 className="content-head">DEVELOPER</h2>
                                            <div className="content-para">Abdul Moeid is the one who brought our vision into this site and helped our vision give a practical face, he said:</div>
                                            <div className="content-para"><blockquote>I wanted to make this a challenge for myself as this project was one of a kind in Pakistan. The idea behind Socio-Linkage seemed promising to me so I took a dive in and hope to work them for the years to come as Technology is the new Tomorrow!</blockquote></div>
                                        </div>
                                        <div>
                                            <img className="about-anime-class-img-sub" data-aos-duration="1500" data-aos={"fade-left"} src={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Vision_wr79jo.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1597936945/Flashcards/Icons/Vision_wr79jo.png"} />
                                        </div>
                                    </section>
                                </TabPane>
                                <TabPane tab="Collaborators" className="team-yellow" disabled key="2">
                                    Content of Tab Pane 2
                                </TabPane>
                                <TabPane tab="Experts" className="team-green" disabled key="3">
                                    Content of Tab Pane 3
                                </TabPane>
                                <TabPane tab="Investors" className="team-red" disabled  key="4">
                                    Content of Tab Pane 4
                                </TabPane>
                                <TabPane tab="Volunteers" className="team-yellow" disabled  key="5">
                                    Content of Tab Pane 5
                                </TabPane>
                            </Tabs>
                        </div>
                    </Content>
                    <MyFooter />
                </Layout>
                </>}
            </GuruContextChanger.Consumer>
    )
}

export default AboutUs