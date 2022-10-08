const express = require("express");
const axios = require("axios");
const { response } = require("express");

const app = express();
const port = 8000;


app.get('/say', (req, res) => {
    let keyword = req.query.keyword;
    if (keyword === "" || keyword === undefined) {
        return res.status(400).send('Keyword query parameter is required')
    }

    axios.get("https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-3d6c8c09-8adc-47dd-bc08-b9ee193ac60b/default/hello?keyword=" + keyword)
        .then(response => res.send(response.data))
        .catch(err => res.status(500).send(err))
});

app.listen(port, () => {
    console.log("Server is running at ", port);
});