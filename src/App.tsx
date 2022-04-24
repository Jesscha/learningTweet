import "./App.css";
import { useFireBaseCollection } from "./hooks/useFireBase";

function App() {
  const { handleAdd } = useFireBaseCollection();

  return (
    <div className="App">
      <h1>Welcome to learning tweet</h1>

      <button onClick={handleAdd}>add button</button>
    </div>
  );
}

export default App;
