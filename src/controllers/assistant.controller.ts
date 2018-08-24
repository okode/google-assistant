import { Router } from 'express';
import { dialogflow, Permission } from 'actions-on-google';
import { GeoDBService } from '../services/geodb.service';

const app = dialogflow();
const router = Router();
const geodb = new GeoDBService();

router.use(app);

app.intent('Default Welcome Intent', (conv, _) => {
  conv.ask(new Permission({
    context: 'Hola, para poder saber mejor de ti',
    permissions: 'NAME'
  }));
});

app.intent('actions_intent_PERMISSION', (conv, _, permissionGranted) => {
  let greeting = 'Vale, no te preocupes.';
  if (permissionGranted) {
    const data = conv.data as { userName?: string, [k: string]: any };
    data.userName = conv.user.name.display;
    greeting = `Gracias, ${data.userName}.`;
  }
  conv.ask(`${greeting} ¿Qué tratamiento quieres consultar?`);
});

app.intent('Health Treatment Intent', (conv, params) => {
  const treatment = params['treatment']! as string;
  return geodb.getTreatment(treatment).then(response => {
    const data = conv.data as { userName?: string, [k: string]: any };
    const closeMessage = (data.userName ? `${data.userName}, ` : '') + response.assistant;
    conv.close(closeMessage);
  })
});

export const AssistantController = router;