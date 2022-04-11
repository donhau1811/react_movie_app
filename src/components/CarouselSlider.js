import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const img_300 = "https://image.tmdb.org/t/p/original";

const CarouselSlider = ({ movies }) => {
  return (
    <div style={{ display: "block", padding: 30 }}>
      <Carousel autoPlay={true} interval={500}>
        {movies.map((movie, id) => (
          <Carousel.Item key={id}>
            <img
              style={{
                width: "100vw",
                height: "80vh",
              }}
              src={`${img_300}${movie?.backdrop_path}`}
              alt="cailonma"
            />
            <Carousel.Caption>
              <h3 className="text-success" style={{ backgroundColor: "black" }}>
                {movie.original_title}
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
