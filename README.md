Intercom to Hue
-
### Quick start



From the root folder run `npm install`

1) Create a tunnel to your localhost using https://ngrok.com/ command line in another terminal
- Install ngrok
- run `ngrok 3200`
- You should get an url in the form `http://[SOMEHOST].ngrok.io`

2) You'll need to create a WebHook on Intercom:
- Access `https://app.intercom.io/apps/[YOUR APP ID]/integrations/webhooks`
- Add your `http://[SOMEHOST].ngrok.io` url as a *webhook* receiver for `New Message from a User`.


3) Find your HUE bridge ip:
- Run the server without parameters: `node index.js`
- Then access your ngrok url in your browser
- Note the ip of your HUE device

4) Now you'll need an authorized user on your hue system:
- Check http://www.developers.meethue.com/documentation/getting-started


3) When this is done, stop the server and restart it with the correct parameters:
- run `node index.js [HUE-IP] [USERNAME]`
- This command will pass the parameters to the https://github.com/peter-murray/node-hue-api lib.



4) Configure according to your lights
- Here we used `api.setGroupLightState` with `lightState.create().longAlert()` check the node-hue-api doc for more possibilities


5) Test intercom

6) ???

7) Profit !