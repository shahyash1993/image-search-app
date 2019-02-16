import React, { Component } from "react";

class ImageCard extends Component {
  state = {};

  //in constructor, 'props'; but in render, 'this.props'
  constructor(props) {
    super(props);
    this.imageRef = React.createRef;
  }

  render() {
    const { urls, description } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} src={urls.small} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
