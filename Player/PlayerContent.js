const EpList = document.getElementById("EpisodeList");
let index = 1;
// Function for Getting AnimeId for page
function getAnimeIdParameter() {
    // Get the query string from the current URL
    const queryString = window.location.search;
  
    // Use URLSearchParams to easily get the value of the AnimeId parameter
    const params = new URLSearchParams(queryString);
    const animeId = params.get('AnimeId');
  
    return animeId;
  }
  
  // Example usage:
  const animeIdValue = getAnimeIdParameter();
  console.log(animeIdValue);
  

  // Function for Getting List of Episode from API
function fetchEpList(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(jsonData => {
            console.log('JSON data:', jsonData);
            // Do something with the JSON data here
            const dataArray = jsonData.data;
            resultsContainer.innerHTML = "";
            // Looping through the 'data' array
            dataArray.forEach(item => {
                // Accessing the 'title' property within 'attributes'
                let itemTitle = item.title;
                if(itemTitle === null){
                    itemTitle = 'Ep '+ index;
                }
                // Log or use the retrieved 'title' value
                console.log('Title:', itemTitle);
                const EpisodeList = document.createElement("div");
                EpisodeList.classList.add("epName");
                if(index%2 != 0){
                EpisodeList.innerHTML = `
                <div  class="episode" onClick="playVideo('${index}','${animeIdValue}')">
               <span> <span>${index}</span>${item.title}</span>
            </div>
           
                    `;}
                    else{
                        EpisodeList.innerHTML = ` 
                         <div  class="episode color2" onClick="playVideo('${index}','${animeIdValue}')">
                        <span> <span>${index}</span>${item.title}</span>
                         </div>
                
                `;
                    }
                EpList.appendChild(EpisodeList);
                index++;
            });

        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
        
    }
    
    let urlList = `https://api.jikan.moe/v4/anime/${animeIdValue}/episodes`;
    
    fetchEpList(urlList);
    
    var animeDetailDiv = document.getElementById("AnimeDetailBox");
        var beforePseudoElement = window.getComputedStyle(animeDetailDiv, ':before');

        // Change the :before background image
        

    
    let itemTitle ;

    // Function for Getting Anime Details from the API 
function fetchDetail(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(jsonData => {
            console.log('JSON data:', jsonData);
            // Do something with the JSON data here
                const dataArray = jsonData.data;
                // Accessing the 'title' property within 'attributes'
                itemTitle = dataArray.title_english;
                if(itemTitle === null){
                    itemTitle = dataArray.title;
                }
                const itemImg = dataArray.images.jpg.image_url;
                const itemEpNo = dataArray.episodes;
                const itemAired = dataArray.aired.string
                const itemDesc = dataArray.synopsis;
                AnimeTitle.innerHTML=`<p>${itemTitle}</p>`;
                animeDetailImg.innerHTML=`<img src="${itemImg}"
                alt="${itemTitle}" width="120px" height="160px">`;
                // beforePseudoElement.backgroundImage = "url('" + itemImg + "')";
                AnimeDetail.innerHTML=`
                <h3>${itemTitle}</h3>
                    <p>Total Episodes : ${itemEpNo}</p>
                    <p>Aired: ${itemAired}</p>
                `;
             animeDesc.innerHTML=`${itemDesc}`;
            

        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

}
let url =`https://api.jikan.moe/v4/anime/${animeIdValue}/full`;
fetchDetail(url);


const Iframe = document.getElementById('myIframe');

//function for play Video of Iframe 

function playVideo(index, AnimeId){
    if(AnimeId ="40748"){
let urls =[
"https://streamtape.site/e/eA8ABOkqBJcYqkm",
"https://streamtape.site/e/AlakKqw2xohXKKM",
"https://streamtape.site/e/2PvWVZ4Y0jCZMPR",
"https://streamtape.site/e/WPa9qyZo60H03w",
"https://streamtape.site/e/QWYrBwJ7kAs0oez",
"https://streamtape.site/e/GM3Lw20bDXC1XkD",
"https://streamtape.site/e/r8J9K3l0YZSegB",
"https://streamtape.site/e/mPlvdzaQdZFbxq1",
"https://streamtape.site/e/jayl3gZXX4IaO4",
"https://streamtape.site/e/oMyjyj8m0OFbbY",
"https://streamtape.site/e/lkgY3bwbDotB16",
"https://streamtape.site/e/2bVOBa2QKahRMg",
"https://streamtape.site/e/kgD4vGdMoLSOxKY",
"https://streamtape.site/e/llpLRbpyGvczvD",
"https://streamtape.site/e/xPXGkJXrX9ikkrj",
"https://streamtape.site/e/zk0dpBk8vWHQwK",
"https://streamtape.site/e/016qr1BZKBIKRw",
"https://streamtape.site/e/7DmDabBApDFAXGg",
"https://streamtape.site/e/0dOb07qDaVFb7VM",
"https://streamtape.site/e/AXpWvAzOXrIXYyo",
"https://streamtape.site/e/02WzaX6xeZibGXa",
"https://streamtape.site/e/LO9erQRjVvtRkyr",
"https://streamtape.site/e/zrWq62ZvG9fYLRl",
"https://streamtape.site/e/bRG2BYv1kWsPkZV"
]
    Iframe.src = urls[index-1];
    console.log(urls[index-1]);
}
}