module.exports.createResponse = (body) => ({
  statusCode: 200,
  body: JSON.stringify(body, null, 2),
})