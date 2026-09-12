import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navber";
import TechGrid from "./components/TechGrid/TechGrid";

const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Banner />
      <TechGrid />
      <Footer />
    </div>
  );
};

export default App;
