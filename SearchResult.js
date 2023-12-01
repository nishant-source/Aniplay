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
                const itemTitle = item.attributes.titles.en;
                const itemImg = item.attributes.posterImage.tiny;
                // Log or use the retrieved 'title' value
                console.log('Title:', itemTitle);
                console.log('ImageLink:', itemImg);
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.innerHTML = `
                <img src="${itemImg}" alt="${itemTitle}">
                <h3>${itemTitle}</h3>
    
                    `;
                resultsContainer.appendChild(resultItem);
            });

        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

}