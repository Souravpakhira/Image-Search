import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ImageList from "../components/ImageList";
class App extends React.Component {
  state = {
    images: [],
    isLoading : false,
  };
  onSearchSubmit = async (term) => {
    this.setState({isLoading: true})

    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID KLbUisp0IKukRDWnpG61BwqNIFg2yxophdyVOHPvrCA",
      },
    });
    this.setState({
      images: response.data.results,
      isLoading : false
    });
    
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />

        {this.state.isLoading ? (
                <h1>Loading...</h1>
              ) : (
                <ImageList images={this.state.images} />
              )}
      </div>
    );
  }
}

export default App;
