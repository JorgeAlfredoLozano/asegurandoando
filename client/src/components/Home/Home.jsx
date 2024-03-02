// const Home = () => {

//     return (
//         <div>Home</div>
//     )
// }
// export default Home;
// import Categories from "../../molecules/categories/Categories";
// import CreateEvent from "../../molecules/create event/index";
import Hero from "../Hero/Hero.jsx";
import { heroData } from "./mockData";
// import Promociones from "../../organisms/promociones/index"
// import ProximosEventos from "../../organisms/proximosEventos";

const Home = () => {
  return (
    <main className="w-full h-full">
      <Hero events={heroData} />
      {/* <Categories /> */}
      {/* <Promociones /> */}
      {/* <ProximosEventos /> */}
    </main>
  );
};

export default Home;
