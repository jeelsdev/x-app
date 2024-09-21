const Video = () => {
  const styles = {
    backgroundImage: "url('/home-full.jpg')",
    backgroundSize: "cover",
  }

  return (
    <div className="video h-screen w-full bg-red-50" style={styles}>
      <div className="h-full">
          <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
            <div className="text-center text-white">
                <p className="text-sm lg:text-lg uppercase">Lo que nos diferencia</p>
                <h1 className="text-2xl lg:text-4xl font-bold uppercase mt-3">Más de 1’250,000 m²
                construidos</h1>
                <a href="#contact" className="btn btn-active bg-red-900 text-white hover:bg-red-800 mt-10 border-red-800">Contactanos</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Video;
