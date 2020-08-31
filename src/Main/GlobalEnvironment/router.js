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
import AreaOfWorking from "../Pages/AreaOfWorking/AreaOfWorking";
import Children from "../Pages/CardsAreaOfWorking/Children/Children"
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
                <Route path={`/About`} component={props=><AboutUs {...props}/>} exact />
                <Route path={`/Services`} component={props=><Services {...props}/>} exact />
                <Route path={`/Blogs`} component={props=><Blogs {...props}/>} exact />
                <Route path={`/Contact`} component={props=><ContactUs {...props}/>} exact />
                <Route path={`/TAndC`} component={props=><TandC {...props}/>} exact />
                <Route path={`/AreaOfWorking`} component={props=><AreaOfWorking {...props}/>} exact />
                <Route path={`/AreaOfWorking/Children`} component={props=><Children {...props}/>} exact />
                <Route path={`/PrivacyPolicies`} component={props=><PrivacyPolicies {...props}/>} exact />
                <Route path={`/Comparison`} component={props=><Comparison {...props}/>} exact />
                <Route path={`/NewsAndEvents`} component={props=><NewsAndEvents {...props}/>} exact />
                <Route path={`/ConsultationAndEvaluation`} component={props=><ConsultationAndEvaluation {...props}/>} exact />
                <Route path={`/ArticlesAndBlogs`} component={props=><ArticlesAndBlogs {...props}/>} exact />
                <Route path={`/ReferralsAndLinks`} component={props=><ReferralsAndLinks {...props}/>} exact />
                <Route path={`/EducatingAboutSocialWork`} component={props=><EducatingAboutSocialWork {...props}/>} exact />
                <Route path={`/PWAAndChromeLessBrowsing`} component={props=><PWAAndChromeLessBrowsing {...props}/>} exact />
                <Route path={`/SMM`} component={props=><SMM {...props}/>} exact />
                <Route path={`/TheGraphicGuru`} component={props=><TheGraphicGuru {...props}/>} exact />
                <Route path={`/Admin/SignIn`} component={props=><AdminSignIn {...props}/>} exact />
                <Route path={`/Admin/DashBoard`} component={props=><AdminDashBoard {...props}/>} exact />
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


