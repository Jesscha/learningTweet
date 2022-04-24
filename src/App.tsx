import "./App.css";
import { useFireBaseCollection } from "./hooks/useFireBase";

function App() {
  useFireBaseCollection();

  return (
    <div className="App">
      <h1>Welcome to learning tweet</h1>
    </div>
  );
}

export default App;
