import { Router } from "express";
import moviesController from "./movies.controller";
const router = Router();

router.post("/", moviesController.createMovie);
router.get("/", moviesController.getMovies);

export const MovieRoutes = router;
