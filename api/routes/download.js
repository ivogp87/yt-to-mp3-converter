const express = require("express");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const slugify = require("slugify");
const downloadRouter = express.Router();

downloadRouter.get("/:videoId", async (req, res, next) => {
  try {
    // YouTube Video url
    const videoUrl = `https://www.youtube.com/watch?v=${req.params.videoId}`;

    // Validate the video id/url
    if (!ytdl.validateURL(videoUrl)) {
      return res.status(400).send({ error: "Invalid YouTube Url" });
    }

    // Get the video info
    const videoInfo = await ytdl.getBasicInfo(videoUrl);
    const fileName =
      slugify(videoInfo.videoDetails.title, { replacement: " ", locale: "en", remove: /[\/\?<>\\:\*\|"]/g }) || "file";

    // Set headers
    res.set({
      "Content-Disposition": `attachment; filename="${fileName}.mp3"`,
      "Access-Control-Expose-Headers": "Content-Disposition",
      "Content-Type": "audio/mpeg",
    });

    // Download the audio file from YouTube
    const downloadAudio = ytdl(videoUrl, { quality: "highestaudio" });

    // Handle download errors
    downloadAudio.on("error", (err) => {
      return res.status(400).send({ error: "Download failed!" });
    });

    // Convert the file to MP3
    const convertAudio = new ffmpeg({ source: downloadAudio });

    // convert.setFfmpegPath("ffmpegLocation") // Uncomment only if you need to set the ffmpeg path here!
    // If you have the ffmpeg path in your environment variables you don't need this!

    convertAudio.withAudioCodec("libmp3lame").toFormat("mp3").output(res).run();

    // Stop conversion and file download - usually invoked when the user cancels the download
    convertAudio.on("error", () => {
      convertAudio.kill();
      downloadAudio.destroy();

      return res.status(400).send({ error: "Download canceled by the user" });
    });

    // The file is converted
    convertAudio.on("end", () => {
      return res.end();
    });
  } catch (err) {
    res.status(400).send({ error: "Something went wrong" });
  }
});

module.exports = downloadRouter;
