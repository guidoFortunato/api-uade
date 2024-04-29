export const Trailer = ({ url, trailer }) => {
  return (
    <>
      <iframe
        className="h-[550px] w-full"
        src={url}
        title={trailer.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* <YouTubePlayer
        url={url}
        style={{
          width: "100%",
        }}
      /> */}
    </>
  );
};
