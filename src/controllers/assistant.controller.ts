import { Router, Request, Response } from 'express';
import { dialogflow, Parameters } from 'actions-on-google';

const app = dialogflow();
const router = Router();
router.use(app);

app.intent('color favorito', (conv, params) => {
  const color = params['color']! as string;
  conv.close(`Tu número es ${color.length}`);
});

export const AssistantController = router;