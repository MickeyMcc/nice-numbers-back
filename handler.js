'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB({
  apiVersion: '2012-08-10'
});
const { createResponse } = require('./helpers');

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.saveRating = async ({ rating, number }) => {
  console.log(rating, number);
  const receipt = await dynamo.putItem({
    TableName: 'number-ratings',
    Item: { number, rating },
  }).promise();
  return createResponse(receipt)
}
