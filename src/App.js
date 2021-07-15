
import './App.css';
import Articles from './Component/Articles';
import User from "./Component/User"

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>skeleton</h1>
      </div>
      <div className="content">
        <Articles />
        <User />
      </div>
      
    </div>
  );
}

export default App;
