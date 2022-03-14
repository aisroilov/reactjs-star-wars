import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const People = (props) => {
  const baseUrl = "/people";
  const imgUrl = "images/people/";
  return (
    <div>
      <Container>
        {/* <Pagination className="mt-10" float="right">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
        <div class="d-flex flex-wrap mt-10 mb-5">
          {props.data.map((people, i) => (
            <div class="p-2" style={{ width: "20%" }}>
              <Link className="nav-link" to={`${baseUrl}/${i + 1}`}>
                <Card>
                  <Card.Img variant="top" src={`${imgUrl}${i + 1}.jpg`} />

                  <Card.Title className="card-title">{people.name}</Card.Title>
                  {/* <p>Gender: {people.gender}</p>
                  <p>Date of birth: {people.birth_year}</p>
                  <p>Eye color: {people.eye_color}</p>
                  <p>Height: {people.height}</p> */}
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default People;

// birth_year: "19BBY"; src={`${imgUrl}${i + 1}`}
// created: "2014-12-09T13:50:51.644000Z";
// edited: "2014-12-20T21:17:56.891000Z";
// eye_color: "blue";
// films: (4)[
//   ("https://swapi.dev/api/films/1/",
//   "https://swapi.dev/api/films/2/",
//   "https://swapi.dev/api/films/3/",
//   "https://swapi.dev/api/films/6/")
// ];
// gender: "male";
// hair_color: "blond";
// height: "172";
// homeworld: "https://swapi.dev/api/planets/1/";
// mass: "77";
// name: "Luke Skywalker";
// skin_color: "fair";
// species: [];
// starships: (2)[
//   ("https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/")
// ];
// url: "https://swapi.dev/api/people/1/";
// vehicles: (2)[
//   ("https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/")
// ];
