import React from "react";
import "./Navbar.css";

export default function Modal({
  onClickCancel,
  searchValue,
  setSearchValue,
  searchGuests,
  setsearchGuests,
  search,
}) {
  return (
    <>
      <div className="containerModalInfo" onClick={(e) => e.stopPropagation()}>
        <button className="cancel" type="button" onClick={onClickCancel}>
          <span className="material-symbols-outlined spanCancel">cancel</span>
        </button>
        <div className="subContainerModalInfo">
          <input
            placeholder="City"
            value={searchValue || ''}
            onChange={setSearchValue}
            type="text"
            className="inputTextModal"
            /*  style={{ width: `${inputCity}px`, transition: "width 0.5s" }}
          onClick={anchoInputCity}
          ref={inputCityRef} */
          />

          <input
            value={searchGuests || ''}
            onChange={setsearchGuests}
            type="number"
            className="inputTextModal"
            placeholder="Add guests"
            /*   style={{ width: `${inputGuests}px`, transition: "width 0.5s" }}
          onClick={anchoInputGuests}
          ref={inputGuestsRef} */
          />

          <div className="divBtnModal">
            <button
              type="button"
              className="btnSearchModal"
              onClick={() => {
                search();
              }}
            >
              <span className="material-symbols-outlined">search</span>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
