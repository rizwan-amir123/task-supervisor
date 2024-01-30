const Hero = ({src}) => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-lime-400 px-3 text-white py-13">
      <div className="pl-6 container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="pb-5">
          <h1 className="text-4xl pt-5 mt-13 lg:text-6xl">
            Welcome, <br />Manage tasks
             <br />
            efficiently using <br /> 
            
          </h1>

          <div className="w-max mb-3">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 
            border-r-white pr-5 text-5xl text-gray-900 font-semibold">
              task supervisor
            </h1>
          </div>

          <p className="pt-2 pb-7 text-lg text-slate-100">
            Task supervisor allows you to create, read, update, and delete tasks assigned to particular users.
          </p>
          
          <a
            href="/main"
            className="bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg px-6 py-3 bg-sky-700 hover:bg-sky-400"
          >
            Get Started!
          </a>
        </div>
        <div className="hero-img">
          <img
            src={src.src}
            
            alt="coding illustration"
            className="lgw-[90%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;