import { useEffect, useState } from "react";
import Windbnb from "/logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {

  const [isSearchVisible, setIsSearchVisible] = useState(false);


  const [beds, setBeds] = useState([]);
  const [filteredBeds, setFilteredBeds] = useState([]);
  const [searchBeds, setSearchBeds] = useState("");

  const [categorias, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function getData() {
    const fetchData = await fetch("stays.json");

    const datajson = await fetchData.json();
    setCategories(datajson);
    setFilteredCategories(datajson);

    setBeds(datajson);
    setFilteredBeds(datajson);
  }

  useEffect(() => {
    getData();
  }, []);

  

  const search = () => {
    const data = categorias.filter((categoria) =>
      categoria.city.toLowerCase().includes(searchValue.toLowerCase())
      
      /* categoria.maxGuests.toString().toLowerCase().includes(searchValue.toLowerCase()) */
      
    );
    const a = filteredBeds.map((user) => user.maxGuests);

    for (const iterator of a) {
      if (iterator <= searchValue) {
        /* setFilteredCategories(data); */
      }
    }

    setFilteredCategories(data);
  };

  const searchGuests = () => {
    const data = beds.filter(
      (categoria) =>
        categoria.maxGuests.toString().toLowerCase().includes(searchBeds.toLowerCase())
     
    );

    const a = filteredBeds.map((user) => user.maxGuests);

  
    for (const iterator of a) {
      if (iterator < searchValue) {

        setFilteredCategories(data);

       
      }
    }
  };

  return (
    <>
      <Navbar
        searchValue={searchValue}
        setSearchValue={(e) => setSearchValue(e.target.value)}
        search={search}



        searchBeds={searchBeds}
        setSearchBeds={(e) => setSearchBeds(e.target.value)}
        searchGuests={searchGuests}
        img={Windbnb}

        isSearchVisible={isSearchVisible}
        setIsSearchVisible={setIsSearchVisible}

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
