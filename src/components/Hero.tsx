const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Community-Driven Manga Translation Platform
            </h1>
            <p className="text-xl mb-8">
              Support your favorite manga projects and be part of the translation community
            </p>
            <div className="space-x-4">
              <a href="#projects" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Explore Projects
              </a>
              <a href="#about" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/images/hero-manga.png" 
              alt="Manga Community" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  