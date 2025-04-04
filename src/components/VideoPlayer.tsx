import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../util/animation';
const Container = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #ff6b8b;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;
  width: fit-content;
  font-family: 'Cormorant Garamond', serif;

  &::before,
  &::after {
    content: '"';
    position: absolute;
    font-size: 3rem;
    color: #ffd1dc;
    font-family: serif;
  }

  &::before {
    left: -2rem;
    top: -1rem;
  }

  &::after {
    right: -2rem;
    bottom: -1.5rem;
  }
`;

const VideoContainer = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: #000;
  aspect-ratio: 16/9;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const IframeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoPlayer = () => {
  // 실제 유튜브 영상 ID로 교체 필요
  const videoId = 'K4zm30yeHHE'; // 웨딩 영상 예시
  return (
    <Container
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
    >
      <Title variants={itemVariants}>웨딩 영상</Title>
      <VideoContainer variants={itemVariants} aria-hidden='false'>
        <IframeWrapper>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&enablejsapi=1&origin=${window.location.origin}`}
            title='Wedding Video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            loading='lazy'
          />
        </IframeWrapper>
      </VideoContainer>
    </Container>
  );
};

export default VideoPlayer;
