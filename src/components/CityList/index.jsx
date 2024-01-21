import React, { useEffect, useState } from "react";
import { getData } from "../../App";

import "./CityList.css";
export default function CityList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datajson = await getData(); // Utiliza la función getData
        setData(datajson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
     {data.map((city, index) => (
        <ul
          className="ulCityList"
          key={index}
          onClick={() => {
            setSearchValue(city); // Asegúrate de que setSearchValue está definido en el componente padre
          }}
        >
          <div className="iconLocation">
            <li className="liCityList">
              <span className="material-symbols-outlined">location_on</span>
              {city}
            </li>
          </div>
        </ul>
      ))}

        
      {/* <ul className="ulCityList">
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

      </ul> */}
    </>
  );
}
