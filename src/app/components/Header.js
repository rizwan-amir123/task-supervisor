export default function Header({src}) {
return (

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
  <a href="/" className="flex items-center">
      <img src={src.src} className="h-20 mr-2" alt="Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">task supervisor</span>
  </a>
  <div className="flex items-center justify-center space-x-5">
  <a href="/login" className="text-lg font-medium dark:text-white hover:font-bold">Login
  </a>
  <span>    </span>
  <a href="/signup" className="text-lg font-medium dark:text-white hover:font-bold">Sign Up
  </a>
  </div>
  </div>
</nav>

  );
};

