const express = require('express');
const { getTranscripts } = require('./getTranscript');

const app = express();

app.get('/getTranscripts', async (req, res) => {
  const url = req.query.url
  const passcode = req.query.passcode

  try {
    const transcript = await getTranscripts(url, passcode);
    res.json(transcript);
  } catch (err) {
    res.json(err);
  }
});

app.post('/inputData', async (req,res) => {
  const info = req.body;
  
})

app.listen(3001, () => {
  console.log('SERVER IS RUNNING ON PORT 3001');
});
