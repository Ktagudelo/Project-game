import Banner from "./components/Banner";
import Header from "./components/Header/index";
import CarouselImages from './components/CarouselImages/index';
import Aside from './components/Aside/index';
import './App.css'; 

function App() {
  return (
    <div>
      <Header />
      <div className="row-container">
      <div>
        <Banner />
        <CarouselImages />
      </div>
      <div>
        <Aside />
      </div>
      </div>
    </div>
  );
}

export default App;
