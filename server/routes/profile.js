const router = require('express').Router()

const fetch = import('node-fetch')

const DataClass = require('../lib/trimmedData.js')

router.get('/:platform/:region/:gamertag', async (req, res) => {
  try {
    const headers = {
      Accept: 'application/json',
      'Accept-Encoding': 'gzip',
    }

    const { platform, gamertag, region } = req.params

    console.log(`get request for ${gamertag}'s profile on ${platform}`)

    const response = await fetch(
      `${process.env.TRACKER_API_URL}/${platform}/${region}/${gamertag}/complete`,
      { headers }
    )

    const data = await response.json()

    if (data.message === 'Player not found') {
      return res.status(404).json({
        error: 404,
        message: 'Player not found',
      })
    }

    res.json(new DataClass(data, platform))
  } catch (err) {
    console.error(err)

    res.status(500).json({
      error: 500,
      message: 'something went wrong on the server',
    })
  }
})

module.exports = router
