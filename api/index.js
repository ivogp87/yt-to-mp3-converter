// YouTube MP3 download and converter API
const express = require("express");
const cors = require("cors");
const downloadRouter = require("./routes/download");

const app = express();
const PORT = 3001; // Don't use port 3000 - create react app uses port 3000

app.use(cors());

app.use("/download", downloadRouter);

app.listen(PORT, () => {
  console.log(`Server is live at port ${PORT}`);
});
