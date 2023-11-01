import React, { useRef, useState } from "react";
import { images } from "../../Utils/Images";
import imgLogo from "../../Asset/img-logo.png";
import "./gallery.css";

function Gallery() {
  const [gallery, setGallery] = useState(images);
  // reference of the drag item
  const dragItem = useRef(null);
  // reference of the place of drag item
  const placeDragItem = useRef(null);

  const handleSort = () => {
    let newGallery = [...gallery];
    // removing from array and storing the dragitem index
    let moveItem = newGallery.splice(dragItem.current, 1)[0];
    //replacing the place of where the dragitem is going to be placed
    newGallery.splice(placeDragItem.current, 0, moveItem);
    setGallery(newGallery);
  };

  return (
    <section className="gallery">
      {gallery.map((img, index) => (
        <div
          // toogling class for featured image
          className={`${index === 0 ? "img featured" : "img"}`}
          key={index}
          draggable
          onDragStart={() => (dragItem.current = index)}
          onDragEnter={() => (placeDragItem.current = index)}
          onDragEnd={handleSort}
        >
          <img src={img.src} alt="product" />
          {/* hover overlay */}
          <div className="overlay">
            <input type="checkbox" name="checkbox" />
          </div>
        </div>
      ))}
      {/* upload image */}
      <label htmlFor="file" className="upload">
        <img className="img-logo" src={imgLogo} alt="add product" />
        <span>Add Images</span>
        <input type="file" id="file" />
      </label>
    </section>
  );
}

export default Gallery;
