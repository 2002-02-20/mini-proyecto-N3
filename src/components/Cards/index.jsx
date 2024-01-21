import React from "react";
import "./Cards.css";

const Cards = ({
  imgHotel,
  superHost,
  description,
  punctuation,
  descriptionOfRoom,
  bed,
}) => {
  return (
    <>
      <li className="containerHotels transform hover:scale-110 transition duration-300 ease-in-out">
        <img src={imgHotel} alt="hoteles a menor precio" className="imgHotel" />
        <div className="infoOfHotelsContainer">
          <div className="btnAndDescription ">
            {superHost && <button className="btnSuperHost">Super Host </button>}
            <p className="descriptionRoom">{description}</p>

            <p className="descriptionBed">{bed !== null ? `${bed} beds` : ""}</p>



          </div>
          <div className="starAndPunctuation">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14.43 8.86L21 9.15L16.62 14.64L17.85 21L12 18.65L6.15 21L7.38 14.64L3 9.15L9.57 8.86L12 2Z"
                fill="#FF5A5F"
              />
            </svg>
            <p className="textToStar">{punctuation}</p>
          </div>
        </div>

        <p>
          <strong>{descriptionOfRoom}</strong>
        </p>
      </li>
    </>
  );
};

export default Cards;
