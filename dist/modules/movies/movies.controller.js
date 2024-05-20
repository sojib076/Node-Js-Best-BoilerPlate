"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movies_services_1 = __importDefault(require("./movies.services"));
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield movies_services_1.default.createMovie(data);
        res.status(200).json({
            success: true,
            message: 'MOvie is created succesfully',
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Student is not created ',
            data: err,
        });
    }
});
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movies_services_1.default.getMovies();
        res.status(200).json({
            success: true,
            message: 'ALL Movies are fetched succesfully',
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Student is not created ',
            data: err,
        });
    }
});
exports.default = {
    createMovie,
    getMovies
};
