import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Carousel.css';
import One from '../Assests/slider/1.jpeg'
import Second from '../Assests/slider/3.jpeg'
import Third from '../Assests/slider/4.jpeg'
import Four from '../Assests/slider/5.jpeg'
import Five from '../Assests/slider/6.jpeg'
import Six from '../Assests/slider/7.jpeg'

const Carousels = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
    >
      <div>
        <img src={Five} alt="Astronomy Event 1" />
      </div>
      <div>
        <img src={Second} alt="Astronomy Event 2" />
      </div>
      <div>
        <img src={Third} alt="Astronomy Event 3" />
      </div>
      <div>
        <img src={Four} alt="Astronomy Event 4" />
      </div>
      <div>
        <img src={One} alt="Astronomy Event 5" />
      </div>
      <div>
        <img src={Six} alt="Astronomy Event 6" />
      </div>
    </Carousel>
  );
};

export default Carousels;
