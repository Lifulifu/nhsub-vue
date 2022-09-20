import express, { Request, Response } from "express";

const app = express();
const PORT = 4869;

app.get("/api", (req: Request, res: Response) => {
  res.send('ass');
});

app.listen(PORT, () => {
  console.log(`Express listening at port ${PORT}`);
});
