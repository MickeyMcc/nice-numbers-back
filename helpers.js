module.exports.createResponse = (body, statusCode) => ({
  statusCode: statusCode || 200,
  body: JSON.stringify(body, null, 2),
})