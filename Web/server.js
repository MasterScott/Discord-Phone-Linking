var express = require('express');
var app = express();
var port = 10000;
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const webhook = require("webhook-discord")
const Hook = new webhook.Webhook("")

app.post('/', function(req, res) {
    var PhoneNumber = req.body.Number;
    var TextContent = req.body.Text;
    var IsCall = req.body.IsCall;
	
	if (IsCall == "false") {
		const msg = new webhook.MessageBuilder()
			.setName("LG G7 ThinQ") // Required for some reason :shrug:
			.setColor("#FFFA00")
			//.setImage("Image url")
			.setTime()
			.setTitle("New Text!")
			.addField("From: " + PhoneNumber, TextContent)
		Hook.send(msg);
		console.log("Message Recived from: " + PhoneNumber + " Containing: " + TextContent);
	} else {
		if (IsCall == "true") {
			const msg = new webhook.MessageBuilder()
				.setName("LG G7 ThinQ") // Required for some reason :shrug:
				.setColor("#FFFA00")
				//.setImage("Image url")
				.setTime()
				.setTitle("New Call!")
				.addField("From: ", PhoneNumber);
			Hook.send(msg);
		}
		console.log("Message Recived from: " + PhoneNumber);
	}
    res.send(PhoneNumber + ' ' + TextContent + ' ' + IsCall);
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);
