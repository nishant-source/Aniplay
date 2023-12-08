function fetchJSON(url) {
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
                console.log('Title:', itemTitle);
                console.log('ImageLink:', itemImg);
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.innerHTML = `
                <div onClick="redirectToPlayer('${itemID}')">
                <img src="${itemImg}" alt="${itemTitle}">
                <h3>${itemTitle}</h3>
                </div>
                    `;
                resultsContainer.appendChild(resultItem);
            });

        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

}