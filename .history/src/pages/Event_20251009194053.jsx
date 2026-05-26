import React from "react";
import "../Styles/Event.css";
import Event1 from '../Assests/Event1.jpg'
import Event2 from '../Assests/Event2.jpg'
import Event3 from '../Assests/Event3.jpg'
import Event4 from '../Assests/Event4.jpg'
import Event5 from '../Assests/Event5.jpg'
import Event6 from '../Assests/Event6.jpg'
import Event7 from '../Assests/Event7.jpg'
import Event8 from '../Assests/Event8.jpg'
import Event9 from '../Assests/Event9.jpg'
import Event10 from '../Assests/Event10.jpeg'
import Event11 from '../Assests/Event11.jpeg'
import Event12 from '../Assests/Event12.jpeg'
import Event13 from '../Assests/Event13.jpeg'
import Event14 from '../Assests/Event14.jpeg'
import Event15 from '../Assests/Event15.jpeg'
import Event16 from '../Assests/Event17.jpeg'
import Event17 from '../Assests/Event16.jpg'
import Event18 from '../Assests/Event18.jpeg'
import Event19 from '../Assests/Event19.jpeg'
import Event20 from '../Assests/Event20.jpeg'
import Event21 from '../Assests/Event21.jpeg'
import Event22 from '../Assests/Event22.jpeg'

const images = [
  Event1, Event2, Event3, Event4, Event5, Event6, Event7, Event8,
  Event9, Event10, Event11, Event12, Event13, Event14, Event15,
  Event16, Event17, Event18, Event19, Event20, Event21, Event22
];

function Event() {
  return (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <div className="gallery-item" key={index}>
          <img src={img} alt={`Event ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Event;
