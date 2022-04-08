import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Spinner } from "react-bootstrap";
import { Button, Container } from '../../GlobalStyles';
import Child from "./Child";

import "./MovieDb.css";

const MovieDb = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [inData, setIndata] = useState([]);
  const [desible, setDesible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e9936e8bbea731486019515a3139776b&page=${page}`).then((res) => {
        console.log([...movieList, ...res.data.results], "resultttt");
        setDesible(false);
        setMovieList([...movieList, ...res?.data?.results]);
        setLoading(true);
      })
    }
    getData();
  }, [page]);
  const clickMore = () => {
    setDesible(true);
    setPage(page + 1);
  };
  const internalData = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e9936e8bbea731486019515a3139776b&language=en-US&page=${page}`
      )
      .then((internaldata) => {
        setShowModal(true);
        setIndata(internaldata.data);
      });
  };
  const image_path = "https://image.tmdb.org/t/p/w500";
  return (
    <Container>
      <div className="mainMovies">
        {loading ? (
          movieList.map((movies, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => internalData(movies.id)}
              >
                <div className="container">
                  <img
                    className="imageName"
                    src={`${image_path}${movies.backdrop_path}`}
                    alt="not found"
                  />
                  <div>
                    <h3>{movies.original_title}</h3>
                    <p>Ratings:{movies.vote_average}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Spinner animation="border" />
        )}
      </div>
      <div>
        <Button
          disabled={desible}
          className="btn btn-danger"
          onClick={clickMore}
        >
          Click To More
        </Button>
        {showModal && (
          <Child
            show={showModal}
            onHide={() => setShowModal(false)}
            inData={inData}
            image_path={image_path}
          />
        )}
      </div>
    </Container>
  )
}
export default MovieDb;
