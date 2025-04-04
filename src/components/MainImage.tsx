import styled from '@emotion/styled';

const MainImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3')
      center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
`;

const Names = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Date = styled.p`
  font-size: 1.2rem;
  letter-spacing: 2px;
`;

const MainImage = () => {
  return (
    <MainImageContainer>
      <Title>Wedding Invitation</Title>
      <Names>철수 ♥ 영희</Names>
      <Date>2024. 00. 00 SAT PM 12:00</Date>
    </MainImageContainer>
  );
};

export default MainImage;
