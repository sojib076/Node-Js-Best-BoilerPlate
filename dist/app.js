"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_route_1 = require("./modules/movies/movies.route");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello Next!");
});
app.use("/api/movies", movies_route_1.MovieRoutes);
exports.default = app;
