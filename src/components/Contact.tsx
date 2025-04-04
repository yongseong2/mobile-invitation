import styled from '@emotion/styled';
import { FaPhone, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../util/animation';

const Container = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: white;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 400px;
  margin: 0 auto;
`;

const ContactCard = styled(motion.div)`
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

const Copyright = styled.p`
  margin-top: 1rem;
  color: #aaa;
  font-size: 0.8rem;
  font-weight: 300;
`;

const Contact = () => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <Container
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
    >
      <Title variants={itemVariants}>연락하기</Title>
      <ContactGrid>
        <ContactCard variants={itemVariants}>
          <h3>신랑측</h3>
          <p>신랑 철수</p>
          <IconButton onClick={() => handleCall('010-1234-5678')}>
            <FaPhone /> 연락하기
          </IconButton>
        </ContactCard>
        <ContactCard variants={itemVariants}>
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
        <Copyright>© 2024 김철수. All rights reserved.</Copyright>
      </Footer>
    </Container>
  );
};

export default Contact;
