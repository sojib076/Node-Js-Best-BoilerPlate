import express, { Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movies.route";

const app = express();

//parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

app.use("/api/movies", MovieRoutes);

export default app;
