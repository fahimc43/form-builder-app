import Home from "./pages/Home";
import Navbar from "../src/pages/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Generate from "./pages/Generate";
import FormMake from "./pages/FormMake";
import NameFrom from "./pages/NameFrom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/generate">
          <Generate></Generate>
        </Route>
        <Route path="/form_make/:id">
          <FormMake></FormMake>
        </Route>
        <Route path="/create_from">
          <NameFrom></NameFrom>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
