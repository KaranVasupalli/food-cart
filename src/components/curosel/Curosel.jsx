import React from "react";
import "./curosel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Curosel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const data = [
    {
      img: "https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?w=900",
      name: "salads",
    },
    {
      img: "https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773780.jpg?w=900",
      name: "Asian",
    },
    {
      img: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=996",
      name: "Italian",
    },
    {
      img: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=996",
      name: "Burgers",
    },
    {
      img: "https://img.freepik.com/free-photo/top-view-fresh-fish-with-lemon-slices-wooden-table-food-seafood-dish-ocean_140725-91008.jpg?w=900",
      name: "Seafood",
    },
    {
      img: "https://img.freepik.com/free-photo/dessert-bowl-with-fresh-fruit-chocolate-indulgence-generative-ai_188544-8542.jpg?w=996",
      name: "Desserts",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return (
      <div
        className={className}
        style={{  display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }



  return (
    <div className="main-container mb-9">
        <div className="container">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div className="box" key={index}>
            <div>
              <img src={d.img} alt="" />
            </div>
            <div>
              <p className=" text-black">{d.name}</p>
            </div>
          </div>
        ))}
      </Slider>
        </div>
    </div>
  );
};

export default Curosel;
