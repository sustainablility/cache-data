let request = require("request");
const randomIDGenerator = require('./randomIDGenerator');


async function putData(request, response, storage) {
    let dataInfo = JSON.parse(request.body);
    if (dataInfo.url === undefined || dataInfo.method === undefined) {
        response.status(400).send("Lack of parameters");
        return null;
    }
    let url = dataInfo.url;
    let dataFromURL = await reqServer(url).catch(err => {
        response.send("Error")
    });
    if (dataFromURL === undefined) {
        return null;
    }
    let data;
    try{
        data = JSON.parse(dataFromURL);
    }catch (e) {
        response.send("Error");
        return null;
    }
    let id = storage.addData(data);
    response.send(id);
}

function reqServer(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) {
                reject(error);
            }else if (response.statusCode !== 200){
                reject(body);
            }else {
                resolve(body);
            }
        })
    });
}


module.exports = putData;