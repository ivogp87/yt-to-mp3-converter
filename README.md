YouTube to MP3 converter built with React.

**Demo:**

https://yttomp3.ivo.xyz/

https://ivo.xyz/projects/yt-to-mp3-converter

## Features

- Search for YouTube videos by keyword
- Watch videos
- View video info (descriptions, views, etc) and related videos
- Download videos as a .mp3 file

## Usage

- Clone the repository.
- run `npm install` in **both** /client and /api directories
- Rename **example.env.local** file which is located in /client directory to **.env.local** and add your YouTube API key.
- run `npm start` in **both** /client and /api directories
- Open [http://localhost:3000](http://localhost:3000) in your browser

## Frontend

React app (bootstrapped with CRA) located in **/client** directory. Runs on port 3000.

## Backend

ExpressJs app located in **/api** directory. Runs on port 3001 by default. Downloads and coverts YouTube video to mp3.

Endpoint: GET `/download/:videoId`

params: `videoId` - YouTube video id (string **required**)

**NOTE:**
In order to be able to download and convert videos to .mp3 you must install ffmpeg on your system. You must also set FFMPEG_PATH environment variable in your system.
Please check [Fluent ffmpeg's documentation](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) for more info.
