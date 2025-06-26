import { useState, useEffect } from "react";
import styled from "styled-components";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

const CarouselOuterContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselInnerContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  height: 100%;
`;

const ImageWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  padding: 0.25rem 0.5rem;
  transition: background 0.3s ease, transform 0.2s ease;

  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [banner1, banner2, banner3];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselOuterContainer>
      <Button left onClick={goToPrev}>
        &#8249;
      </Button>
      <CarouselInnerContainer currentIndex={currentIndex}>
        {images.map((src, i) => (
          <ImageWrapper key={i}>
            <StyledImage src={src} alt={`Banner ${i + 1}`} />
          </ImageWrapper>
        ))}
      </CarouselInnerContainer>
      <Button onClick={goToNext}>&#8250;</Button>
    </CarouselOuterContainer>
  );
}

export default Carousel;
