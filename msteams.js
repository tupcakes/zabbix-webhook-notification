var params = JSON.parse(value),
req = new CurlHttpRequest(),
resp;
req.AddHeader('Content-Type: application/json');

var params = JSON.parse(value);
payload = {};
payload.title = params.SeverityName + " " + params.title,
payload.text = params.text,
payload.themeColor = ""

if (params.Status == 'OK') {
    payload.themeColor = "00cc00"; 
} else {
    switch(params.SeverityNumber) {
    case '0':
    //not classified colour
        payload.themeColor = "cfe5fa"; 
        break;
    case '1':
        // information
        payload.themeColor = "2f00ff"; 
        break;
    case '2':
        // warning - yellow
        payload.themeColor = "e0d100"; 
        break;
    case '3':
        // average - orange
        payload.themeColor = "ff7300"; 
        break;
    case '4':
        // high
        payload.themeColor = "7d1d02";
        break;
    case '5':
        // disaster
        payload.themeColor = "ff0000";
        break;
    default:
        // default colour
        payload.themeColor = "000000"
    }
}

resp = req.Post(params.WebHookURL,
JSON.stringify(payload)
	);
return resp;
