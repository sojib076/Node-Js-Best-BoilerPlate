import { MovieModel } from "./movies.model";

const createMovie = async (data: object) => {
  console.log("data", typeof data);
  const mongoosedata = await MovieModel.create(data);
  return mongoosedata;
};

const getMovies = async () => {
  const result = await MovieModel.find();
  return result;
};

export default {
  createMovie,
  getMovies,
};
