const Video = () => {
  return (
    <div className="video h-screen w-full">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/nCg3ufihKyU?si=nvO4W3mcASZrAdyA"
        title="YouTube video player"
        frameorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
