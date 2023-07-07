const express = require("express");

const { extractMetadata } = require("link-meta-extractor");

// Important Settings
const app = express();
const port = 3000 || process.env.PORT;

app.get("/", async (req, res) => {
  const link = req.query.link;
  const metaInformation = await extractMetadata(link);
  res.send(metaInformation);
  //   const data = await fetchOGMetadata(link);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
