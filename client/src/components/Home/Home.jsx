import Hero from "../Hero/Hero.jsx";
import Promociones from "../promociones/Promociones.jsx"
import Categories from "../categories/Categories.jsx"
import { heroData } from "./mockData";


const Home = () => {
  return (
    <main className="w-full h-full">
      <Hero events={heroData} />
      <Categories />
      <Promociones />
      {/* <ProximosEventos /> */}
    </main>
  );
};

export default Home;
