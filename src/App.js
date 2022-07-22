import "../src/styles/App.scss";
import Navbar1 from "./navbar1/Navbar1";
import Home from "./navbar1/Home";
import store1 from "../src/components/assets/Images/store1.png"


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
