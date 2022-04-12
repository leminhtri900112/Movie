import { createBrowserHistory } from "history";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Router } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <Route path="/register" exact Component={Register} />
        <Route path="/login" exact Component={Login} />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}
