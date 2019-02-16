import React from "react";

import ImageCard from "./ImageCard.jsx";

import "./ImageList.css";

const ImageList = props => {
  console.log("props.images=", props.images);

  //in list only the root elements to be returned has the prop 'key'
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;

    //   <div key={image.id}>
    {
      /* when there was destructuring. */
    }
    {
      /* <img src={urls.small} alt={description} /> */
    }
    // <ImageCard image={image} />
    //   </div>
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
