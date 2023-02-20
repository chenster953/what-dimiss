const puppeteer = require('puppeteer');
const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.listen(3001, () => {
  console.log('SERVER IS RUNNING ON PORT 3001');
});
