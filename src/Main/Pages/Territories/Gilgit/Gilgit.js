import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit";
import NavBar from "../../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../../Components/Footer/Footer";
import {
    Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




const { Content } = Layout;


const Gilgit = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0,0)
    })
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <Layout>
                        <NavBar />
                        <Content className="content-container-class">
                            {/* <div className="spacing-class" /> */}
                            <div className="margin-class">
                                <Breadcrumb style={{ margin: '16px 0px' }}>
                                    <Breadcrumb.Item>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`/Territories`}>
                                            Territories
                                        </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`/Gilgit`}>
                                            Gilgit
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <section className="detail-territory" id="gilgit">
                                    <h2 className="pakistanPageHeading">
                                    <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1300">G</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1400">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1500">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1600">G</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1700">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1800">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="1900"></span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2000">B</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2100">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2200">L</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2300">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2400">I</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2500">S</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2600">T</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2700">A</span>
                                        <span data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="2800">N</span>
                                    </h2>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="500"> Map :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="500">
                                        Gilgit-Baltistan is represented at the UNPO by the Gilgit-Baltistan Democratic Alliance
                                        (GBDA) an umbrella organization which also represents groups such as the Balawaristan
                                        National Front, Karakoram National Movement, Gilgit Baltistan United Movement, the Bolor
                                        Research Forum and the Gilgit Baltistan Laddakh Democratic Movement. These groups
                                        remain committed to non-violent methods of advocacy, despite a deteriorating situation on
                                        the ground.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Overview :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Pakistan-occupied Gilgit-Baltistan comprises approximately 72.000 km² of territory,
                                        bordering Afghanistan to the north, the Xinjiang province of China to the northeast, the
                                        Pakistani administrated state of Azad, Jammu and Kashmir (AJK) to the south and the Indian
                                        administrated state of Jammu and Kashmir to the southeast. With an estimated population of
                                        2 million, Gilgit-Baltistan’s legal identity and constitutional status has been disputed ever
                                        since the Indo-Pakistani partition in 1947. The area is currently under the occupation of
                                        Pakistan, in violation of the United Nations Commission for India and Pakistan (UNCIP)
                                        resolution of 28 April 1949. The occupation took place without the consent of the people of
                                        Gilgit-Baltistan and, despite the UNCIP’s calls for Pakistan to withdraw its forces from the
                                        disputed area, the occupation remains to this day. For over 60 years now, the area of Gilgit-
                                        Baltistan is lacking a proper constitutional status, a working legal system and political
                                        autonomy.
                                        The critical shortage of a democratic setup in the region has led to constant human rights
                                        violations, extreme poverty, low literacy rates, slow economic development and growing
                                        sectarian turbulence. While Islamabad earns billions in revenue from Gilgit-Baltistan
                                        annually from trade and transit, water resource exploitation, trophy hunting, eco-tourism,
                                        mineral exploration and direct and indirect federal taxes, most of these earnings are not
                                        allocated for the development of the region.
                                        Moreover, the China-Pakistan Economic Corridor (CPEC) cuts through the territory of
                                        Gilgit-Baltistan, forcing the local population to accept the terms and conditions of the
                                        development project without consultation nor compensation.
                                        Deprived of accountable governance structures, as well as of constitutional and human rights,
                                        more than two million people in the region wait for their fate to be resolved. Declared a
                                        disputed territory by the UNSC in 1948, the United Nations has the responsibility to fulfil the

                                        fundamental rights of the people of Gilgit-Baltistan. The international community, in turn,
                                        must remind Islamabad that it is an occupier in Gilgit-Baltistan.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Current Issues :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        A confluence of many different cultures and languages, especially those related to Tibet,
                                        Central Asia and India, Gilgit-Baltistan today faces what some experts call a &quot;cultural
                                        genocide&quot;. Pakistan&#39;s educational policy bans mother tongue learning as a strategy to promote
                                        cultural assimilation and to erode indigenous identities. Plans to implement Mandarin as an
                                        optional language in schools of Gilgit-Baltistan have further raised concerns over the
                                        linguistic heritage of the region.
                                        Pakistan-occupied Gilgit-Baltistan has also suffered from sectarian conflicts fuelled by
                                        Pakistan&#39;s policies since 1947. The first major sectarian clash in Gilgit-Baltistan occurred
                                        when anti-Shia riots broke out in May 1988 over the sighting of the Ramadan moon. In 2012,
                                        sectarian violence resurged, triggered by a quick succession of well-organised killings
                                        targeting Shia travellers on the three routes that connect Gilgit-Baltistan with Islamabad,
                                        killing more than sixty innocent people.
                                        Besides, the China-Pakistan Economic Corridor (CPEC), intended to connect Western China
                                        to the Indian Ocean via Pakistan, cuts through the territory of Gilgit-Baltistan and is directly
                                        affecting more than 400,000 indigenous people and at least 200 square kilometres of natural
                                        environment and cultural heritage sites. The implementation of the project is being violently
                                        enforced against the will of the local population, who view the CPEC as a threat to their
                                        culture and natural resources.
                                        Beyond the CPEC, Pakistan plans to build five mega dams in the disputed area, in violation
                                        of the resolutions adopted by the United Nations Commission for India and Pakistan
                                        (UNCIP). Altered stream flow and nutrient contents, for example, are expected to cause
                                        changes in the habitat, resulting in other downstream effects on water supply and fisheries.
                                        The people of Gilgit-Baltistan firmly believe that Pakistan has no right to build a dam in an
                                        area which is disputed and whose fate is still to be settled under the UNCIP resolutions.
                                        Finally, for over six decades now, Gilgit-Baltistan has seen systematic human rights
                                        violations occurring on its soil. Its people continue to live in a constitutional limbo, where the
                                        Pakistani government does not include the region in its constitution but doesn&#39;t give its
                                        people their right to self-determination or political representation either. The population of
                                        Gilgit-Baltistan is also stripped from its freedom of movement, of speech, its right to peaceful
                                        protest and freedom of association.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Area :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        72,971 km².
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Gilgit
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Population :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        1.9 million.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> Languages :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Urdu, Shina, Burushaski, Balti, Tibetan, Wakhi, Khowar.
                                    </p>
                                    <h2 className="terr-second-heading-class" data-aos-duration="1500" data-aos={"fade-right"} data-aos-delay="100"> UNPO Representation :-</h2>
                                    <p className="pakistanBoldPara" data-aos-duration="1500" data-aos={"fade-left"} data-aos-delay="100">
                                        Gilgit-Baltistan Democratic Alliance.
                                    </p>
                                </section>
                            </div>
                        </Content>
                        <MyFooter />
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default Gilgit