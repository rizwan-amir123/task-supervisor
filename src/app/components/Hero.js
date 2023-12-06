const Hero = ({src}) => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-lime-400 px-5 text-white py-20">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="pb-5 md:pb-0">
          <h1 className="text-4xl py-5 my-13 lg:text-6xl">
            Welcome, <br />Manage tasks
             <br />
            efficiently using <br />Task Supervisor
          </h1>

          <p className="py-5 text-xl">
            Task Supervisor allows you to create, read, update, and delete tasks assigned to particular users.
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