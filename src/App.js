import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import AddPost from "./components/AddPost";

function App() {
  return (
    <Router>
      <Route path="/" exact component={BlogList} />
      <Route path="/post/:id?" component={BlogPost} />
      <Route path="/add" exact component={AddPost} />
    </Router>
  );
}

export default App;
