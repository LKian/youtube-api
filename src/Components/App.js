import React from "react";
import Search from "./Search";
import youtube from "../APIs/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: APP_KEY,
      },
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <Search onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

// onTermSubmit = async term => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//         part: "snippet",
//         maxResults: 5,
//         type: 'video',
//         key: KEY
//       }
//     });
