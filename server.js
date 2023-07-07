const express = require("express");

const metascraperDescription = require("metascraper-description");

const metascraper = require("metascraper")([metascraperDescription()]);

const { extractMetadata } = require("link-meta-extractor");

const got = require("got");

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
