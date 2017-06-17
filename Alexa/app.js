// Alexa Skill for BP Hackathon
// Team DroneSoc
// Written by Shreeyam Kacker, 2017-06-17

const Alexa = require('alexa-sdk'),
        extensions = require('/extensions'),
        appId = 'amzn1.ask.skill.a8e13fd4-59cd-468f-ba76-724309587de3'; 

// Handler for intents
const handlers = {
    'TestIntent': () => {
        this.emit(':tell', 'Hey it\'s working');
    },
}

// Exports handler, called by Lambda
exports.handler = (event, context, callback) => {
    var alexa = Alexa.handler(event, context, callback);
    alexa.appId = appId;
    alexa.registerHandlers(handlers);
    alexa.execute();
};



