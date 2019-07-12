import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class AddPost extends Component {
  state = {
    title: "",
    content: "",
    author_id: 1,
    redirect: false
  };

  setRedirect = () =>{
    this.setState({
      redirect: true
    })
  };

  renderRedirect = () =>{
    if(this.state.redirect){
      return <Redirect to='/' />
    }
  }

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleContentChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = async () => {
    const url = "http://localhost:3000/v1/post/add";

    const formData = this.state;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    if(response.ok){
      this.setRedirect();
      return this.renderRedirect();
    } else{
      console.log("Failed to add post");
    }
  };

  render() {
    return (
      <div>
        <h2>Add A Post:</h2>
        {this.renderRedirect()}
        <span>Title:</span>
        <span>
          <input
            onChange={this.handleTitleChange}
            value={this.state.title}
            type="text"
          />
        </span>
        <span>Content:</span>
        <span>
          <input
            onChange={this.handleContentChange}
            value={this.state.content}
            type="text"
          />
        </span>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default AddPost;
