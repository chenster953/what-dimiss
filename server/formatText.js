const puppeteer = require('puppeteer');

async function formatText() {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: ['--enable-automation'],
    executablePath:
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  })
  const page = await browser.newPage();
  await page.goto('localhost:3000');

  await page.waitForSelector('.transcriptText');
  const getText = await page.evaluate(()=> {
    const text = document.querySelector('.transcriptText');
    console.log(text);
  })

  await browser.close()

  return getText
}

module.exports = { formatText };