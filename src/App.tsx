import styled from '@emotion/styled';
import MainImage from './components/MainImage';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

const AppContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  background-color: #fff;
`;

const Section = styled.section`
  scroll-margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    scroll-margin-top: 50px;
  }
`;

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Section id='gallery'>
        <Gallery />
      </Section>
      <Section id='main'>
        <MainImage />
      </Section>
      <Section id='info'>
        <WeddingInfo />
      </Section>
      <Section id='location'>
        <Location />
      </Section>
      <Section id='contact'>
        <Contact />
      </Section>
    </AppContainer>
  );
}

export default App;
