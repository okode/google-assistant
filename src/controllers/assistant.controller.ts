import { Router, Request, Response } from 'express';
import { dialogflow } from 'actions-on-google';

const app = dialogflow({ debug: true });
const router = Router();
router.use(app);

app.intent('favorite color', (conv, params) => {
  conv.close('Thank you very much for your response');
});

export const AssistantController = router;