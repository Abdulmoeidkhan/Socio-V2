import React, { useEffect } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext, GuruContextChanger } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import "./EducatingAboutSocialWork.css";
import AOS from "aos";
import "aos/dist/aos.css";

const { Content } = Layout;



const EducatingAboutSocialWork = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <GuruContextChanger.Consumer>
                        {guruState => <>
                            {
                               ()=> guruState.guruDispatch({ type: "change", payload: "EducatingAboutSocialWork" })
                            }
                            <Layout>
                                <style>
                                    {
                                        `
                                .ant-menu{
                                    color:${colorsState.colors.color2} !important
                                }
                                .first-page-card-class:hover,.first-page-edu-card-class:hover{
                                    transition: all .5s ease;
                                    background-color:${colorsState.colors.color1};
                                    color:${colorsState.colors.color2} !important;
                                }
                                `
                                    }
                                </style>
                                <NavBar />
                                <Content className="content-container-class">
                                    <div className="spacing-class" />
                                    <div className="card-section-parent-education">
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">CONCEPT OF SOCIAL WORK </h2>
                                                <div className="content-para" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">A broad definition of social work includes those services which are provided by society to its members to enable them to function effectively and lead life of dignity, decency, and liberty. This service directly benefits all member of society irrespective of their religion, caste, race, language, region, culture etc.</div>
                                            </div>
                                        </section>
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">NEED OF SOCIAL WORK </h2>
                                                <div className="content-para" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">Man lives in society. It is the collection of individuals united by certain relations or mode of behaviour which mark them off from others who do not enter these relations or who differ from in behaviour. It is also a complex web of social relations. This relation is the result of interaction of social people. Society is changeable. When social people can’t keep pace with social change properly, they face, especially in industrialized society, multifarious problems which require professional, knowledge based &amp; sustainable solution. To meet these problems effectively, social work has been emerged.</div>
                                            </div>
                                        </section>
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">METHODS OF SOCIAL WORK </h2>
                                                <h3 data-aos-duration="1500" data-aos="zoom-in" data-aos-delay="400">
                                                    <blockquote>These are:</blockquote>
                                                </h3>
                                                <div className="content-para" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">
                                                    <ol>
                                                        <li data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="500">
                                                            <blockquote>Basic methods  : </blockquote>
                                                    It includes another three parts such as
                                                    <ul data-aos-duration="1500" data-aos="flip-in" data-aos-delay="600">
                                                                <li>Social case work</li>
                                                                <li>Socialgroup work</li>
                                                                <li>Community organization</li>
                                                            </ul>
                                                            <div className="card-three-column-seperation" data-aos-duration="1500" data-aos="zoom-down" data-aos-delay="700">
                                                                <Card bordered={true} className="first-page-card-class">
                                                                    <h2 className="content-sub-head">Social case work </h2>
                                                                    <div>
                                                                        Social case work is the method employed by social workers to help individuals find solutions to problems of social adjustment that are difficult for individuals to navigate on their own.
                                                            </div>
                                                                </Card>
                                                                <Card bordered={true} className="first-page-card-class">
                                                                    <h2 className="content-sub-head">Socialgroup work</h2>
                                                                    <div>
                                                                        Social group work is a method of social work that helps persons to enhance their social functioning through purposeful group experiences and to cope more effectively with their personal, group or community problems (Marjorie Murphy, 1959).
                                                            </div>
                                                                </Card>
                                                                <Card bordered={true} className="first-page-card-class" >
                                                                    <h2 className="content-sub-head">Community organization </h2>
                                                                    <div>
                                                                        Community organization covers a series of activities at the community level aimed at bringing about desired improvement in the social well being of individuals, groups and neighbourhoods.
                                                            </div>
                                                                </Card>
                                                            </div>
                                                        </li>
                                                        <li data-aos-duration="1500" data-aos="zoom-up" data-aos-delay="500">
                                                            <blockquote>Auxiliary methods  : </blockquote>
                                                    It also includes another three parts these are
                                                    <ul data-aos-duration="1500" data-aos="flip-in" data-aos-delay="600">
                                                                <li>Social action</li>
                                                                <li>Social welfare administration</li>
                                                                <li>social research.</li>
                                                            </ul>
                                                            <div className="card-three-column-seperation" data-aos-duration="1500" data-aos="zoom-down" data-aos-delay="700">
                                                                <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="800">
                                                                    <h2 className="content-sub-head">Social Action</h2>
                                                                    <div>
                                                                        Social Action has been used to signify a wide range of primarily voluntary initiative to bring out change in social systems, processes and even structure.
                                                            </div>
                                                                </Card>
                                                                <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-up" data-aos-delay="800">
                                                                    <h2 className="content-sub-head">Social Welfare Administration</h2>
                                                                    <div>
                                                                        Social welfare administration is a process by which we apply professional competence to achieve certain goals. It is called a process of transforming social policy into social action. It involves the administration of government and Nongovernment agencies.
                                                            </div>
                                                                </Card>
                                                                <Card bordered={true} className="first-page-card-class" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="800">
                                                                    <h2 className="content-sub-head">Social Research </h2>
                                                                    <div>
                                                                        Social Work Research is the application of research methods to the production of knowledge that Social Workers need to solve problems they confront in the practice of Social Work.
                                                            </div>
                                                                </Card>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">SOCIAL WORK CAREERS</h2>
                                                <div className="content-para" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">The rich diversity of social work environments attracts many to the profession. Social workers can find work in settings as varied as schools, the military, hospitals, outpatient facilities, and child welfare organizations. Work environments can also change on a day-to- day basis for social workers employed in roles where travel is required.</div>
                                            </div>
                                        </section>
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="card-card-container-class">
                                                <div className="card-one-column-seperation" data-aos-duration="1500" data-aos="zoom-down" data-aos-delay="700">
                                                    <Card bordered={true} className="first-page-edu-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="800">
                                                        <h2 className="content-sub-head">Child, Family, and School Social Worker Jobs </h2>
                                                        <div>
                                                            A child, family, or school social worker assists children and youth, along with their parents and guardians. School social worker duties may include offering support in instances where abuse has taken place, or where mental illness, physical illness, or trauma is affecting a child’s wellbeing. They may also help parents access resources so they can better care for their children or find placement for children whose needs are not being met.
                                                </div>
                                                    </Card>
                                                    <Card bordered={true} className="first-page-edu-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="850">
                                                        <h2 className="content-sub-head">Kinds of Social Work</h2>
                                                        <div>
                                                            Let us tell you people a secret… there’s a huge difference between voluntary and involuntary social work, to read more about it visit our page NOW!
                                                </div>
                                                    </Card>
                                                    <Card bordered={true} className="first-page-edu-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="900">
                                                        <h2 className="content-sub-head">Medical Social Worker Jobs</h2>
                                                        <div>
                                                            Medical and health care social workers provide social support within the medical and healthcare fields. They offer services to patients and their loved ones to help alleviate the social, financial, and relational hardships that may arise when someone falls ill. Their responsibilities may also include providing services that promote health, disease prevention, and addressing socioeconomic barriers to healthcare access. Medical social workers may work in hospitals, nursing homes, and assisted care facilities.
                                                </div>
                                                    </Card>
                                                    <Card bordered={true} className="first-page-edu-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="950">
                                                        <h2 className="content-sub-head">Mental Health & Substance Abuse Social Worker Jobs </h2>
                                                        <div>
                                                            Mental health and substance abuse social workers are trained to help people experiencing problems with their mental health and addiction. Common modalities that they use to offer support include individual therapy,group therapy, and crisis intervention. The settings in which they may work includecommunity mental health facilities, crisis relief, and rehabilitation services.
                                                </div>
                                                    </Card>
                                                    <Card bordered={true} className="first-page-edu-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1000">
                                                        <h2 className="content-sub-head">Military Social Worker Jobs </h2>
                                                        <div>
                                                            Military social workers offer targeted services for men, women, and families within the armed forces. The tasks and responsibilities of a military social worker include providing support during deployment and helping families cope with frequent moves or an absent loved one. Military social workers also assist with the reintegration of members of the military into their family and civilian life following their return from duty.
                                                </div>
                                                    </Card>
                                                    <Card bordered={true} className="first-page-edu-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1050">
                                                        <h2 className="content-sub-head">Community Social Worker Jobs </h2>
                                                        <div>
                                                            Community social workers often work simultaneously at micro, mezzo, and macro levels within the community. Depending on their specific job, their tasks may include conducting needs assessments and referrals with individuals, working with community organizations, or even planning and administering large-scale programs. Their efforts are critical to helping communities’ function effectively. Community social workers are sometimes employed at a state or local government level, and other times are contracted by non-profits or grassroots organizations.
                                                </div>
                                                    </Card>
                                                    <Card bordered={true} className="first-page-edu-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1100">
                                                        <h2 className="content-sub-head">Social Work Administrator Jobs </h2>
                                                        <div>
                                                            If working in the field one-on-one isn’t for you, you might consider a career in social work administration or research instead. Social work administrators help with the managerial, administrative, and business arm of social work. Their tasks may include writing grants and reports, overseeing accounts, managing tax, researching and assessing communities in need, and creating bodies for the delivery of services. This area of social work is inherently macro in nature. Social work administrators are also often responsible for managing staff and delegating tasks.
                                                </div>
                                                    </Card>
                                                    <Card bordered={true} className="first-page-edu-card-class" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1150">
                                                        <h2 className="content-sub-head">Master’s in Social Work Job Opportunities </h2>
                                                        <div>
                                                            The benefits of an MSW, or master of social work, are plentiful. The MSW demonstrates additional knowledge and skills, and thus provides the ability to secure a wider variety of careers in the social work field. Jobs that require an MSW include clinical social work. Most healthcare, mental health, and substance abuse social worker roles may also require an MSW.
                                                </div>
                                                    </Card>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">PROFESSIONAL SOCIAL WORK</h2>
                                                <div className="content-para" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">Professional social workers receive formal training in engaging, assessing, and intervening with people in need of support through various psychosocial difficulties.  Many social workers go on to specialize in treating mental health disorders and addiction, providing psychosocial support to people dealing with physical illnesses, or working with children and families. Social workers can also pursue licenses to practice as psychotherapists or marriage and family therapists.</div>
                                            </div>
                                        </section>
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">VOLUNTARY SOCIAL WORK</h2>
                                                <div className="content-para" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">People in the voluntary sector, on the other hand, usually do not have the extensive training that professional social workers do. Their efforts are usually more focused on providing lay support, such as providing financial assistance, shelter, and other concrete services to people in need. Voluntary social work also includes many forms of community organization, which is often most effective coming from those within communities, as well as large scale charity efforts.</div>
                                            </div>
                                        </section>
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">SOCIAL WORK IN PAKISTAN</h2>
                                                <div className="content-para" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">When it comes to helping others, Pakistani nation has always showed its true character of selfless service and leading the social work of this great nations are individuals whose contribution and service to humanity is known all over the world. They have dedicated their lives to their causes and have spearheaded their ventures in service of mankind in a way that they became beacon of hope to those in need.</div>
                                            </div>
                                        </section>
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">SOCIAL WORK EDUCATION IN PAKISTAN</h2>
                                                <div className="content-para" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">In Pakistan educational system there’s a huge demand to get the degree of social work among the students. You would gaze around that social work degree is the major part of the educational colleges and universities on the BS level. You can learn the program of the social work on the bachelor and on the master’s level. Later, it does bring the categories of MPhil and PhD level too. It would offer you with so many options in terms of the employment category as well.</div>
                                            </div>
                                        </section>
                                        <section className="card-referrals-equal-columns-grid-1">
                                            <div className="content-content-1">
                                                <div className="spacing-class" />
                                                <h2 className="content-head" data-aos-duration="1500" data-aos="fade-right" data-aos-delay="400">IMPORTANT CORE SUBJECTS IN SOCIAL WORK IN PAKISTAN</h2>
                                                <div className="content-para" data-aos-duration="1500" data-aos="fade-left" data-aos-delay="400">“Some of the major and important subjects which you will be studying in your degree of social work are as follows</div>
                                                <ul className="last-list">
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="500">Introductory Economics for Social Workers</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="550">Sociology of Culture</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="600">Human Growth and Behavior</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="650">Social Statistics and Computer Application</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="700">Gender and Development Studies</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="750">NGO Management and Leadership</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="800">Human Rights</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="850">Research Practice</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="950">Social Development</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1000">Social Action</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1050">Medical and Social Work</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1100">Case Work</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1150">Group Work</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1200">Social Policy, Planning and Welfare Administration</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1250">Population Planning</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1300">Social Rehabilitation</li>
                                                    <li data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1350">Child Protection.</li>
                                                </ul>
                                            </div>
                                        </section>
                                    </div>
                                </Content>
                                <MyFooter />
                            </Layout>
                        </>}
                    </GuruContextChanger.Consumer>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default EducatingAboutSocialWork