import React from "react";
import './CityList.css'
export default function CityList() {
  return (
    <>
      <ul className="ulCityList">
        <div className="iconLocation">
        <span class="material-symbols-outlined">location_on</span>
        <li className="liCityList">Helsinki, Finland</li>
        </div>
        <div className="iconLocation">
        <span class="material-symbols-outlined">location_on</span>
        <li className="liCityList">Helsinki, Finland</li>
        </div>
        <div className="iconLocation">
        <span class="material-symbols-outlined">location_on</span>
        <li className="liCityList">Helsinki, Finland</li>
        </div>
        <div className="iconLocation">
        <span class="material-symbols-outlined">location_on</span>
        <li className="liCityList">Helsinki, Finland</li>
        </div>

      </ul>
    </>
  );
}
