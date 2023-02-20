(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: ['--enable-automation'],
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();
  await page.goto(
    'https://sjsu.zoom.us/rec/play/zcFSM9FnUB9HouzknZfPw6S1dePO70d5XSZXWFjTNyVqj75gQnaMkK9dhECAM0liA0SvWWo_OG7HECeh.eXmlJTeTvOBByMTN'
  );

  await page.type('input[class=zm-input__inner]', '8HLS%L=@');
  await page.$eval(
    'input[class=zm-input__inner]',
    (el) => (el.value = '8HLS%L=@')
  );
  await page.click('button[id=passcode_btn]');

  await page.waitForSelector('.transcript-list');
  const getText = await page.evaluate(() => {
    const timelineDivs = document.querySelectorAll('.timeline');
    let fullTranscript = '';
    for (const div of timelineDivs) {
      const timeSpan = div.querySelector('span');
      fullTranscript += `${timeSpan.innerText}`
    }
    return fullTranscript;
  });

  console.log(getText);
  await browser.close();
})();