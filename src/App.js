import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/homePage";
import NotFound from "./pages/notFound";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
