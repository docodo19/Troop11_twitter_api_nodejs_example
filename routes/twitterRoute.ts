import * as express from 'express';
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'C0dfK0pZSldDSTg78hvJ0Uk5L',
    consumer_secret: '780yYfGi0MrFOGAsY3NnIAnFnfdJ0mYvk5rrzAPks3PeICe1kV',
    access_token_key: '719983979936387072-6KVZzkPzq4BT3gUb76avHAZdhugz6zt',
    access_token_secret: '3zMvPNNQC2SY8aTrathTUMWcXc5Ngfx6kwi0HD2LT3Vy5'
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
