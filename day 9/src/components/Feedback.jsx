import { useState } from "react";
import {ToastContainer,toast} from 'react-toastify';
import { FaStar } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

function Feedback() {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);
    
    const handleClick = (value) => { 
        setCurrentValue(value);
    };
    
    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    };
    
    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };
    
    const Onsubmit = () => {
    toast.success("successful", {autoClose:1000,position: toast.POSITION.BOTTOM_CENTER})
   
  };

  return (
    
    <div style={{fontFamily: "sans-serif",
        textAlign: "center"}}>
    <div style={styles.container}>
      <h2>Feedback: The Gift for Progress. </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          );
        })}
      </div>
      <textarea placeholder="What's your experience?" style={styles.textarea} />

      <button style={styles.button} onClick={Onsubmit}>Submit</button>
      <ToastContainer />
      
    </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row"
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  }
};

export default Feedback;