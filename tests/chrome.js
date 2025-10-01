const { chromium } = require('playwright');

(async () => {
  const browserServer = await chromium.launchServer();
  console.log(`Server running at: ${browserServer.wsEndpoint()}`);
})();