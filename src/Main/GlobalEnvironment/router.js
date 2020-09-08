import React from 'react';
import Home from "../Pages/Home/Home.js";
import AboutUs from "../Pages/About/About.js";
import Services from "../Pages/Services/Services.js";
import Blogs from "../Pages/Blogs/Blogs.js";
import ContactUs from "../Pages/Contact/Contact.js";
import FAQ from "../Pages/FAQ/FAQ";
import PricingPlans from "../Pages/PricingPlans/PricingPlans";
import TandC from "../Pages/TandC/TandC.js";
import PrivacyPolicies from "../Pages/PrivacyPolicies/PrivacyPolicies.js";
import Comparison from "../Pages/Cards/Comparison/Comparison.js";
import NewsAndEvents from "../Pages/Cards/NewsAndEvents/NewsAndEvents.js";
import ConsultationAndEvaluation from "../Pages/Cards/ConsultationAndEvaluation/ConsultationAndEvaluation.js";
import ArticlesAndBlogs from "../Pages/Cards/ArticlesAndBlogs/ArticlesAndBlogs.js";
import ReferralsAndLinks from "../Pages/Cards/ReferralsAndLinks/ReferralsAndLinks.js";
import EducatingAboutSocialWork from "../Pages/Cards/EducatingAboutSocialWork/EducatingAboutSocialWork.js";
import PWAAndChromeLessBrowsing from "../Pages/Cards/PWAAndChromeLessBrowsing/PWAAndChromeLessBrowsing.js";
import SMM from "../Pages/Cards/SMM/SMM.js";
import TheGraphicGuru from "../Pages/Cards/TheGraphicGuru/TheGraphicGuru.js";
import AdminSignIn from "../Components/Admin/SignIn/SignIn";
import AdminDashBoard from "../Components/Admin/DashBoard/DashBoard";
import Territories from "../Pages/Territories/Territories";
import Pakistan from "../Pages/Territories/Pakistan/Pakistan";
import Sindh from "../Pages/Territories/Sindh/Sindh";
import Punjab from "../Pages/Territories/Punjab/Punjab";
import Balochistan from "../Pages/Territories/Balochistan/Balochistan";
import KPK from "../Pages/Territories/KPK/KPK";
import Gilgit from "../Pages/Territories/Gilgit/Gilgit";
import Kashmir from "../Pages/Territories/Kashmir/Kashmir";
import AreaOfWorking from "../Pages/AreaOfWorking/AreaOfWorking";
import Children from "../Pages/CardsAreaOfWorking/Children/Children";
import Community from "../Pages/CardsAreaOfWorking/Community/Community";
import DrugRehabilitation from "../Pages/CardsAreaOfWorking/DrugRehabilitation/DrugRehabilitation";
import Education from "../Pages/CardsAreaOfWorking/Education/Education";
import GeneralHealth from "../Pages/CardsAreaOfWorking/GeneralHealth/GeneralHealth";
import MentalHealth from "../Pages/CardsAreaOfWorking/MentalHealth/MentalHealth";
import SpecialNeeds from "../Pages/CardsAreaOfWorking/SpecialNeeds/SpecialNeeds";
import SeniorCitizens from "../Pages/CardsAreaOfWorking/SeniorCitizens/SeniorCitizens";
import Vocation from "../Pages/CardsAreaOfWorking/Vocation/Vocation";
import Women from "../Pages/CardsAreaOfWorking/Women/Women";
import Others from "../Pages/CardsAreaOfWorking/Others/Others";
import { NGOsRoute } from "./contentRawData";
import NGOsPage from "../Pages/NGOsPages/NGOsPages";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";




