import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import CustomNavbar from "./components/CustomNavbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Home from "./pages/Home";
import Films from "./pages/Films";
import Person from "./pages/Person";

function App() {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
      // console.log(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/");
      let data = res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <CustomNavbar />

      {loading ? (
        <div class="spinner">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="people" element={<People data={people} />} />
          <Route path="people/:id" element={<Person />} />
          <Route path="planets" element={<Planets />} />
          <Route path="films" element={<Films />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
// "films": "https://swapi.dev/api/films/",
// "people": "https://swapi.dev/api/people/",
// "planets": "https://swapi.dev/api/planets/",
// "species": "https://swapi.dev/api/species/",
// "starships": "https://swapi.dev/api/starships/",
// "vehicles": "https://swapi.dev/api/vehicles/"
