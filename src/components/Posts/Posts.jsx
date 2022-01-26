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
    showPosts: true,
    count: true,
  };

  togglePostHandler = () => {
    this.setState({
      showPosts: !this.state.showPosts,
    });
  };

  render() {
    let posts = null;
    if (this.state.showPosts) {
      posts = (
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
      );
    }

    return (
      <div>
        {this.state.count !== true && " if true this will count displayed"}
        <h2 className="text-2xl my-3">{this.state.postTitle}</h2>

        <div>
          <button
            onClick={this.togglePostHandler}
            className="px-5 py-3 bg-red-500 text-white"
          >
            {this.state.showPosts ? "Hide Posts" : "Show Posts"}
          </button>
        </div>
        <hr />

        {this.state.showPosts && (
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
        )}
      </div>
    );
  }
}

export default Posts;
