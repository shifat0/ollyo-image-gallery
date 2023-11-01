import "./App.css";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <div className="app">
      <div className="container">
        <section className="action">
          <div className="action-check">
            <input type="checkbox" />
            <label htmlFor="checkbox">0 Files Selected</label>
          </div>
          <span>Delete files</span>
        </section>
        <Gallery />
      </div>
    </div>
  );
}

export default App;
