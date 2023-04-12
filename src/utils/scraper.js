const puppeteer = require('puppeteer');

export default async function scrapeAnchors(url) {
    // Launch a new instance of Chromium
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // Navigate to the specified URL
    await page.goto(url);
  
    // Extract anchor tags from the page
    const anchors = await page.evaluate(() => {
      // Use DOM manipulation to select all anchor tags on the page
      const anchorElements = document.querySelectorAll('a');
  
      // Convert NodeList to an array and extract href and textContent attributes from each anchor
      const anchorData = Array.from(anchorElements).map(anchor => ({
        title: anchor.textContent.trim(),
        link: anchor.href
      }));
  
      return anchorData;
    });
  
    // Close the browser instance
    await browser.close();
  
    // Return the extracted anchor data
    return anchors;
  }