import { Router, Request, Response } from 'express';
import { dialogflow, Parameters } from 'actions-on-google';

const app = dialogflow();
const router = Router();
router.use(app);

app.intent('favorite color', (conv, params) => {
  const color = params['color']! as string;
  conv.close(`Your number is ${color.length}`);
});

export const AssistantController = router;