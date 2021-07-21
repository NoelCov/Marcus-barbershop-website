import "./App.css";

import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import HomePage from "./pages/homepage/homepage.component";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
