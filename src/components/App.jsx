//all the third party libraries imports.
import React from "react";
import Unsplash from "../api/Unsplash.jsx";
import EdibleSticker from "./EdibleSticker.jsx";

//all the project file imports.
import SearchBar from "./SearchBar.jsx";
import ImageList from "./ImageList.jsx";

class App extends React.Component {
  state = {
    images: []
  };

  //async-await is used instead of .then()
  //Alternative could be: Axios.get(___).then(promises => {console.log(promises.json())})
  //async onSearchSubmit(searchText) {
  onSearchSubmit = async searchText => {
    console.log(">>", searchText);
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: { searchText }
      }
    }); //end Axios.get

    //console.log(">>", response.data.results);
    console.log("this: ", this); //without arrow function 'this' is: props; with arrow func, 'this' is ref to class App.

    this.setState({
      images: response.data.results
    });
  }; //end of async func

  render() {
    return (
      <div className="ui container" style={{ marginTop: "100px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} ojire="holaish" />
        <ImageList images={this.state.images} />
        {/* <EdibleSticker /> */}
        {/* {el.firstChild}; */}

        <div />
      </div>
    );
  }
}

export default App;
