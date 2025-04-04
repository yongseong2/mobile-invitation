import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.section`
  padding: 6rem 2rem;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 8rem;
    color: rgba(0, 0, 0, 0.05);
    font-family: serif;
  }
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #333;
  font-weight: 300;
  letter-spacing: 2px;
`;

const Message = styled(motion.p)`
  text-align: center;
  line-height: 2;
  margin-bottom: 4rem;
  color: #666;
  font-size: 1.1rem;
  word-break: keep-all;

  span {
    display: inline-block;
  }
`;

const FamilyInfo = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  p {
    margin: 1rem 0;
    font-size: 1.1rem;
    color: #444;
    line-height: 1.8;
  }
`;

const Decoration = styled(motion.div)`
  text-align: center;
  margin: 3rem 0;
  color: #999;
  font-size: 1.5rem;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 50px;
    height: 1px;
    background: #ddd;
    margin: 0 1rem;
    vertical-align: middle;
  }
`;

const WeddingInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        <Title variants={itemVariants}>초대합니다</Title>
        <Message variants={itemVariants}>
          <span>서로 마주보며 다져온 사랑을</span>
          <br />
          <span>이제 함께 한 곳을 바라보며</span>
          <br />
          <span>걸어가고자 합니다.</span>
          <br />
          <span>저희 두 사람이 사랑의 이름으로</span>
          <br />
          <span>지켜나갈 수 있도록</span>
          <br />
          <span>앞날을 축복해 주시면 감사하겠습니다.</span>
        </Message>
        <Decoration variants={itemVariants}>♥</Decoration>
        <FamilyInfo variants={itemVariants}>
          <p>
            김OO · 이OO의 장남 <strong>철수</strong>
          </p>
          <p>
            박OO · 최OO의 장녀 <strong>영희</strong>
          </p>
        </FamilyInfo>
      </motion.div>
    </Container>
  );
};

export default WeddingInfo;
