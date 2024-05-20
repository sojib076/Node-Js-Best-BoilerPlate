import { Request, Response } from "express";
import moviesServices from "./movies.services";

const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await moviesServices.createMovie(data);
    res.status(200).json({
      success: true,
      message: "MOvie is created succesfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: "Student is not created ",
      data: err,
    });
  }
};
const getMovies = async (req: Request, res: Response) => {
  try {
    const result = await moviesServices.getMovies();
    res.status(200).json({
      success: true,
      message: "ALL Movies are fetched succesfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: "Student is not created ",
      data: err,
    });
  }
};

export default {
  createMovie,
  getMovies,
};
