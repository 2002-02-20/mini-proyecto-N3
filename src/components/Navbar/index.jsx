import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Modal from "./Modal";

const Navbar = ({
  img,

  searchValue,
  setSearchValue,
  search,

  searchBeds,
  setSearchBeds,
  searchGuests,

  isSearchVisible,
setIsSearchVisible
  
}) => {
  const [inputCity, setInputCity] = useState(40);
  const [inputGuests, setInputGuests] = useState(40);

  const inputCityRef = useRef(null);
  const inputGuestsRef = useRef(null);

  const anchoInputCity = () => {
    setInputCity(200);
    setInputGuests(40); // Cerrar el otro input
  };

  const anchoInputGuests = () => {
    setInputGuests(200);
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



  const clickCancel = () => {
    if (isSearchVisible) {
      setIsSearchVisible(false);
    }
  };

  return (
    <>
      <nav onClick={clickCancel}>
        <img
          src={img}
          alt="logo de la página"
          className="w-28 object-contain imgIcon"
        />
        {/* MODAL */}
        <button type="containerInputAndBtn" onClick={() => setIsSearchVisible(!isSearchVisible)}>
          <div className="containerInputAndBtn">
            <span className="inputText1">Helsinki, Finland</span>
            <span className="inputText">Add guests</span>
            <span className="btnSearch">
              <span className="material-symbols-outlined">search</span>
            </span>
          </div>
        </button>

        {/* MODAL */}

        

      </nav>
     

{isSearchVisible && (
      <Modal
      onClickCancel={clickCancel}
      />
      )}
    </>
  );
};

export default Navbar;
