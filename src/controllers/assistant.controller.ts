import { Router } from 'express';
import { dialogflow, Permission } from 'actions-on-google';

const app = dialogflow();
const router = Router();
router.use(app);

app.intent('Default Welcome Intent', (conv, _) => {
  conv.ask(new Permission({
    context: 'Hola, para poder saber mejor de ti',
    permissions: 'NAME'
  }));
});

app.intent('actions_intent_PERMISSION', (conv, _, permissionGranted) => {
  if (!permissionGranted) {
    conv.ask('Vale, no te preocupes. ¿Qué tratamiento quieres consultar?');
  } else {
    const data = conv.data as { userName?: string, [k: string]: any };
    data.userName = conv.user.name.display;
    conv.ask(`Gracias, ${data.userName}. ¿Qué tratamiento quieres consultar?`);
  }
});

app.intent('medicina', (conv, params) => {
  const tratamiento = params['tratamiento']! as string;
  const data = conv.data as { userName?: string, [k: string]: any };
  if (data.userName) {
    conv.close(`${data.userName}, el tratamiento tiene ${tratamiento.length} caracteres`);
  } else {
    conv.close(`El tratamiento ${tratamiento} tiene ${tratamiento.length} caracteres`);
  }
});

export const AssistantController = router;