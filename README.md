# Google Assistant Demo

Simple Google Assistant demo.

* GCP Console: https://console.cloud.google.com
* Actions Console: https://console.actions.google.com
* Dialogflow Console: https://console.dialogflow.com
* ngrok Console: https://dashboard.ngrok.com/status

Steps:

1. Launch server
2. Setup ngrok proxy
3. Create new project on GCP Console
4. Enable Actions API
5. Enter Actions Console and create project linked to the GCP project
6. Create intent and enable fulfillment
7. Configure fulfillment with ngrok's https url

## Open local proxy

```
ngrok http 3000
```
