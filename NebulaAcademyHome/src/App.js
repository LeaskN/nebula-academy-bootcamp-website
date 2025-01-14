import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NoMatch } from './pages/NoMatch';
import { NavigationBar } from './components/Global/NavigationBar';
import { Footer } from './components/Global/Footer';
// import { STEAMForKids } from './pages/STEAMForKids'
import { Educators } from './pages/Educators';
import { WorkforceDevelopment } from './pages/WorkforceDevelopment';
import { Philanthropy } from './pages/Philanthropy';
import { Staff } from './pages/Staff';
import { Application } from './pages/Application';
import { ApplicationPhase2 } from './pages/ApplicationPhase2';
import { Blog } from './pages/Blog';
import { AllBlogs} from './pages/AllBlogs';
import { Registration } from "./pages/Registration";
// import TestBlogPage from './components/Blog/test-blogs/TestBlogPage';
import CookieConsent from "react-cookie-consent";
import AllWorkshops from "./components/AllWorkshops/AllWorkshopsContent";
import { GuestSpeakerApplication } from "./pages/GuestSpeakerApplication";
import { Videos } from "./pages/Videos.js";

import ReactGA from "react-ga";
ReactGA.initialize("G-515JPPTG2L");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    console.log('V:4.12.21-D');
    return (
      <React.Fragment>
        <NavigationBar />
        <CookieConsent
          style={{ background: "#131520", paddingLeft: "75px" }}
          buttonStyle={{
            color: "#4e503b",
            borderRadius: "10px",
            shadow: "10px",
            backgroundColor: "white",
          }}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path ="/steam-for-kids" component={STEAMForKids}/> */}
            <Route path="/educators" component={Educators} />
            <Route path="/application/Phase2" component={ApplicationPhase2}/>
            <Route path="/application" component={Application}/>
            <Route path="/workforce-development" component={WorkforceDevelopment} />
            <Route path="/philanthropy" component={Philanthropy} />
            <Route path="/guestspeakerapplication" component={GuestSpeakerApplication} />
            <Route exact path="/workshops" component={AllWorkshops} />
            <Route path="/workshops/:id" component={Registration} />
            <Route path="/staff" component={Staff} />
            <Route path="/videos" component={Videos} />
            {/* <Route path="/blog/test-blog" component={TestBlogPage}/> */}
            <Route path="/blog/:post" render={routeProps => <Blog routeProps={routeProps}/>}/>
            <Route path="/blog" component={AllBlogs}/>
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;