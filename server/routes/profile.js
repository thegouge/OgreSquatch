const router = require("express").Router();
const fetch = require("node-fetch");

const dataClass = require("../lib/trimmedData.js");

router.get("/:platform/:gamertag", async (req, res) => {
  try {
    const headers = {
      Accept: "application/json",
      "Accept-Encoding": "gzip",
    };

    const {platform, gamertag} = req.params;

    console.log(`get request for ${gamertag}'s profile on ${platform}`);

    const response = await fetch(
      `${process.env.TRACKER_API_URL}/${platform}/${gamertag}`,
      {headers}
    );

    const data = await response.json();

    // if (data.errors && data.errors.length > 0) {
    //   return res.status(404).json({
    //     message: "profile not found",
    //   });
    // }

    res.json(new dataClass(data));
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "something went wrong on the server",
    });
  }
});

module.exports = router;
