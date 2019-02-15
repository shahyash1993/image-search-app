import React from "react";

import "./ImageList.css";

const ImageList = props => {
  console.log("props.images=", props.images);

  //in list only the root elements to be returned has the prop 'key'
  const images = props.images.map(({ id, description, urls }) => (
    <div key={id}>
      <img src={urls.small} alt={description} />
    </div>
  ));

  return <div className="image-list">{images}</div>;
};

export default ImageList;
