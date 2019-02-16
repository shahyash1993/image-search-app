import React, { Component } from "react";
import $ from "jquery";

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
    //console.log($("#imgId"));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("cdidUpdate");
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);

    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 11 + 1);
    this.setState({ span });
  };

  render() {
    const { urls, description } = this.props.image;

    let ret = "";
    // if (this.state.span === 0) {
    //   console.log("span=0");
    // } else {
    ret = (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
    //}

    return ret;
  }
}

export default ImageCard;
