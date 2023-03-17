import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ReviewList } from "./components/ReviewList";
import { SingleReview } from "./components/SingleReview";

function App() {
  const [user, setUser] = useState("jessjelly");
  return (
    <div className="App">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
