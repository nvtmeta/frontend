import "./App.scss";
import Product from "./components/Products/products";
import "react-image-lightbox/style.css";
import Nav from "./components/navigation/Nav.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OtpAu from "./components/OTP/OtpAu";
import Youtube from "./components/Weather/Youtube";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Products">
          <Product />
        </Route>
        <Route path="/Otp">
          <OtpAu />
        </Route>
        <Route path="/Weather">
          <Youtube />
        </Route>
        <Route path="/home">
          <div className="App">
            <div>ok</div>
          </div>
        </Route>
        <Route path="*">
          <div>404 NOT FOUND </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
