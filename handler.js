'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10'
});
const { createResponse } = require('./helpers');

module.exports.saveRating = async (record) => {
  console.log(rating, number);
  try {
    if (!record.number || !record.rating) {
      return createResponse(`INVALID INPUT ${record}`, 400);
    }
    const receipt = await dynamo.put({
      TableName: 'number-ratings',
      Item: { "number": `${record.number}`, "rating": record.rating, "test": record.test },
    }).promise();
    return createResponse(receipt, statusCode)
  } catch (err) {
    console.error(err);
    return createResponse(err, 500)
  }
}
