import styled from '@emotion/styled';
import MainImage from './components/MainImage';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';

const AppContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  background-color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <Gallery />
      <MainImage />
      <WeddingInfo />
      <Location />
      <Contact />
    </AppContainer>
  );
}

export default App;
