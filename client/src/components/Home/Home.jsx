import Hero from "../Hero/Hero.jsx";
import Promociones from "../promociones/Promociones.jsx"
import Categories from "../categories/Categories.jsx"
import { heroData } from "./mockData";
import InstagramFeed from "../Instagram/InstagramFeed.jsx";
import Companys from "../Companys/Companys.jsx";



const Home = () => {
  return (
    <main className="w-full h-full">
      <Hero events={heroData} />
      <Categories />
      <InstagramFeed />
      <Promociones />
      <Companys />
      
      {/* <ProximosEventos /> */}
    </main>
  );
};

export default Home;
