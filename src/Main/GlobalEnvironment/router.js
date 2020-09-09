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




function Routes(myProps) {
    return (
        <Router>
            <Switch>
                <Route path={`/`} component={props => <Home {...props} setPagePath={myProps.setPagePath("Home")}/>}  key="0" exact />
                <Route path={`/About`} component={props => <AboutUs {...props} setPagePath={myProps.setPagePath("About")}/>}  key="1" />
                <Route path={`/Services`} component={props => <Services {...props} setPagePath={myProps.setPagePath("Services")}/>}  key="2" />
                <Route path={`/Blogs`} component={props => <Blogs {...props} setPagePath={myProps.setPagePath("Blogs")}/>}  key="3" />
                <Route path={`/Contact`} component={props => <ContactUs {...props} setPagePath={myProps.setPagePath("Contact")}/>}  key="4" />
                <Route path={`/TAndC`} component={props => <TandC {...props} setPagePath={myProps.setPagePath("TAndC")}/>}  key="5" />
                <Route path={`/AreaOfWorking`} component={props => <AreaOfWorking {...props} setPagePath={myProps.setPagePath("AreaOfWorking")}/>}  key="6" exact />
                <Route path={`/AreaOfWorking/Children`} component={props => <Children {...props} setPagePath={myProps.setPagePath("Children")}/>}  key="7" exact/>
                <Route path={`/PrivacyPolicies`} component={props => <PrivacyPolicies {...props} setPagePath={myProps.setPagePath("PrivacyPolicies")}/>}  key="8" />
                <Route path={`/Comparison`} component={props => <Comparison {...props} setPagePath={myProps.setPagePath("Comparison")}/>}  key="9" />
                <Route path={`/NewsAndEvents`} component={props => <NewsAndEvents {...props} setPagePath={myProps.setPagePath("NewsAndEvents")}/>}  key="10" />
                <Route path={`/ConsultationAndEvaluation`} component={props => <ConsultationAndEvaluation {...props} setPagePath={myProps.setPagePath("ConsultationAndEvaluation")}/>}  key="11" />
                <Route path={`/ArticlesAndBlogs`} component={props => <ArticlesAndBlogs {...props} setPagePath={myProps.setPagePath("ArticlesAndBlogs")}/>}  key="12" />
                <Route path={`/ReferralsAndLinks`} component={props => <ReferralsAndLinks {...props} setPagePath={myProps.setPagePath("ReferralsAndLinks")}/>}  key="13" />
                <Route path={`/EducatingAboutSocialWork`} component={props => <EducatingAboutSocialWork {...props} setPagePath={myProps.setPagePath("EducatingAboutSocialWork")}/>}  key="14" />
                <Route path={`/PWAAndChromeLessBrowsing`} component={props => <PWAAndChromeLessBrowsing {...props} setPagePath={myProps.setPagePath("PWAAndChromeLessBrowsing")}/>}  key="15" />
                <Route path={`/SMM`} component={props => <SMM {...props} setPagePath={myProps.setPagePath("SMM")}/>}  key="16" />
                <Route path={`/TheGraphicGuru`} component={props => <TheGraphicGuru {...props} setPagePath={myProps.setPagePath("TheGraphicGuru")}/>}  key="17" />
                <Route path={`/Admin/SignIn`} component={props => <AdminSignIn {...props} setPagePath={myProps.setPagePath("SignIn")}/>}  key="18" exact />
                <Route path={`/Admin/DashBoard`} component={props => <AdminDashBoard {...props} setPagePath={myProps.setPagePath("DashBoard")}/>}  key="19" exact />
                <Route path={`/Territories`} component={props => <Territories {...props} setPagePath={myProps.setPagePath("Territories")}/>}  key="20" exact />
                <Route path={`/Territories/Pakistan`} component={props => <Pakistan {...props} setPagePath={myProps.setPagePath("Pakistan")}/>}  key="21" />
                <Route path={`/Territories/Sindh`} component={props => <Sindh {...props} setPagePath={myProps.setPagePath("Sindh")}/>}  key="22" />
                <Route path={`/Territories/Punjab`} component={props => <Punjab {...props} setPagePath={myProps.setPagePath("Punjab")}/>}  key="23" />
                <Route path={`/Territories/Balochistan`} component={props => <Balochistan {...props} setPagePath={myProps.setPagePath("Balochistan")}/>}  key="24" />
                <Route path={`/Territories/KPK`} component={props => <KPK {...props} setPagePath={myProps.setPagePath("KPK")}/>}  key="25" />
                <Route path={`/Territories/Gilgit`} component={props => <Gilgit {...props} setPagePath={myProps.setPagePath("Gilgit")}/>}  key="26" />
                <Route path={`/Territories/Kashmir`} component={props => <Kashmir {...props} setPagePath={myProps.setPagePath("Kashmir")}/>}  key="27" />
                <Route path={`/AboutSocioLinkage`} component={props => <AboutUs {...props} setPagePath={myProps.setPagePath("AboutSocioLinkage")}/>}  key="28" />
                <Route path={`/AreaOfWorking/Community`} component={props => <Community {...props} setPagePath={myProps.setPagePath("Community")}/>}  key="29" exact/>
                <Route path={`/AreaOfWorking/Drug-Rehabilitation`} component={props => <DrugRehabilitation {...props} setPagePath={myProps.setPagePath("Rehabilitation")}/>}  key="31" exact/>
                <Route path={`/AreaOfWorking/Education`} component={props => <Education {...props} setPagePath={myProps.setPagePath("Education")}/>}  key="31" exact/>
                <Route path={`/AreaOfWorking/General-Health`} component={props => <GeneralHealth {...props} setPagePath={myProps.setPagePath("Health")}/>}  key="32" exact/>
                <Route path={`/AreaOfWorking/Mental-Health`} component={props => <MentalHealth {...props} setPagePath={myProps.setPagePath("Health")}/>}  key="33" exact/>
                <Route path={`/AreaOfWorking/Special-Needs`} component={props => <SpecialNeeds {...props} setPagePath={myProps.setPagePath("Needs")}/>}  key="34" exact/>
                <Route path={`/AreaOfWorking/Senior-Citizens`} component={props => <SeniorCitizens {...props} setPagePath={myProps.setPagePath("Citizens")}/>}  key="35" exact/>
                <Route path={`/AreaOfWorking/Vocation`} component={props => <Vocation {...props} setPagePath={myProps.setPagePath("Vocation")}/>}  key="36" exact/>
                <Route path={`/AreaOfWorking/Women`} component={props => <Women {...props} setPagePath={myProps.setPagePath("Women")}/>}  key="37" exact/>
                <Route path={`/AreaOfWorking/Others`} component={props => <Others {...props} setPagePath={myProps.setPagePath("Others")}/>}  key="38" exact/>
                <Route path={`/FAQ`} component={props => <FAQ {...props} setPagePath={myProps.setPagePath("FAQ")}/>}  key="39" exact/>
                <Route path={`/PricingPlans`} component={props => <PricingPlans {...props} setPagePath={myProps.setPagePath("PricingPlans")}/>}  key="40" exact/>
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


