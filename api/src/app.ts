import express, {Application, Request, Response} from "express"
const app: Application = express();

const PORT: number = 3000;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World!");
})

app.listen(PORT, (): void => (
  console.log(`Listening on port ${PORT}`)
))

