const express = require("express");

const metascraper = require("metascraper")([
  require("metascraper-description")(),
  //   require("metascraper-author")(),
  //   require("metascraper-image")(),
  //   require("metascraper-logo")(),
  //   require("metascraper-title")(),
  //   require("metascraper-url")(),
]);

const got = require("got");

// Important Settings
const app = express();
const port = 3000 || process.env.PORT;

app.get("/", async (req, res) => {
  const link = req.query.link;
  console.log(link);
  const data = await fetchOGMetadata(link);
  res.send(data);
});

async function fetchOGMetadata(url) {
  try {
    const { body: html, url: finalUrl } = await got(url);
    const metadata = await metascraper({ html, url: finalUrl });

    // console.log(metadata);

    return metadata;
  } catch (error) {
    console.error("Error fetching Open Graph metadata:", error);
    return null;
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
