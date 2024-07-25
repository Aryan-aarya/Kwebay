import "./App.css";
<<<<<<< HEAD
import NavBar from "./component/NavBar";
function App() {
  return (
    <div className="App w-screen h-screen flex flex-col">
    <NavBar/>
      <p>app</p>
    </div>
=======
import Card from "./components/Card";
import Topnav from "./components/Topnav";

function App() {
  return (    
    <div className="container">
      <Topnav />
      <Card />
    </div>    
>>>>>>> 9b0a208fb552d53d266b278fe0198f47230f1873
  );
}

export default App;
