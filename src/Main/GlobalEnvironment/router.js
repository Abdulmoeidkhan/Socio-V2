import React from 'react';
import Home from "../Pages/Home/Home.js";
import AboutUs from "../Pages/About/About.js";
import Services from "../Pages/Services/Services.js";
import Blogs from "../Pages/Blogs/Blogs.js";
import ContactUs from "../Pages/Contact/Contact.js";
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
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";




function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route path={`/`} component={props=><Home {...props}/>} exact />
                <Route path={`/About`} component={props=><AboutUs {...props}/>} />
                <Route path={`/Services`} component={props=><Services {...props}/>} />
                <Route path={`/Blogs`} component={props=><Blogs {...props}/>} />
                <Route path={`/Contact`} component={props=><ContactUs {...props}/>} />
                <Route path={`/TAndc`} component={props=><TandC {...props}/>} />
                <Route path={`/PrivacyPolicies`} component={props=><PrivacyPolicies {...props}/>} />
                <Route path={`/Comparison`} component={props=><Comparison {...props}/>} />
                <Route path={`/NewsAndEvents`} component={props=><NewsAndEvents {...props}/>} />
                <Route path={`/ConsultationAndEvaluation`} component={props=><ConsultationAndEvaluation {...props}/>} />
                <Route path={`/ArticlesAndBlogs`} component={props=><ArticlesAndBlogs {...props}/>} />
                <Route path={`/ReferralsAndLinks`} component={props=><ReferralsAndLinks {...props}/>} />
                <Route path={`/EducatingAboutSocialWork`} component={props=><EducatingAboutSocialWork {...props}/>} />
                <Route path={`/PWAAndChromeLessBrowsing`} component={props=><PWAAndChromeLessBrowsing {...props}/>} />
                <Route path={`/SMM`} component={props=><SMM {...props}/>} />
                <Route path={`/TheGraphicGuru`} component={props=><TheGraphicGuru {...props}/>} />
                <Route path={`/Admin/SignIn`} component={props=><AdminSignIn {...props}/>} />
                <Route path={`/Admin/DashBoard`} component={props=><AdminDashBoard {...props}/>} />
                <Route path={`/Territories`} component={props=><Territories {...props}/>} exact/>
                <Route path={`/Territories/Pakistan`} component={props=><Pakistan {...props}/>} />
                <Route path={`/Territories/Sindh`} component={props=><Sindh {...props}/>} />
                <Route path={`/Territories/Punjab`} component={props=><Punjab {...props}/>} />
                <Route path={`/Territories/Balochistan`} component={props=><Balochistan {...props}/>} />
                <Route path={`/Territories/KPK`} component={props=><KPK {...props}/>} />
                <Route path={`/Territories/Gilgit`} component={props=><Gilgit {...props}/>} />
                <Route path={`/Territories/Kashmir`} component={props=><Kashmir {...props}/>} />
                <Route path={`/AboutSocioLinkage`} component={props=><AboutUs {...props}/>} />
            </Switch>
        </Router>
    );
}

export default Routes;


