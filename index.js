'use strict';
// var Alexa = require('alexa-sdk');
var Fin = require('financejs');
var finance = new Fin();

// var APP_ID = 'arn:aws:lambda:us-east-1:407197073751:function:FinCalc';

// exports.handler = function(event, context, callback) {
//     var alexa = Alexa.handler(event, context);
//     alexa.APP_ID = APP_ID;
//     alexa.registerHandlers(handlers);
//     alexa.execute();
// };
//
// var handlers = {
//     'LaunchRequest': function () {
//         this.emit('GetFact');
//     },
//     'GetNewFactIntent': function () {
//         this.emit('GetFact');
//     },
//     'RunCalcs': function () {
//
//     },
//     'AMAZON.HelpIntent': function () {
//         var speechOutput = "You can say calculate a payment, or how much do I need to save... What can I help you calculate?";
//         var reprompt = "What can I calculate for you?";
//         this.emit(':ask', speechOutput, reprompt);
//     },
//     'AMAZON.CancelIntent': function () {
//         this.emit(':tell', 'Goodbye!');
//     },
//     'AMAZON.StopIntent': function () {
//         this.emit(':tell', 'Goodbye!');
//     }
// };

console.log(finance.AM(20000, 7.5, 5, 0));
console.log(finance.FV(7, 350, 60));
let count = 0;
let int = 0
let n = 120;
let c = 350;
let r = 7;

for (var i = n; i > 0; i--) {
  int = 1 + (r / 100);
  count = count * int + c;
}

console.log(`${c} at ${r}% over ${n} periods: `, count / 100);
