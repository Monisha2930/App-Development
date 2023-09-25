import React, { useEffect } from 'react';

function ProductDisplay() {
  useEffect(() => {
    const images = document.getElementsByClassName("images");

    const handleMouseOver = (i) => () => {
      for (let j = 0; j < images.length; j++) {
        images[j].classList.add("passiveimage");
      }
      images[i].classList.remove("passiveimage");
    };

    const handleMouseOut = () => {
      for (let j = 0; j < images.length; j++) {
        images[j].classList.remove("passiveimage");
      }
    };

    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("mouseover", handleMouseOver(i));
      images[i].addEventListener("mouseout", handleMouseOut);
    }

    // Clean up event listeners when the component unmounts
    return () => {
      for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener("mouseover", handleMouseOver(i));
        images[i].removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return (
    <div className="product-display">
      <div className="header">
        <h1>Creative way to display eCommerce products</h1>
        <h2>Hover over images</h2>
      </div>
      <div className="flexbox_container">
        <div className="images image1"></div>
        <div className="images image2"></div>
        <div className="images image3"></div>
        <div className="images image4"></div>
        <div className="images image5"></div>
      </div>
    </div>
  );
}

export default ProductDisplay;
