import * as express from 'express';
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

var params = {screen_name: 'superAnn001'};

let twitterRoute = express.Router();

twitterRoute.get('/', (req, res)=>{

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
            res.send(tweets);
        } else {
            res.send('something went wrong');
        }
    });

});

export default twitterRoute;
