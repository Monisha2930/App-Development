import React from 'react'
import './Shoes.css';
function Shoes() {

  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title className='ekart-heading'></title>
    <div className="header">
      <h1>Exciting Offers exclusively for You!</h1>
      {/* <h2>Hover over images</h2> */}
    </div>
    <div className="flexbox_container">
      <div className="images image1" />
      <div className="images image2" />
      <div className="images image3" />
      <div className="images image4" />
      <div className="images image5" />
    </div>
  </>
  </div>
  )
}

export default Shoes