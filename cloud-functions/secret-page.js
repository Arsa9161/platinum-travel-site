/*
 * ene function ni server side deer ajillana
 * @param - event : hereglegchees irj bga requist
 *          callback : ajiluulah function
 *          context : unknown
 */
exports.handler = function (event, context, callback) {
  let body;
  const server_data = `
  <h2>Hello this is secret page</h2>
  <p>yu bn zaluu meen</p>
  `;
  // herev hereglegchees irj bui requist ymar neg body buyu ugugdultei tsug bval
  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }
  // herev hereglegchees irsen ugugdul taarval butsaagaad ugugdul ilgeene
  if (body.password === "JavaScript") {
    callback(null, {
      statusCode: 200,
      body: server_data,
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
};
