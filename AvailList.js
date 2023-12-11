const AvailList= document.getElementById('available-list');

function fetchAvail(url) {
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
           
                // Accessing the 'title' property within 'attributes'
                let itemTitle = dataArray.title_english;
                if(itemTitle === null){
                    itemTitle = dataArray.title;
                }
                const itemID= dataArray.mal_id;
                const itemImg = dataArray.images.jpg.image_url;
                const itemDesc = dataArray.synopsis;
                const availItem = document.createElement("div");
                availItem.classList.add("item-card");
                availItem.innerHTML = `
                <div class="item " data-url="/That time i got reincarnated as a Slime">
                <img src="${itemImg}" alt="${itemTitle}">
                <p>${itemTitle}</p>
            </div>
            <div class="floatItem">
            
            <span>${itemTitle}</span>
            <p>${itemDesc}</p>
                <div class="playButton" onClick="redirectToPlayer('${itemID}')">Play</div>
            </div>
                    `;
                AvailList.appendChild(availItem);
            

        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

}

let availAnime=[
    "54918",
    "53887",
    "41487",
    "54112",
    "52347",
    "29803",
    "21",
    "40748",
    "52830"
]
availAnime.forEach(item =>{
    let url =`https://api.jikan.moe/v4/anime/${item}/full`
    fetchAvail(url);
});