function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route path={`/`} component={props => <Home {...props} />} page="`}" key="0" exact />
                <Route path={`/About`} component={props => <AboutUs {...props} />} page="About" key="1" />
                <Route path={`/Services`} component={props => <Services {...props} />} page="Services" key="2" />
                <Route path={`/Blogs`} component={props => <Blogs {...props} />} page="Blogs" key="3" />
                <Route path={`/Contact`} component={props => <ContactUs {...props} />} page="Contact" key="4" />
                <Route path={`/TAndC`} component={props => <TandC {...props} />} page="TAndC" key="5" />
                <Route path={`/AreaOfWorking`} component={props => <AreaOfWorking {...props} />} page="AreaOfWorking" key="6" exact />
                <Route path={`/AreaOfWorking/Children`} component={props => <Children {...props} />} page="Children" key="7" exact/>
                <Route path={`/PrivacyPolicies`} component={props => <PrivacyPolicies {...props} />} page="PrivacyPolicies" key="8" />
                <Route path={`/Comparison`} component={props => <Comparison {...props} />} page="Comparison" key="9" />
                <Route path={`/NewsAndEvents`} component={props => <NewsAndEvents {...props} />} page="NewsAndEvents" key="10" />
                <Route path={`/ConsultationAndEvaluation`} component={props => <ConsultationAndEvaluation {...props} />} page="ConsultationAndEvaluation" key="11" />
                <Route path={`/ArticlesAndBlogs`} component={props => <ArticlesAndBlogs {...props} />} page="ArticlesAndBlogs" key="12" />
                <Route path={`/ReferralsAndLinks`} component={props => <ReferralsAndLinks {...props} />} page="ReferralsAndLinks" key="13" />
                <Route path={`/EducatingAboutSocialWork`} component={props => <EducatingAboutSocialWork {...props} />} page="EducatingAboutSocialWork" key="14" />
                <Route path={`/PWAAndChromeLessBrowsing`} component={props => <PWAAndChromeLessBrowsing {...props} />} page="PWAAndChromeLessBrowsing" key="15" />
                <Route path={`/SMM`} component={props => <SMM {...props} />} page="SMM" key="16" />
                <Route path={`/TheGraphicGuru`} component={props => <TheGraphicGuru {...props} />} page="TheGraphicGuru" key="17" />
                <Route path={`/Admin/SignIn`} component={props => <AdminSignIn {...props} />} page="AdSignIn" key="18" exact />
                <Route path={`/Admin/DashBoard`} component={props => <AdminDashBoard {...props} />} page="AdDashBoard" key="19" exact />
                <Route path={`/Territories`} component={props => <Territories {...props} />} page="Territories" key="20" exact />
                <Route path={`/Territories/Pakistan`} component={props => <Pakistan {...props} />} page="Pakistan" key="21" />
                <Route path={`/Territories/Sindh`} component={props => <Sindh {...props} />} page="Sindh" key="22" />
                <Route path={`/Territories/Punjab`} component={props => <Punjab {...props} />} page="Punjab" key="23" />
                <Route path={`/Territories/Balochistan`} component={props => <Balochistan {...props} />} page="Balochistan" key="24" />
                <Route path={`/Territories/KPK`} component={props => <KPK {...props} />} page="KPK" key="25" />
                <Route path={`/Territories/Gilgit`} component={props => <Gilgit {...props} />} page="Gilgit" key="26" />
                <Route path={`/Territories/Kashmir`} component={props => <Kashmir {...props} />} page="Kashmir" key="27" />
                <Route path={`/AboutSocioLinkage`} component={props => <AboutUs {...props} />} page="AboutSocioLinkage" key="28" />
                <Route path={`/AreaOfWorking/Community`} component={props => <Community {...props} />} page="Community" key="29" exact/>
                <Route path={`/AreaOfWorking/Drug-Rehabilitation`} component={props => <DrugRehabilitation {...props} />} page="Drug-Rehabilitation" key="31" exact/>
                <Route path={`/AreaOfWorking/Education`} component={props => <Education {...props} />} page="Education" key="31" exact/>
                <Route path={`/AreaOfWorking/General-Health`} component={props => <GeneralHealth {...props} />} page="General-Health" key="32" exact/>
                <Route path={`/AreaOfWorking/Mental-Health`} component={props => <MentalHealth {...props} />} page="Mental-Health" key="33" exact/>
                <Route path={`/AreaOfWorking/Special-Needs`} component={props => <SpecialNeeds {...props} />} page="Special-Needs" key="34" exact/>
                <Route path={`/AreaOfWorking/Senior-Citizens`} component={props => <SeniorCitizens {...props} />} page="Senior-Citizens" key="35" exact/>
                <Route path={`/AreaOfWorking/Vocation`} component={props => <Vocation {...props} />} page="Vocation" key="36" exact/>
                <Route path={`/AreaOfWorking/Women`} component={props => <Women {...props} />} page="Women" key="37" exact/>
                <Route path={`/AreaOfWorking/Others`} component={props => <Others {...props} />} page="Others" key="38" exact/>
                <Route path={`/FAQ`} component={props => <FAQ {...props} />} page="FAQ" key="39" exact/>
                <Route path={`/PricingPlans`} component={props => <PricingPlans {...props} />} page="PricingPlans" key="40" exact/>
                {
                    NGOsRoute.map((item, i) =>
                        <Route key={i + 40} path={`/${item.link}`} exact >
                            <NGOsPage item={item} />
                        </Route>
                        )
                }
            </Switch>
        </Router>
    );
}

export default Routes;


