var http = require("http");
var url = require("url");
var qs = require('querystring');

const webhook = require("webhook-discord")

const Hook = new webhook.Webhook("")

http.createServer(function(request, response){
	if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                request.connection.destroy();
            }
        });
        request.on('end', function () {
            var post = qs.parse(body);
			console.log(post.Number)
            // use POST
        });
		
		
		
		var params = url.parse(request.url,true).query;
		// Define parameters
		var PhoneNumber = params.Number;
		var TextContent = params.Text;
		var IsCall = params.IsCall;
		
		console.log(PhoneNumber)
		console.log(TextContent)
		console.log(IsCall)
		if (IsCall == "false") {
			const msg = new webhook.MessageBuilder()
				.setName("LG G7 ThinQ") // Required for some reason :shrug:
				.setColor("#FFFA00")
				//.setImage("Image url")
				.setTime()
				.setTitle("New Text!")
				.addField("From: " + PhoneNumber, TextContent)
			Hook.send(msg);
		} else {
			const msg = new webhook.MessageBuilder()
				.setName("LG G7 ThinQ") // Required for some reason :shrug:
				.setColor("#FFFA00")
				//.setImage("Image url")
				.setTime()
				.setTitle("New Call!")
				.addField("From:", PhoneNumber);
			Hook.send(msg);
		}
		console.log("Sent!");
	}
}).listen(10000);
