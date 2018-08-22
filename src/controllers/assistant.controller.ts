import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  console.log(JSON.stringify(req.body));
  res.header('Content-Type', 'application/json');
  let response = { fulfillmentText: 'Hello from Okode Quote Day' };
  res.send(response);
});

export const AssistantController = router;