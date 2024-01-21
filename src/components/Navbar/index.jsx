import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Modal from "../Modal/Modal";

const Navbar = ({
  img,

  searchValue,
  setSearchValue,
  search,

  searchGuests,
  setsearchGuests,

  isSearchVisible,
  setIsSearchVisible,


}) => {
  /*  const [inputCity, setInputCity] = useState(40);
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
  }, []); */

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
        <button
        className=" transform hover:scale-110 transition duration-300 ease-in-out"
          type="button"
          onClick={() => setIsSearchVisible(!isSearchVisible)}
        >
          <div className="containerInputAndBtn">
            <input className="inputText1" value={searchValue || 'City'}/>
            <input className="inputText" value={searchGuests || 'Add Guests'}/>
            <span className="btnSearch">
              <span className="material-symbols-outlined">search</span>
            </span>
          </div>
        </button>
        {/* MODAL */}
      </nav>

      {isSearchVisible && (
        <Modal
          searchValue={searchValue}
          setSearchValue={setSearchValue}

          search={search}

          searchGuests={searchGuests}
          setsearchGuests={setsearchGuests}
          onClickCancel={clickCancel}
        />
      )}
    </>
  );
};

export default Navbar;
