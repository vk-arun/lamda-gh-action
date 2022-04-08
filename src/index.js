'use strict';

module.exports.handler = async (event) => {
const randomNumber = parseInt(Math.random()*100);
console.log('first lambda1 ');
const response = {
    statusCode: 200,
    body: JSON.stringify(`This is random number is2 = ${randomNumber}`),
};
return response;
};
