import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={true}>
        <Carousel.Item>
                <img
                    className="d-block"
                    src="../carousel/img1.jpg"
                    alt="1"
                />
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block"
                    src="../carousel/img2.jpg"
                    alt="2"
                />
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block"
                    src="../carousel/img3.jpg"
                    alt="3"
                />
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block"
                    src="../carousel/img4.jpg"
                    alt="4"
                />
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block"
                    src="../carousel/img5.jpg"
                    alt="5"
                />
        </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;