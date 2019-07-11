import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddPost from "./AddPost";

class BlogList extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    //lifecycle method
    const posts = await this.loadData();
    this.setState({
      posts
    });
  }

  loadData = async () => {
    const url = "http://localhost:3000/v1/all";
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <h2>Blog Posts</h2>
        <ul>
          {posts.map(post => {
            return (
              <li key={`post-${post.id}`}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
        <AddPost />
      </>
    );
  }
}

export default BlogList;
