import styled from '@emotion/styled';
import { useRef, useState, useEffect } from 'react';

const Container = styled.section`
  position: relative;
  height: 1200vh;
  background-color: black;
`;

const ImageSection = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  perspective-origin: 50% 50%;
`;

const ImageWrapper = styled.div<{
  translateZ: number;
  scale: number;
  opacity: number;
}>`
  width: 90vw;
  max-width: 800px;
  height: 80vh;
  max-height: 1000px;
  position: absolute;
  transform-style: preserve-3d;
  transform: ${(props) =>
    `translate3d(0px, 0px, ${props.translateZ}px) scale(${props.scale})`};
  opacity: ${(props) => props.opacity};
  transition: transform 0.05s ease-out, opacity 0.05s ease-out;

  @media (max-width: 768px) {
    width: 95vw;
    height: 70vh;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextOverlay = styled.div<{ opacity: number }>`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 24px;
  text-align: center;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 90%;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    bottom: 15%;
  }
`;

const Gallery = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      text: '첫 만남의 설렘을 기억하며',
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      text: '서로를 이해하며 함께한 시간',
    },
    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
      text: '이제 평생을 함께하고 싶은 마음',
    },
    {
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
      text: '새로운 시작을 향해',
    },
  ];

  const updateScroll = () => {
    if (!containerRef.current) return;
    const scrollPosition = window.scrollY;
    const containerHeight = containerRef.current.clientHeight;
    const sectionHeight = window.innerHeight;
    const progress = scrollPosition / (containerHeight - sectionHeight);
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const getImageStyle = (index: number) => {
    const sectionProgress = scrollProgress * images.length;
    const imageProgress = sectionProgress - index;

    let progress = Math.max(0, Math.min(1, imageProgress));
    progress = Math.pow(progress, 0.3);

    const translateZ = 500 * progress;
    const scale = 1 + progress * 0.2;

    const fadeOutStart = 0.3;
    const fadeOutEnd = 0.7;
    const opacity =
      imageProgress < 0
        ? 0
        : imageProgress > fadeOutEnd
        ? 0
        : imageProgress > fadeOutStart
        ? 1 - (imageProgress - fadeOutStart) / (fadeOutEnd - fadeOutStart)
        : 1;

    return { translateZ, scale, opacity };
  };

  return (
    <Container ref={containerRef}>
      <ImageSection>
        {images.map((image, index) => {
          const { translateZ, scale, opacity } = getImageStyle(index);
          return (
            <ImageWrapper
              key={index}
              translateZ={translateZ}
              scale={scale}
              opacity={opacity}
            >
              <Image
                src={image.src}
                alt={`웨딩 사진 ${index + 1}`}
                loading='lazy'
              />
            </ImageWrapper>
          );
        })}
        {images.map((image, index) => {
          const { opacity } = getImageStyle(index);
          return (
            <TextOverlay key={`text-${index}`} opacity={opacity}>
              {image.text}
            </TextOverlay>
          );
        })}
      </ImageSection>
    </Container>
  );
};

export default Gallery;
