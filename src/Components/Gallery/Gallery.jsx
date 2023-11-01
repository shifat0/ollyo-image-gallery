import React from "react";
import { images } from "../../Utils/Images";
import imgLogo from "../../Asset/img-logo.png";
import "./gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      {images.map((img, index) => (
        <div
          className={`${index === 0 ? "img featured" : "img"}`}
          key={index}
          draggable
        >
          <img src={img.src} alt="product" />
          <div className="overlay">
            <input type="checkbox" name="checkbox" />
          </div>
        </div>
      ))}
      <label htmlFor="file" className="upload">
        <img className="img-logo" src={imgLogo} alt="add product" />
        <span>Add Images</span>
        <input type="file" id="file" />
      </label>
    </section>
  );
}

export default Gallery;
