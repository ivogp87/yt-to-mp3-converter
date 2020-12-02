// YouTube MP3 download and converter API
const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api");

const app = express();
const PORT = 3001; // Don't use port 3000 - create react app uses port 3000

// Allow CORS
app.use(cors());

app.use("/api", apiRouter);

// Start the server on port 3001
app.listen(PORT, () => {
  console.log(`Server is live at port ${PORT}`);
});
