var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: 1562639523,
    channelSecret: '5b3ca33b7f528518a37d5a2a24ce863f',
    channelAccessToken: 'rM6RDVhWnxP3NVWepfzQuBNGo8aPKpnD3kmb/eZXqCJ0trODq9A7K0Tw5LeYX4/NuUuFvbFuJl39wVbbZLtxV75HY6rPTpzVjTwkKHf60LVKHVnWERG+xgSQhoa8udDSoZRfffILLv/KAFJ6I1gf0AdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (event) {
    console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});