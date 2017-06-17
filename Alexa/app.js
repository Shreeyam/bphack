// Alexa Skill for BP Hackathon
// Team DroneSoc
// Written by Shreeyam Kacker, 2017-06-17

const Alexa = require('alexa-sdk');

// Handler for intents
const handlers = {
    'TestIntent': () => {
        this.emit(':tell', 'Hey it\'s working');
    },
}

// Exports handler, called by Lambda
exports.handler = (event, context, callback) => {
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};



