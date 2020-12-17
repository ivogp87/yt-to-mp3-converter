import removeLiveVideos from './removeLiveVideos';

const formatYouTubeApiResponse = (youTubeData) => {
  const videos = removeLiveVideos(youTubeData);

  const formattedResponse = videos.map((video) => {
    const videoData = {
      id: video.id.videoId || video.id,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.medium.url,
      description: video.snippet.description,
      channelTitle: video.snippet.channelTitle,
      channelId: video.snippet.channelId,
      publishedAt: video.snippet.publishedAt,
    };

    if (video.statistics) {
      videoData.tags = video.snippet.tags || [];
      videoData.viewCount = video.statistics.viewCount;
      videoData.likeCount = video.statistics.likeCount;
      videoData.dislikeCount = video.statistics.dislikeCount;
      videoData.commentCount = video.statistics.commentCount;
    }

    return videoData;
  });

  return formattedResponse;
};

export default formatYouTubeApiResponse;
