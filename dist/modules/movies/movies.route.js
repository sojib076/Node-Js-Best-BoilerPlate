"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const express_1 = require("express");
const movies_controller_1 = __importDefault(require("./movies.controller"));
const router = (0, express_1.Router)();
router.post("/", movies_controller_1.default.createMovie);
router.get("/", movies_controller_1.default.getMovies);
exports.MovieRoutes = router;
