import React, { useState } from "react";
import TotalGuests from "../TotalGuests";
import CityList from "../CityList";

export default function Modal({
  onClickCancel,
  searchValue,
  setSearchValue,
  searchGuests,
  setsearchGuests,
  search,
  handleCityClick,
}) {
  const [showModalCity, setshowModalCity] = useState(false);
  const [showModalGuests, setshowModalGuests] = useState(false);
  const [total, setTotal] = useState(0);
  const handleOpenModalGuests = () => {
    setshowModalGuests(true);
  };

  const handleCloseModalGuests = () => {
    setshowModalGuests(false);
  };

  const handleOpenModalCity = () => {
    setshowModalCity(true);
  };

  const handleCloseModalCity = () => {
    setshowModalCity(false);
  };

  return (
    <>
      <div className="containerModalInfo " onClick={(e) => e.stopPropagation()}>
        <button className="cancel" type="button" onClick={onClickCancel}>
          <span className="material-symbols-outlined spanCancel">cancel</span>
        </button>
        <div className="subContainerModalInfo">
          <input
            placeholder="City"
            value={searchValue || ""}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className="inputTextModal transform hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => {
              handleOpenModalCity();
              handleCloseModalGuests();
            }}
          />

          <input
            value={searchGuests || ""}
            onChange={setsearchGuests}
            type="text"
            className="inputTextModal transform hover:scale-110 transition duration-300 ease-in-out"
            placeholder="Add guests"
            onClick={() => {
              handleCloseModalCity();
              handleOpenModalGuests();
            }}
          />

          <div className="divBtnModal">
            <button
              type="button"
              className="btnSearchModal transform hover:scale-110 transition duration-300 ease-in-out"
              onClick={() => {
                search();
                onClickCancel();
              }}
            >
              <span className="material-symbols-outlined">search</span>
              Search
            </button>
          </div>
        </div>
        {showModalGuests && <TotalGuests setTotal={setTotal} />}
        {showModalCity && <CityList setSearchValue={setSearchValue} />}
      </div>
    </>
  );
}
