import { useState } from "react";
import "./App.css";
import { images } from "./Utils/Images";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  const [gallery, setGallery] = useState(images);
  const [checkedImg, setCheckedImg] = useState([]);

  // Deleting checked images
  const handleDelete = () => {
    let newGallery = [...gallery];
    checkedImg.filter((item) => {
      // matching index of each cheked item and deleting from gallery
      newGallery.splice(newGallery.indexOf(item), 1);
      // after deleting, setting checkedImg state to an empty array
      return setCheckedImg([]);
    });
    setGallery(newGallery);
  };

  return (
    <div className="app">
      <section className="action">
        {checkedImg.length === 0 ? (
          <span className="header">Gallery</span>
        ) : (
          <>
            <div className="action-check">
              <input
                type="checkbox"
                id="checkbox"
                checked={checkedImg.length > 0}
              />
              <label htmlFor="checkbox">
                {checkedImg.length} Files Selected
              </label>
            </div>
            <span className="delete" onClick={handleDelete}>
              Delete {checkedImg.length === 1 ? "file" : "files"}
            </span>
          </>
        )}
      </section>
      {/* passing props to set the value of state from Gallery component */}
      <Gallery
        gallery={gallery}
        setGallery={setGallery}
        checkedImg={checkedImg}
        setCheckedImg={setCheckedImg}
      />
    </div>
  );
}

export default App;
