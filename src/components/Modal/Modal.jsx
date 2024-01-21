import React from "react";
import TotalGuests from "../TotalGuests";
import CityList from "../CityList";

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
      <div className="containerModalInfo " onClick={(e) => e.stopPropagation()}>
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

          
          />

          <input
            value={searchGuests || ''}
            onChange={setsearchGuests}
            type="number"
            className="inputTextModal"
            placeholder="Add guests"
/*             onClick={() => setIsSearchVisible(!isSearchVisible)}
 */
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
        {/* {contadorModal && (

        
        )} */}
        <TotalGuests/>
        <CityList/>
      </div>
     
    </>
  );
}
