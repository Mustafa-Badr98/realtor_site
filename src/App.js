import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/homePage";
import NotFound from "./pages/notFound";
import LoginPage from "./pages/loginPage";
import Sell from './pages/Sell'
import MyNavbar from "./components/MyNavBar";

function App() {
  return (
    <>
      <BrowserRouter>
      <MyNavbar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/*" component={NotFound} />
         


        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
