var params = JSON.parse(value),
req = new CurlHttpRequest(),
resp;
req.AddHeader('Content-Type: application/json');

var params = JSON.parse(value);
payload = {};
payload.title = " ";
payload.text = " ";
payload.themeColor = "";
payload.sections = [];
payload.sections[0] = {};

payload.sections[0].activityTitle = params.SeverityName;
payload.sections[0].activitySubtitle = params.title;
payload.sections[0].activityText = params.text;


if (params.Status == 'OK') {
    payload.sections[0].activityImage = "http://icons.iconarchive.com/icons/ampeross/qetto-2/96/check-icon.png";
    payload.themeColor = "00cc00"; 
} else {
    payload.sections[0].activityImage = "http://icons.iconarchive.com/icons/ampeross/qetto-2/96/no-icon.png";
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
