const Video = () => {
  return (
    <div className="video h-screen w-full">
      <video src="/test.mp4" className="w-full h-screen" width="100%" height="100%" autoPlay muted loop></video>
    </div>
  );
};

export default Video;
