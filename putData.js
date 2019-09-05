const randomIDGenerator = require('./randomIDGenerator');

function putData(request, response, storage) {
    let data;
    try {
        data = JSON.parse(request.body);
    } catch (e) {
        response.status(400).send("Error");
        return null;
    }
    let id = storage.addData(data);
    response.send(id);
}
module.exports = putData;