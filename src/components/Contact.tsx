import styled from '@emotion/styled';
import { FaPhone, FaHeart } from 'react-icons/fa';

const Container = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 400px;
  margin: 0 auto;
`;

const ContactCard = styled.div`
  text-align: center;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #444;
  }

  p {
    color: #666;
    margin-bottom: 0.5rem;
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: white;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    font-size: 1rem;
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  color: #888;
  font-size: 0.9rem;
`;

const Contact = () => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <Container>
      <Title>연락하기</Title>
      <ContactGrid>
        <ContactCard>
          <h3>신랑측</h3>
          <p>신랑 철수</p>
          <IconButton onClick={() => handleCall('010-1234-5678')}>
            <FaPhone /> 연락하기
          </IconButton>
        </ContactCard>
        <ContactCard>
          <h3>신부측</h3>
          <p>신부 영희</p>
          <IconButton onClick={() => handleCall('010-8765-4321')}>
            <FaPhone /> 연락하기
          </IconButton>
        </ContactCard>
      </ContactGrid>
      <Footer>
        <FaHeart style={{ color: '#ff6b6b', marginRight: '0.5rem' }} />
        2024년 00월 00일
      </Footer>
    </Container>
  );
};

export default Contact;
