import React from 'react';

function ImageList(props) {
  console.log(props.imageList)
  const images = props.imageList.map((image,index) => {
    return(
      <div key={index}>
        <img src={image.urls.full}/>
      </div>
    )
  })
  return(
    <div>
      {images}
    </div>)
}
  

export default ImageList;