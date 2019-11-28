const randomIDGenerator = require('./randomIDGenerator');

function putData(request, response, storage) {
    let data = JSON.parse(request.body);
    let id = storage.addData(data);
    response.send(id);
}
module.exports = putData;