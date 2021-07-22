import "./App.css";

import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import HomePage from "./pages/home-page/home-page.component";
import GalleryPage from "./pages/gallery-page/gallery-page.component";

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
      <Footer />
    </div>
  );
}

export default App;
