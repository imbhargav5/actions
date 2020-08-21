const puppeteer = require('puppeteer')

async function createPDF(url) {
  try{
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();
    return pdf;
    }catch(err){
      console.log(err);
    }
}

module.exports = createPDF