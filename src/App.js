import "./App.css";
import Grid from "./Grid";

const options = ["pink", "blue", "orange"];

function App() {
  return (
    <div className="App">
      <Grid rows={6} columns={6} options={options} />
    </div>
  );
}

export default App;
