import styled from '@emotion/styled';
import { FaRegCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

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

const CalendarCard = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const DateDisplay = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: 'Cormorant Garamond', serif;

  span {
    color: #ff6b6b;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #666;
  font-size: 1.1rem;

  svg {
    color: #ff6b6b;
    font-size: 1.2rem;
  }
`;

const AddToCalendarButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border: 1px solid #ff6b6b;
  border-radius: 30px;
  background: white;
  color: #ff6b6b;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff6b6b;
    color: white;
  }

  svg {
    font-size: 1.1rem;
  }
`;

const Calendar = () => {
  const handleAddToCalendar = () => {
    // Google Calendar 링크 생성
    const event = {
      text: '김철수 ♥ 김영희 결혼식',
      dates: '20240000/20240000', // YYYYMMDD 형식으로 수정 필요
      details: '김철수 ♥ 김영희의 결혼식에 초대합니다.',
      location: '서울특별시 강남구 테헤란로 123 럭셔리웨딩홀 3층 그랜드볼룸',
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.text
    )}&dates=${event.dates}&details=${encodeURIComponent(
      event.details
    )}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <Container>
      <Title>날짜 안내</Title>
      <CalendarCard>
        <DateDisplay>
          2024. <span>00</span>. <span>00</span>
        </DateDisplay>
        <InfoList>
          <InfoItem>
            <FaRegCalendarAlt />
            토요일
          </InfoItem>
          <InfoItem>
            <FaClock />
            오후 12:00
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt />
            럭셔리웨딩홀 3층 그랜드볼룸
          </InfoItem>
        </InfoList>
        <AddToCalendarButton onClick={handleAddToCalendar}>
          <FaRegCalendarAlt /> 캘린더에 일정 추가하기
        </AddToCalendarButton>
      </CalendarCard>
    </Container>
  );
};

export default Calendar;
