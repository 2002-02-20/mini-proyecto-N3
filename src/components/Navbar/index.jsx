import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Modal from "../Modal/Modal";
import CityList from "../CityList";

const Navbar = ({
  img,

  searchValue,
  setSearchValue,
  search,

  searchGuests,
  setsearchGuests,

  abrirModal,
  setabrirModal,
}) => {
  const clickCancel = () => {
    if (abrirModal) {
      setabrirModal(false);
    }
  };

  const handleCityClick = (city) => {
    setSearchValue(city);
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
          onClick={() => setabrirModal(!abrirModal)}
        >
          <div className="containerInputAndBtn">
            <input
              className="inputText1"
              value={searchValue || "City"}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <input className="inputText" value={searchGuests || "Add Guests"} />
            <span className="btnSearch">
              <span className="material-symbols-outlined">search</span>
            </span>
          </div>
        </button>
        {/* MODAL */}
      </nav>

      {abrirModal && (
        <Modal
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          search={search}
          searchGuests={searchGuests}
          setsearchGuests={setsearchGuests}
          onClickCancel={clickCancel}
          handleCityClick={handleCityClick}
        />
      )}
    </>
  );
};

export default Navbar;
