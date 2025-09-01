import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 

function App() {
  return (
    <>
    <div className="App">
      
      <Navbar Title="textUtils"/>
      <div className="container my-3">
      <TextForm heading="Enter text to analyze"/>
      </div>
    </div>
    </>
  );
}

export default App;
