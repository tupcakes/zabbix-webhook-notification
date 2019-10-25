var params = JSON.parse(value),
req = new CurlHttpRequest(),
resp;
req.AddHeader('Content-Type: application/json');

var params = JSON.parse(value);
payload = {};
payload.username = "Zabbix";
payload.content = " "
payload.embeds = [];
payload.embeds[0] = {};
payload.embeds[0].title = params.SeverityName + " " + params.title;
payload.embeds[0].description = params.text;
payload.embeds[0].color = ""



if (params.Status == 'OK') {
    payload.avatar_url = "http://icons.iconarchive.com/icons/ampeross/qetto-2/96/check-icon.png";
    payload.embeds[0].color = "52224"; 
} else {
    payload.avatar_url = "http://icons.iconarchive.com/icons/ampeross/qetto-2/96/no-icon.png";
    switch(params.SeverityNumber) {
    case '0':
    //not classified colour
        payload.embeds[0].color = "13624826"; 
        break;
    case '1':
        // information
        payload.embeds[0].color = "3080447"; 
        break;
    case '2':
        // warning - yellow
        payload.embeds[0].color = "14733568"; 
        break;
    case '3':
        // average - orange
        payload.embeds[0].color = "16741120"; 
        break;
    case '4':
        // high
        payload.embeds[0].color = "8199426";
        break;
    case '5':
        // disaster
        payload.embeds[0].color = "16711680";
        break;
    default:
        // default colour
        payload.embeds[0].color = "0"
    }
}

resp = req.Post(params.WebHookURL,
JSON.stringify(payload)
	);
return resp;
