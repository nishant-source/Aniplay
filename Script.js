    const sIcon = document.getElementById('search-icon');
    const sBar = document.querySelector('.search-bar');
    const resultsContainer = document.getElementById("results-container");
    const searchInput = document.getElementById('sBarr')

    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    //Script for Menu Button
    let menuLeft = menu.style.left;
    menuIcon.addEventListener('click', () => {
        menu.style.left = '0px';
    });

    menu.addEventListener('click', () => {
        menu.style.left = '-250px'
    });

    //Script for Search bar button 
    sIcon.addEventListener('click', () => {
        if (sBar.style.display == 'none') {
            resultsContainer.style.display = 'block';
            sBar.style.display = 'block';
            sBar.focus();
        } else {
            sBar.style.display = 'none';
            resultsContainer.style.display = 'none';

        }
    })
 
    // Script for search bar Result through Api
searchInput.addEventListener("input", () => {
    let query = searchInput.value.toLowerCase();
    query = query.replace(/ /g, "%20");
    console.log(query);
    const apiUrl = `https://api.jikan.moe/v4/anime?q=%20${query}`;
    fetchJSON(apiUrl);

});


// Script for item in recommendation linking 
const elements = document.querySelectorAll(".item");

elements.forEach(element => {
  element.addEventListener("click", function() {
    const url = element.getAttribute("data-url");
    window.location.href = url; // Navigate to the specified URL
  });
});


// Script of  Slides on home page
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides() {
    let i;
    let slides = document.querySelectorAll('.slide');

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
    slideIndex++;
    setTimeout(showSlides, 4000); // Change slide every 2 seconds (2000 milliseconds)
}

//Function call for trending list
let trendUrl = "https://api.jikan.moe/v4/top/anime?filter=airing&type=tv&sfw=false&rating=r17";

fetchTrend(trendUrl);
//function for scroll trending list

function scrollContent(direction) {
    const container = document.querySelector('.trend-list-container');
    const scrollAmount = 200; // Adjust this value based on your preference

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
      container.scrollLeft += scrollAmount;
    }
  }

// Redirection Function for page
  function redirectToPlayer(parameterValue) {
    // Construct the URL with the path parameter
    var url = '/Player/index.html?AnimeId=' + parameterValue;
   Iframe.src ="https://streamtape.site/e/eA8ABOkqBJcYqkm";
    // Redirect to the constructed URL
    window.location.href = url;
}