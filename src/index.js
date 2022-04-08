'use strict';

module.exports.hello = async (event) => {
const randomNumber = parseInt(Math.random()*100);
console.log('first lambda ');
const response = {
    statusCode: 200,
    body: JSON.stringify(`This is random number is3 = ${randomNumber}`),
};
return response;
};
