import styled from '@emotion/styled';
import { FaSubway, FaBus, FaCar } from 'react-icons/fa';

const Container = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
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

const VenueInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #444;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 500px;

  background-color: #eee;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const TransportInfo = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #444;
  }
`;

const TransportItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    margin-right: 1rem;
    color: #666;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

const Location = () => {
  return (
    <Container>
      <Title>오시는 길</Title>
      <VenueInfo>
        <h3>웨딩베뉴</h3>
        <p>서울특별시 강남구 테헤란로 123</p>
        <p>럭셔리웨딩홀 3층 그랜드볼룸</p>
      </VenueInfo>

      <MapContainer>
        {/* 여기에 실제 지도를 넣을 수 있습니다 */}
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          지도가 표시될 영역
        </div>
      </MapContainer>

      <TransportInfo>
        <h3>교통안내</h3>
        <TransportItem>
          <FaSubway size={20} />
          <p>2호선 강남역 3번 출구에서 도보 5분</p>
        </TransportItem>
        <TransportItem>
          <FaBus size={20} />
          <p>간선버스 146, 360, 740번</p>
        </TransportItem>
        <TransportItem>
          <FaCar size={20} />
          <p>건물 내 지하주차장 2시간 무료</p>
        </TransportItem>
      </TransportInfo>
    </Container>
  );
};

export default Location;
