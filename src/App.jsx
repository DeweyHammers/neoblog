import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { receiveUsersData } from "./actions/users";
import { receivePostsData } from "./actions/posts";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Users from "./routes/Users";
import Posts from "./routes/Posts";
import NotFound from "./routes/NotFound";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveUsersData());
    dispatch(receivePostsData());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users/:id/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
