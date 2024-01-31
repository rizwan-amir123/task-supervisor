export default function Header({src}) {
return (

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
  <a href="/" className="flex pl-3 items-center">
      <img src={src.src} className="h-20 mr-2" alt="Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">task supervisor</span>
  </a>
  <div className="flex items-center justify-center space-x-5">
  <a href="/login" className="text-md rounded-lg py-1 px-3 border-solid border-white border-2 font-medium 
  hover:bg-gradient-to-r from-cyan-500 to-lime-400 transition ease-in duration-200
  hover:text-gray-900">Login
  </a>
  <span>    </span>
  
  {/*<a href="/signup" className="text-md pr-10 font-medium dark:text-white hover:font-extrabold">Sign Up
  </a>
*/}
  </div>
  </div>
</nav>

  );
};

