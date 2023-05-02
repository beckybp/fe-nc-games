import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ReviewList } from "./components/ReviewList";
import { SingleReview } from "./components/SingleReview";
import { UserList } from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/" element={<ReviewList />} />
        <Route path="/category/:category" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
