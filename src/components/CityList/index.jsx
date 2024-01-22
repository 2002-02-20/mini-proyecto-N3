// CityList.js
import React, { useEffect, useState } from "react";
import { getData } from "../../App";
import "./CityList.css";

export default function CityList({ setSearchValue }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datajson = await getData();
        setData(datajson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCityClick = (city) => {
    setSearchValue(city);
  };

  return (
    <>
      {data.map((city, index) => (
        <ul className="ulCityList" key={index}>
          <div className="iconLocation">
            <li className="liCityList" onClick={() => handleCityClick(city)}>
              <span className="material-symbols-outlined">location_on</span>
              {city}
            </li>
          </div>
        </ul>
      ))}
    </>
  );
}
