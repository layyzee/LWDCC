import React, { Component } from "react";
import SinglePost from "../SinglePost/SinglePost";

export class Posts extends Component {
  state = {
    posts: [
      {
        title: "post 1",
        description: "post1 description",
      },
      {
        title: "post 2",
        description: "post2 description",
      },
    ],

    postTitle: "Posts List",
  };

  updateTitleHandler(title, e) {
    e.preventDefault();

    this.setState({
      postTitle: title,
    });
  }

  titleHandler = (title, e) => {
    e.preventDefault();
    console.log("updating via property");
    console.log(this);
    this.setState({
      postTitle: title,
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-2xl my-3">{this.state.postTitle}</h2>

        <div>
          <a
            href="http://google.com"
            className=" px-5 py-2 bg-red-500 rounded-3xl text-white"
            onClick={this.titleHandler.bind(this, "om sai ram")}
          >
            Update via property
          </a>
          <a
            href="http://google.com"
            className=" px-5 py-2 bg-red-500 rounded-3xl text-white"
            onClick={this.updateTitleHandler.bind(this, "modified")}
          >
            Update via method
          </a>
        </div>
        <hr />
        <div className="flex my-3">
          <SinglePost
            title={this.state.posts[0].title}
            description={this.state.posts[0].description}
          />
          <SinglePost
            title={this.state.posts[1].title}
            description={this.state.posts[1].description}
          />
        </div>
      </div>
    );
  }
}

export default Posts;
