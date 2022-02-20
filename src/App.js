import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";

function App() {
  return (
    <div className="main-container">
      <Search />
      <Countries />
    </div>
  );
}

export default App;
