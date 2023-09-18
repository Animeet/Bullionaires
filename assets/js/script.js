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


  var slideIndex = 1;
showSlides(slideIndex);

// Automatically transition to the next slide every 2 seconds (2000 milliseconds)
var slideInterval = setInterval(function() {
  plusSlides(1);
}, 3000);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].classList.remove("fade", "fade-in", "fade-out"); // Remove the fade classes
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
  
    // Apply fade-out class to the current slide after a delay
    setTimeout(function () {
      var currentSlide = document.getElementsByClassName("mySlides")[slideIndex - 1];
      if (currentSlide) {
        currentSlide.classList.add("fade-out");
      }
    }, 100); // Adjust the delay as needed
  
    // Apply fade-in class to the new slide after a short delay
    setTimeout(function () {
      var newSlide = document.getElementsByClassName("mySlides")[slideIndex - 1];
      if (newSlide) {
        newSlide.classList.add("fade-in");
      }
    }, 200); // Adjust the delay as needed
  
    dots[slideIndex - 1].className += " active";
  }

// Stop the automatic slide transition on mouse hover
var slideshowContainer = document.querySelector(".slideshow-container");

slideshowContainer.addEventListener("mouseenter", function () {
  clearInterval(slideInterval);
});

// Resume automatic slide transition on mouse leave
slideshowContainer.addEventListener("mouseleave", function () {
  slideInterval = setInterval(function () {
    plusSlides(1);
  }, 3000);
});