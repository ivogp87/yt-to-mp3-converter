const removeLiveVideos = (youTubeVideos) => {
  const videos = youTubeVideos.filter(
    (video) => video.snippet && video.snippet.liveBroadcastContent === 'none'
  );
  return videos;
};

export default removeLiveVideos;
