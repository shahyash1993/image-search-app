import React, { Component } from "react";

class ImageCard extends Component {
  state = {
    span: 0
  };

  //in constructor, 'props'; but in render, 'this.props'
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(")", this.imageRef);
    // console.log("))", this.imageRef.current);

    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);

    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    this.setState({ span });
  };

  render() {
    const { urls, description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
