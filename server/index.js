const express = require('express');
const { getTranscripts } = require('./getTranscript');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/getTranscripts', async (req, res) => {
  // Set url and passcode to query variables in URL
  const url = req.query.url;
  const passcode = req.query.passcode;

  try {
    // Run the imported getTranscripts function
    const transcript = await getTranscripts(url, passcode);
    res.json(transcript);
  } catch (err) {
    res.json(err);
  }
});

app.listen(3001, () => {
  console.log('SERVER IS RUNNING ON PORT 3001');
});
