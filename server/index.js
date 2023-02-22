const express = require('express');
const { getTranscripts } = require('./getTranscript');
const { formatText } = require('./formatText');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://theapidemon:banana71699@nutrition-app-api.8sytfrh.mongodb.net/test')

app.get('/getTranscripts', async (req, res) => {
  const url = req.query.url;
  const passcode = req.query.passcode;

  try {
    const transcript = await getTranscripts(url, passcode);
    res.json(transcript);
  } catch (err) {
    res.json(err);
  }
});

app.get('/formatText', async (req, res) => {
  try {
    const formattedText = await formatText();
    res.json(formattedText);
  } catch (err) {
    res.json(err);
  }
});

app.listen(3001, () => {
  console.log('SERVER IS RUNNING ON PORT 3001');
});
