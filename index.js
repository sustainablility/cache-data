let Data = require("./data");
let storage = new Data();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const randomIDGenerator = require('./randomIDGenerator');
app.use(bodyParser.json({limit: '1000mb'}));
app.use(cors());

app.post('/putData',  (request, response) => {
    AllowOrigin(response);

    require('./putData')(request, response, storage);

});
app.post('/putDataAPI', (request, response) => {
    AllowOrigin(response);

    require('./putDataAPI')(request, response, storage);

});
app.get("/getData",(request, response) => {
    AllowOrigin(response);
    require('./getData')(request, response, storage);
});
app.listen(2222);

function AllowOrigin(response) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    response.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
}