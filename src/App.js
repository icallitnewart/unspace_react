import { Route, Switch } from 'react-router-dom';

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Media";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Login from "./pages/Login";

//components
import Header from "./components/common/Header";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/"><Header type="sub" /></Route>
      </Switch>
      
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/media" component={Media}></Route>
      <Route exact path="/community" component={Community}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/join" component={Join}></Route>
      <Route exact path="/login" component={Login}></Route>
    </div>
  );
}

export default App;
