import "./App.css";
import Card from "./components/Card";
import Topnav from "./components/Topnav";
import NavBar from "./component/NavBar";

function App() {
  return (    
    <div className="container">
      <Topnav />
      <NavBar/>
      <Card />
    </div>    
  );
}

export default App;
