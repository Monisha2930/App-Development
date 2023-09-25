import React from "react";
import './pro.css'
function addHoverEffect()
{
    
    const images = document.getElementsByClassName("images");
  
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("mouseover", () => {
        for (let j = 0; j < images.length; j++) {
          images[j].classList.add("passiveimage");
        }
        images[i].classList.remove("passiveimage");
      });
  
      images[i].addEventListener("mouseout", () => {
        for (let j = 0; j < images.length; j++) {
          images[j].classList.remove("passiveimage");
        }
      });
    }
  }
export default addHoverEffect
  

  