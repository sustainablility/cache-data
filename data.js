const randomIDGenerator = require('./randomIDGenerator');
/**
 * Storage format
 * {
 *     "id": {
 *         data: xxx,
 *         expire: Date()
 *     }
 * }
 */
class Data {
    constructor() {
        this.storage = {};
        setInterval(() => {
            removeTimeout(this.storage);
        }, 10000)
    }
    addData(data) {
        let id = randomIDGenerator();
        let expire = new Date();
        expire.setMinutes(expire.getMinutes() + 5);
        this.storage[id] = {
            data: data,
            expire: expire
        };
        return id;
    }
    getData(id) {
        let data = this.storage[id];
        if (data === undefined) {
            return null;
        }else {
            return data;
        }
    }
}

function removeTimeout(storage) {
    let now = new Date();
    for (let [id, dataObject] of Object.entries(storage)) {
        if (dataObject.expire.getTime() < now.getTime()) {
            delete storage[id];
        }
    }
}

module.exports = Data;