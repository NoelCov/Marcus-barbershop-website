import "./App.css";

import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import HomePage from "./pages/home-page/home-page.component";
import GalleryPage from "./pages/gallery-page/gallery-page.component";
import AboutPage from "./pages/about-page/about-page.component";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Switch>
        <Route exact path="/gallery" component={GalleryPage} />
      </Switch>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
