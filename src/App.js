import { createBrowserHistory } from "history";
import { Switch } from "react-router-dom";
import { Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}
