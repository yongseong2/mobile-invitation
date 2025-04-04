import styled from '@emotion/styled';
import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const Container = styled.section`
  padding: 4rem 2rem;
  background-color: white;
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

const AccountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AccountCard = styled.div`
  padding: 2.5rem;
  border: 1px solid #eee;
  border-radius: 16px;
  text-align: center;
  background-color: #fff;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #ffd1dc, #ffb6c1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

    &::before {
      opacity: 1;
    }
  }
`;

const AccountTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 500;
`;

const AccountInfo = styled.div`
  margin-bottom: 1.5rem;

  p {
    margin: 0.7rem 0;
    color: #666;
    font-size: 1.1rem;
  }

  .bank-name {
    font-weight: 500;
    color: #444;
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  .account-number {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    color: #333;
    background-color: #f8f9fa;
    padding: 0.8rem;
    border-radius: 8px;
    margin: 1rem 0;
  }
`;

const CopyButton = styled.button<{ copied: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => (props.copied ? '#4CAF50' : '#e0e0e0')};
  border-radius: 12px;
  background-color: ${(props) => (props.copied ? '#f1f8f1' : '#fff')};
  color: ${(props) => (props.copied ? '#2E7D32' : '#666')};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.copied ? '#f1f8f1' : '#f8f9fa')};
    border-color: ${(props) => (props.copied ? '#4CAF50' : '#ccc')};
  }

  svg {
    font-size: 1rem;
  }
`;

const Message = styled.p`
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  margin-top: 2rem;
  font-style: italic;
`;

const GiftMoney = () => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const accounts = [
    {
      id: 'groom',
      title: '신랑측 계좌번호',
      name: '김철수',
      bank: '신한은행',
      account: '110-123-456789',
    },
    {
      id: 'bride',
      title: '신부측 계좌번호',
      name: '김영희',
      bank: '국민은행',
      account: '123-12-123456',
    },
  ];

  const handleCopy = async (account: string, id: string) => {
    try {
      await navigator.clipboard.writeText(account);
      setCopiedStates((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Container>
      <Title>축의금 계좌번호</Title>
      <AccountGrid>
        {accounts.map(({ id, title, name, bank, account }) => (
          <AccountCard key={id}>
            <AccountTitle>{title}</AccountTitle>
            <AccountInfo>
              <p>{name}</p>
              <p className='bank-name'>{bank}</p>
              <p className='account-number'>{account}</p>
            </AccountInfo>
            <CopyButton
              copied={copiedStates[id] || false}
              onClick={() => handleCopy(account, id)}
            >
              <FaCopy /> {copiedStates[id] ? '복사완료' : '계좌번호 복사하기'}
            </CopyButton>
          </AccountCard>
        ))}
      </AccountGrid>
      <Message>* 계좌번호 클릭 시 자동으로 복사됩니다</Message>
    </Container>
  );
};

export default GiftMoney;
