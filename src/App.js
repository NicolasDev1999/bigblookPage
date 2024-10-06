import "./App.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import WhatsAppButton from "./Componentes/Body/Whatsapp/Whatsapp";
import Footer from "./Componentes/Footer/Footer";
import NavBar from "./Componentes/Header/NavBar/NavBar";
import Banner from "./Componentes/Body/Home/Banner";
import PisciBlook from "./Componentes/PsciBlook/BannerPisciBlook/PisciBlook";
import Gallery from "./Componentes/Body/Gallery/Gallery";
import BigBanner from "./Componentes/Body/BigBanner/BigBanner";
import Featured from "./Componentes/Body/FeaturedMenu/Featured";
import BigGallery from "./Componentes/Body/Gallery_Big/BigGallery";
import Formulario from "./Componentes/Body/Form/Formulario";
import Toolkit from "./Componentes/Toolkit/Toolkit";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        
        <main className="container">
          <Routes>
            <Route path="/" element={<BigBanner />} />
            <Route path="/BigBanner" element={<BigBanner />} />
            <Route path="/BigGallery" element={<BigGallery/>} />
            <Route path="/PisciBlook" element={<PisciBlook/>}/>
            <Route path="/Formulario" element={<Formulario/>}/>
          </Routes>
          <Featured/>
          <Banner/>
          <Toolkit/>
        </main>
        <WhatsAppButton />
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
