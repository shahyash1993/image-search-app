import React from "react";

class SearchBar extends React.Component {
  state = {
    searchText: "care"
  };

  //on+<name of the element>+<event> => on+input+change
  //not used inside
  onInputChange = ev => {
    this.setState({
      searchText: ev.target.value
    });

    //logging info
    console.log(
      "ev.target.name: " + ev.target.name + "\nevent.target.value: ",
      ev.target.value,
      "\nthis.state.searchText:" + this.state.searchText
    );

    //API request
    //works
    this.props.onSearchSubmit(ev.target.value);

    //doesn't work
    //this.props.onSearchSubmit(this.state.searchText);
  };

  onFormSubmit = ev => {
    ev.preventDefault();
    this.props.onSearchSubmit(this.state.searchText);
    //    console.log(this.state.searchText);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Image Search:</label>
            <input
              type="text"
              name="inputSearch"
              value={this.state.searchText}
              onChange={this.onInputChange}
              //another approach:
              // onChange={ev => {
              //   this.setState({ searchText: ev.target.value.toUpperCase() });
              // }}
              placeholder="Search here.."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
