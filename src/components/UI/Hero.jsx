function Hero({ title, subtitle, imgSrc, imgAlt }) {
    return (
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={imgSrc} 
          alt={imgAlt} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/30 flex flex-col justify-center px-10">
          <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-200 max-w-lg">{subtitle}</p>
        </div>
      </div>
    );
  }
  
  export default Hero;