import React from 'react'
import Cards from './Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Header from './Header';


function Homepage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      fetchMovies();
    }, []);
  
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=cb34312809a50283e576de913eb7b329'
        );
        setMovies(response.data.results); 
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
  
  
  
    return (
      <div >
        <Container className="page-color">
          <h1 className="text-center">All movies</h1>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {movies.map((movie) => (
              <Col key={movie.id} className="d-flex">
                <Cards
                  
                  title={movie.title}
                  imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  overview={movie.overview}
                />
              </Col>
            ))}
          </Row>
        </Container>
  
      </div>
    )
}

export default Homepage