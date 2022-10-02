import logo from './logo.svg';
import './App.css';
import Navbar from './components/Router/Navbar';
import Allroutes from './components/Router/Allrouter';
import Home from "./components/pages/home"
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Allroutes></Allroutes>
      <Footer/>
     
     
    </div>
  );
}

export default App;
