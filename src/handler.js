'use strict';

module.exports.generateRandomNumber = async (event) => {
const randomNumber = parseInt(Math.random()*100);
console.log('first lambda ');
const response = {
    statusCode: 200,
    body: JSON.stringify(`This is random number = ${randomNumber}`),
};
return response;
};
