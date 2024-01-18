import { useEffect, useState } from "react";
import Windbnb from "/logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Star from "/star.png";

function App() {
  const [users, setUsers] = useState([]);

  const [categorias, setCategories] = useState();
  const [filteredCategories, setFilteredCategories] = useState();
  const [searchValue, setSearchValue] = useState();

  async function getData() {
    const fetchData = await fetch("stays.json");

    const datajson = await fetchData.json();

    /* setUsers(datajson); */

    setCategories(datajson);
    setFilteredCategories(datajson);

  }

  useEffect(() => {
    getData();
  }, []);

  const search = () => {
    const data = categorias.filter((categoria) =>
      categoria.city.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCategories(data);
  };
  return (
    <>
      <Navbar
        searchValue={searchValue}
        setSearchValue={(e) => setSearchValue(e.target.value)}
        search={search}
        img={Windbnb}
        /* place={`${user.city}, ${user.country}`} */
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
              superHost={user.city}
              description={user.type}
              starsIcon={Star}
              punctuation={user.rating}
              descriptionOfRoom={user.title}
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
