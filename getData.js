function getData(request, response, storage) {
    if (request._parsedUrl.query === undefined) {
        response.status(400).send("No Parameter");
    }else {
        let data = storage.getData(request._parsedUrl.query);
        if (data === null){
            response.status(400).send("Expired");
        }else {
            response.send(JSON.stringify(data.data))
        }
    }
}

module.exports = getData;