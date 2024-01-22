import { useEffect, useState } from "react";
import Windbnb from "/logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import CityList from "./components/CityList";

export async function getData() {
  const fetchData = await fetch("stays.json");
  const datajson = await fetchData.json();
  const citys = Array.from(new Set(datajson.map((ciudad) => ciudad.city)));

  return citys;
}


function App() {
  const [abrirModal, setabrirModal] = useState(false);

  const [categorias, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  
  const [guests, setGuests] = useState("");

  const [enlistarCiudad, setEnlistarCiudad] = useState("");

  async function getData() {
    const fetchData = await fetch("stays.json");

    const datajson = await fetchData.json();
    setCategories(datajson);
    setFilteredCategories(datajson);

    const citys = Array.from(new Set(datajson.map((ciudad) => ciudad.city)));

    setEnlistarCiudad(citys);
  }

  /*  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/stays.json");
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredCategories(jsonData);

        const citys = Array.from(new Set(jsonData.map((imageData)=>imageData.city)));

        setCitys(citys);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }; */

  useEffect(() => {
    getData();
  }, []);

  const search = () => {
    const data = categorias.filter((categoria) => {
      const city = categorias === "" || categoria.city
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const guestsFilter =
        guests === "" || categoria.maxGuests >= parseInt(guests);
      return city && guestsFilter;
    });
    setFilteredCategories(data);
  };

  return (
    <>
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        
        search={search}
        searchGuests={guests}
        setsearchGuests={(e) => setGuests(e.target.value)}
        img={Windbnb}
        abrirModal={abrirModal}
        setabrirModal={setabrirModal}
        enlistarCiudad={enlistarCiudad}
      />

      <div className="tittle">
        <h1 className="text-3xl">
          <strong>Stays in Finland</strong>
        </h1>
        <span className="stays">12+ stays</span>
      </div>

      <ul className="masterContainer ">
        {filteredCategories &&
          filteredCategories.map((user) => (
            <Cards
              key={user.id}
              place={`${user.city}, ${user.country}`}
              imgHotel={user.photo}
              superHost={user.superHost}
              description={user.type}
              punctuation={user.rating}
              descriptionOfRoom={user.title}
              bed={user.beds}
            />
          ))}
      </ul>
      <footer>
        <p>
          created by{" "}
          <a href="">
            <strong>derekMoscui</strong>
          </a>
          - devChallenges.io
        </p>
      </footer>
     
    </>
  );
}

export default App;
