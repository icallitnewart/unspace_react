import { Route, Switch } from 'react-router-dom';
import "./css/style.css";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Media";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";

//components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  
  return (
    <div className="App">
      <Route path="/" component={Header}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/media/:type" component={Media}></Route>
      <Route exact path="/community/:type/:id?" component={Community}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/membership/:type" component={Membership}></Route>
      <Route path="/" component={Footer}></Route>
    </div>
  );
}

export default App;
