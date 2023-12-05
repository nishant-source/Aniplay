const trendList = document.getElementById("trend-list");

 function fetchTrend(url) {
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
                let itemTitle = item.title_english;
                if(itemTitle === null){
                    itemTitle = item.title;
                }
                const itemID = item.mal_id;
                const itemImg = item.images.jpg.image_url;
                // Log or use the retrieved 'title' value
                console.log('Title:', itemTitle);
                console.log('ImageLink:', itemImg);
                const trendItem = document.createElement("div");
                trendItem.classList.add("trend-card");
                trendItem.innerHTML = `
                <div class="trend-item" onClick="redirectToPlayer('${itemID}')">
                <span>${itemTitle}</span>
                </div>
                <div class="trend-image" >
                <img onClick="redirectToPlayer('${itemID}')" src="${itemImg}" alt="Shangri-La Frontier">
                
                </div>
                    `;
                trendList.appendChild(trendItem);
            });

        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

}
// Attribute of kitsu api for trending page info
// let itemTitle = item.attributes.titles.en;
// if(itemTitle === undefined){
//     itemTitle = item.attributes.slug;
// }
// const itemImg = item.attributes.posterImage.tiny;