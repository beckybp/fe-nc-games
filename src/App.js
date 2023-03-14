import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { ReviewList } from "./components/ReviewList";
import { SingleReview } from "./components/SingleReview";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <Header />
      </Link>
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
