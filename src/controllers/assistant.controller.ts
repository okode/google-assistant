import { Router, Request, Response } from 'express';

const router = Router();

let counter = 0;

router.post('/', (req: Request, res: Response) => {
  res.header('Content-Type', 'application/json');
  let response = { fulfillmentText: `Hello from Okode, counter is ${counter++}` };
  res.send(response);
});

export const AssistantController = router;