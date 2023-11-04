import React, { useRef } from "react";
import imgLogo from "../../Asset/img-logo.png";
import "./gallery.css";

function Gallery({ gallery, setGallery, checkedImg, setCheckedImg }) {
  // index of the drag item
  const dragItem = useRef(null);
  // index of the place of drag item
  const placeDragItem = useRef(null);

  // function for moving drag items and sort them
  const handleSort = () => {
    let newGallery = [...gallery];
    // removing from array and storing the dragitem index
    let moveItem = newGallery.splice(dragItem.current, 1)[0];
    //replacing the place of where the dragitem is going to be placed
    newGallery.splice(placeDragItem.current, 0, moveItem);
    setGallery(newGallery);
  };

  // function for handling check or uncheck and push into an array for count
  const handleCheck = (e, img) => {
    let arr = [...checkedImg];
    // if checkbox is checked and arr doesn't includes the value only then push the image
    if (e.target.checked === true) {
      if (!arr.includes(img)) arr.push(img);
    }
    // removing item from arr if the checkbox is unchecked
    if (e.target.checked === false) arr.splice(arr.indexOf(img), 1);

    setCheckedImg(arr);
  };

  // function for uploading file
  const handleFileUpload = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        let uploadedImage = { src: reader.result };
        setGallery((prev) => [...prev, uploadedImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="gallery" onDragOver={(e) => e.preventDefault()}>
      {gallery.map((img, index) => (
        <div
          // toogling class for featured image
          className={`${index === 0 ? "img featured" : "img"}`}
          key={index}
          draggable
          onDragStart={(e) => (dragItem.current = index)}
          onDragEnter={() => (placeDragItem.current = index)}
          onDragEnd={handleSort}
        >
          <img src={img.src} alt="product" />
          {/* hover overlay */}
          <div
            className={`${
              checkedImg.includes(img) ? "overlay checked" : "overlay"
            }`}
          >
            <input
              type="checkbox"
              name="checkbox"
              onChange={(e) => handleCheck(e, img)}
              // checked only if img exists in checkedImg array then
              checked={checkedImg.includes(img)}
            />
          </div>
        </div>
      ))}
      {/* upload image */}
      <div className="upload">
        <label htmlFor="file">
          <img className="img-logo" src={imgLogo} alt="add product" />
          <span>Add Images</span>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e)}
          />
        </label>
      </div>
    </section>
  );
}

export default Gallery;
