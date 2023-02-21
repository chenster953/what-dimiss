const puppeteer = require('puppeteer');

async function getTranscripts(url, passcode) {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: ['--enable-automation'],
    executablePath:
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();
  await page.goto(url);

  await page.type('input[class=zm-input__inner]', passcode);
  await page.$eval(
    'input[class=zm-input__inner]',
    (el) => (el.value = passcode)
  );
  await page.click('button[id=passcode_btn]');

  await page.waitForSelector('.transcript-list');
  const getText = await page.evaluate(() => {
    const timelineDivs = document.querySelectorAll('.timeline');
    let fullTranscript = '';
    for (const div of timelineDivs) {
      const timeSpan = div.querySelector('span');
      fullTranscript += `${timeSpan.innerText}`;
    }
    return fullTranscript;
  });

  await browser.close();

  return getText;
}

module.exports = { getTranscripts };
