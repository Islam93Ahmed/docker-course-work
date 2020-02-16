const express = require('express');
const redis = require('redis');


const app = express();
const redisClient = redis.createClient();

redisClient.set('visits', 0);

app.get('/', (req, res) => {
    redisClient.set('visits', (err, visits) => {
        res.send("Number of visits " + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});
