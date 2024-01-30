import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Gallery.css'
import LazyImage from '../../../Components/LazyImage/LazyImage'





const GalleryImage = () => {



  const imageContext = require.context('../../../Assets/Gallery/Images', false, /\.(png|jpe?g|svg)$/);

  const images = imageContext.keys().map(imageContext);

  const displayImageContext = require.context('../../../Assets/Gallery/Images/displayImg', false, /\.(png|jpe?g|svg)$/);
  const displayimages = displayImageContext.keys().map(displayImageContext);
  console.log(displayimages)

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
         
          {
            breakpoint: 468,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <>
    <h1 className="main-heading">Gallery</h1>
    <div className="gallery-slideshow">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image">
              <img src={image} alt="slideshow" />
            </div>
          ))}
        </Slider>
      </div>

      <h1 className="main-heading">Some Events</h1>

      <div class="gallery">
      {displayimages.map((image, index) => (
            <div key={index} className="gallery-image" data-aos="zoom-in" data-aos-delay="1000">
              <LazyImage src={image} alt="slideshow" />
            </div>
          ))}   
    </div>
    </>
  )
}

export default GalleryImage