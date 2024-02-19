import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Carousel from "./Carousel.js";
import IslandsCard from "./Islands.js";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <img
        src="./carousel/bigimg.png"
        className="responsive-image"
        alt="big img"
      />
      <IslandsCard />
      <Footer />
    </div>
  );
}

export default App;
