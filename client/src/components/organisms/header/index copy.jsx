import NavbarHeader from "../../molecules/navbarHeader";
import NavbarButton from "../../atoms/navbarButton";
import { useNavigate } from "react-router-dom";
import Searcher from "../../atoms/searcher";

function Header() {
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/Register");
  };
  const toLogin = () => {
    navigate("/Login");
  };
  return (
    // <header className="w-full h-32 py-2 flex items-center justify-between bg-gradient-to-b from-black to-secondary-1 text-primary-1 sticky top-0 z-50">
    //   {/* <picture
    //     onClick={() => navigate("/")}
    //     className="h-16 overflow-hidden ml-10"
    //   >
    //     <img
    //       className="h-full w-auto object-contain"
    //       src="https://media.discordapp.net/attachments/1176511259093516384/1178785895416082544/image.png?ex=657768ea&is=6564f3ea&hm=39253153cadff1ee9f0c0fdb33e56f360b33c1719dbd238fd765522b2ebc5c03&=&format=webp&width=704&height=224"
    //       alt="logo"
    //     />
    //   </picture> */}
    //   <span onClick={() => navigate("/")}
    //     className="h-4 overflow-hidden ml-10">ASEGURANDO</span>
    //   <Searcher />
    //   <NavbarHeader />
    //   <div className="flex gap-4 mr-10 items-center">
    //     <NavbarButton
    //       filled={false}
    //       text={"Iniciar Sesión"}
    //       handler={toLogin}
    //     />
    //     <NavbarButton filled text={"Registrarse"} handler={toRegister} />
    //   </div>
    // </header>
    
{/* <nav class="bg-gradient-to-b from-black to-secondary-1 text-primary-1 shadow" role="navigation">
  <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
    <div class="mr-4 md:mr-8">
      <a href="#" rel="home">
        <svg class="w-10 h-10 text-purple-600" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <title>Asegurando Ando</title>
          <path fill="currentColor" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path>
        </svg>
      </a>
    </div>
    <div class="ml-auto md:hidden">
      <button class="flex items-center px-3 py-2 border rounded" type="button">
        <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div class="w-full md:w-auto md:flex-grow md:flex md:items-center">
      <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
        <li>
          <a class="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Seguros</a>
        </li>
        <li>
          <a class="block px-4 py-1 md:p-2 lg:px-4 text-purple-600" href="#" title="Active Link">Gestoría</a>
        </li>
        <li>
          <a class="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Compañías</a>
        </li>
      </ul>
      <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
        <li>
          <a class="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Inicio de sesión</a>
        </li>
        <li>
          <a class="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
<div class="w-full h-screen">
  <header class="bg-teal-400">
    <nav class="flex justify-between w-full bg-purple-500 text-white p-4">
      <a href="#"><span class="font-semibold text-xl tracking-tight">Title</span></a>
        <div class="md:items-center md:w-auto flex">
          <div class="md:flex hidden">
            <a class="block md:text-white mr-4" href="#">Link 1</a>
            <a class="block md:text-white mr-4" href="#">Link 2</a>
            <a class="block md:text-white mr-4" href="#">Link 3</a>
            <a class="block md:text-white mr-4" href="#">Link 4</a>
          </div>
          <div class="flex text-sm" v-else>
          	<a class="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" href="#">Login</a>
            <a class="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" href="#">Sign up</a>
          </div>
        </div>
    </nav>
  </header>
  <main class="flex justify-center items-center">
    <h1 class="text-3xl text-center">Welcome</h1>
  </main>
  <div class="bottomNav fixed bottom-0 w-full">
    <nav style="border:1px solid blue" class="md:hidden bottom-0 w-full bg-gray-700 text-xs">
      <ul class="flex justify-around items-center text-white text-center opacity-75 text-lg font-bold">
        <li class="p-4 hover:bg-gray-500">
          <a href="#">
            <span>Link 1</span>
            <svg class="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
            </svg>
           </a>
        </li>
        <li class="p-4 hover:bg-gray-500">
          <a href="#">
            <span>Link 2</span>
            <svg class="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
            </svg>
          </a>
        </li>
        <li class="p-4 hover:bg-gray-500">
          <a href="#">
            <span>Link 3</span>
            <svg class="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
            </svg>
          </a>
        </li>
        <li class="p-4 hover:bg-gray-500">
          <a href="#">
            <span>Link 4</span>
            <svg class="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>

  );
}

export default Header;
