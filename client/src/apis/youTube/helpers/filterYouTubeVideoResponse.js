// Filter live videos and unavailable videos (videos without .snippet property)
const filterYouTubeVideoResponse = (youTubeVideos) =>
  youTubeVideos.filter((video) => video.snippet && video.snippet.liveBroadcastContent === 'none');

export default filterYouTubeVideoResponse;
