import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ img }) => {
  const [inputCity, setInputCity] = useState(40);
  const [inputGuests, setInputGuests] = useState(40);

  const inputCityRef = useRef(null);
  const inputGuestsRef = useRef(null);

  const anchoInputCity = () => {
    setInputCity(800);
    setInputGuests(40); // Cerrar el otro input
  };

  const anchoInputGuests = () => {
    setInputGuests(800);
    setInputCity(40); // Cerrar el otro input
  };

  const handleClickOutside = (event) => {
    if (
      inputCityRef.current &&
      !inputCityRef.current.contains(event.target) &&
      inputGuestsRef.current &&
      !inputGuestsRef.current.contains(event.target)
    ) {
      // Hacer algo al hacer clic fuera de los inputs (restablecer anchos en este caso)
      setInputCity(40);
      setInputGuests(40);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <img
          src={img}
          alt="logo de la página"
          className="w-28 object-contain"
        />
        <div className="containerInputAndBtn">
          <input
            type="text"
            className="inputText1"
            placeholder="City"
            style={{ width: `${inputCity}px`, transition: "width 0.5s" }}
            onClick={anchoInputCity}
            ref={inputCityRef}
          />

          <input
            type="text"
            className="inputText"
            placeholder="Add guests"
            style={{ width: `${inputGuests}px`, transition: "width 0.5s" }}
            onClick={anchoInputGuests}
            ref={inputGuestsRef}
          />

          <button type="button" className="btnSearch" onClick={() => ""}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
