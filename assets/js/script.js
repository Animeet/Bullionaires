// Define the configuration object
var widgetConfig = {
    symbols: [
      {
        proName: "FOREXCOM:NSXUSD",
        title: "US 100",
      },
      {
        description: "EUR / USD",
        proName: "OANDA:EURUSD",
      },
      {
        description: "GBP / JPY",
        proName: "OANDA:GBPJPY",
      },
      {
        description: "XAU / USD",
        proName: "OANDA:XAUUSD",
      },
      {
        description: "US30",
        proName: "CAPITALCOM:US30",
      },
      {
        description: "BTC",
        proName: "COINBASE:BTCUSD",
      },
      {
        description: "ETH",
        proName: "COINBASE:ETHUSD",
      },
      {
        description: "DXY",
        proName: "CAPITALCOM:DXY",
      },
    ],
    showSymbolLogo: true,
    colorTheme: "dark",
    isTransparent: false,
    displayMode: "regular",
    locale: "en",
  };
  
  // Create a script element and set its attributes
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
  script.async = true;
  script.innerHTML = JSON.stringify(widgetConfig);
  
  // Find the tradingview-widget container element and append the script to it
  var tradingViewContainer = document.getElementById("tradingview-widget");
  tradingViewContainer.appendChild(script);