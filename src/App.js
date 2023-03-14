import "./App.css";
import { Header } from "./components/Header";
import { ReviewList } from "./components/ReviewList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
