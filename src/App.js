import "./App.scss";
import Navbar1 from "./components/navbar1/Navbar1";
import Home from "./components/navbar1/Home";
import store1 from "./components/assets/Images/store1.png"


function App() {
  return (
    <div>
      <div className="App">
        <Navbar1 />
      </div>
      <div className="container">
        <div>
          <img src={store1} width="600px" height="350px" />
          <Home name="Welcome!" />
        </div>
       
      </div>
    </div>
  );
}

export default App;
