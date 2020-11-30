import Banner from "./components/Banner";
import Header from "./components/Header/index";
import CarouselImages from "./components/CarouselImages/index";
import Aside from "./components/Aside/index";
import { LeftContainer, MainContainer, RightContainer } from "./styles";

function App() {
  return (
    <div>
      <Header />
      <MainContainer>
        <LeftContainer>
          <Banner />
          <CarouselImages />
        </LeftContainer>
        <RightContainer>
          <Aside />
        </RightContainer>
      </MainContainer>
    </div>
  );
}

export default App;
