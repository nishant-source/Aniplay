var axios = require('axios');
var data = JSON.stringify({
    "collection": "EpisodeList",
    "database": "AnimeEpisodeLIst",
    "dataSource": "ClusterSite",
    "projection": {
        "_id": 2
    }
    ""
});
            
var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-ohkvz/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'FlGLqDHzV8ukPILzQnHb0q4DLkoUPW3QUfK5UeTmKCoFBL3z7z9s70CylRNKqSKS',
      'Accept': 'application/ejson'
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
