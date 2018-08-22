import { Router, Request, Response } from 'express';

const router = Router();

let counter = 0;

router.post('/', (req: Request, res: Response) => {
  res.header('Content-Type', 'application/json');
  let response = { fulfillmentText: `Hola desde Okode, mi contador es ${counter++}` };
  res.send(response);
});

export const AssistantController = router;