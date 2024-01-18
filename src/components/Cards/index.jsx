import React from "react";
import './Cards.css'

const Cards = ({
  imgHotel,
  superHost,
  description,
  punctuation,
  descriptionOfRoom,
  place
 
}) => {
  return (
    <>
      <li className="containerHotels ">
        <img src={imgHotel} alt="hoteles a menor precio" className="imgHotel" />
        <div className="infoOfHotelsContainer">
          <div className="btnAndDescription">
            <button className="btnSuperHost">{superHost}</button>
            <p className="descriptionRoom">{description}</p>
            
          </div>
          <div className="starAndPunctuation">
            <span className="material-symbols-outlined star">grade</span>
            <p className="textToStar">{punctuation}</p>
          </div>
        </div>
        {/* <p>{place}</p> */}
        <p>
          <strong>{descriptionOfRoom}</strong>
        </p>
      </li>
    </>
  );
};

export default Cards;
