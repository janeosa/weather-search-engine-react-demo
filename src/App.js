import "./App.css";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer.js";
export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <br />
      <br />
      <Footer />
    </div>
  );
}
