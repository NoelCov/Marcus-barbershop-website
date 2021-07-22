import "./App.css";

import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import HomePage from "./pages/home-page/home-page.component";
import GalleryPage from "./pages/gallery-page/gallery-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";

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
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
