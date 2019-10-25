# zabbix-msteams-notification
Uses the webhook feature in Zabbix 4.4 to send alerts to MS Teams.

## Credit
- u/chrisbucks
- https://www.reddit.com/r/zabbix/comments/dm0tnk/ms_teams_webhook/

## Usage
Under Administration->Media Types create a new webhook media type.

### Parameters
- title -> {ALERT.SUBJECT}
- text -> {ALERT.MESSAGE}
- WebHookURL -> Your webhook url for the teams channel
- SeverityNumber -> {TRIGGER.NSEVERITY}
- SeverityName -> {TRIGGER.SEVERITY}
- Status -> {TRIGGER.STATUS}

### Script
Copy the contents of msteams.js and paste into the script editor.

If you don't like the existing colors I recomend this site. https://www.spycolor.com/
