Download and covert YouTube video to mp3.

## Usage

- Clone the repository.
- cd to /api and run `npm install`
- run `npm start`
- Runs on port 3001 - ([http://localhost:3001](http://localhost:3001))

Endpoint: GET `/download/:videoId`

params: `videoId` - YouTube video id (string **required**)

Please check the main [ReadMe](https://github.com/ivogp87/yt-to-mp3-converter) for more info.

**NOTE:**
In order to be able to download and convert videos to .mp3 you must install ffmpeg on your system. You must also set FFMPEG_PATH environment variable in your system.
Please check [Fluent ffmpeg's documentation](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) for more info.