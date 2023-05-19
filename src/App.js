import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import DogDetail from "./components/DogDetail/DogDetail";
import DogCreation from "./components/DogCreation/DogCreation";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/dogs/:id" component={DogDetail} />
        <Route path="/newDog/" component={DogCreation} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
